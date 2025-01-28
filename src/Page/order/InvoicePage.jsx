import React,{ useState, useEffect } from 'react';

import{
    OrderCreationView,
    CheckoutView,
    OrderHistoryView
} from '@chakra-ui/react'
// Utility function to generate unique order ID
const generateOrderId = () => {
  return `ORD-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
};

// Sample initial menu items
const MENU_ITEMS = [
  { id: 1, name: 'Burger', price: 10.99, category: 'Main Course' },
  { id: 2, name: 'Pizza', price: 12.99, category: 'Main Course' },
  { id: 3, name: 'Salad', price: 8.50, category: 'Appetizer' },
  { id: 4, name: 'Pasta', price: 11.25, category: 'Main Course' },
  { id: 5, name: 'Steak', price: 18.99, category: 'Main Course' }
];

// Tables with additional details
const TABLES = [
  { number: 1, capacity: 2, status: 'Available' },
  { number: 2, capacity: 4, status: 'Available' },
  { number: 3, capacity: 6, status: 'Occupied' },
  { number: 4, capacity: 2, status: 'Available' },
  { number: 5, capacity: 8, status: 'Available' }
];

// Payment methods
const PAYMENT_METHODS = ['Cash', 'Credit Card', 'Debit Card', 'Mobile Payment'];

// Main Order Management Component
function RestaurantOrderSystem() {
  const [currentView, setCurrentView] = useState('order');
  const [orderHistory, setOrderHistory] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(null);

  // Load order history from localStorage on component mount
  useEffect(() => {
    const savedOrderHistory = localStorage.getItem('orderHistory');
    if (savedOrderHistory) {
      try {
        setOrderHistory(JSON.parse(savedOrderHistory));
      } catch (error) {
        console.error('Error parsing order history:', error);
        setOrderHistory([]);
      }
    }
  }, []);

  // Save order history to localStorage whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
    } catch (error) {
      console.error('Error saving order history:', error);
    }
  }, [orderHistory]);

  // Function to handle order confirmation
  const handleConfirmOrder = (orderDetails) => {
    if (!orderDetails || !orderDetails.table || !orderDetails.items || orderDetails.items.length === 0) {
      alert('Please complete all order details before proceeding.');
      return;
    }

    const newOrder = {
      ...orderDetails,
      id: generateOrderId(),
      timestamp: new Date().toISOString(),
      status: 'Pending'
    };

    setCurrentOrder(newOrder);
    setCurrentView('checkout');
  };

  // Function to complete payment and save to order history
  const handlePaymentComplete = (paymentMethod) => {
    if (!currentOrder) {
      alert('No current order to process.');
      return;
    }

    const completedOrder = {
      ...currentOrder,
      paymentMethod,
      status: 'Completed',
      paymentTimestamp: new Date().toISOString()
    };

    setOrderHistory((prev) => [completedOrder, ...prev]);
    setCurrentOrder(null);
    setCurrentView('order-history');
  };

  const renderView = () => {
    switch (currentView) {
      case 'order':
        return (
          <OrderCreationView
            onConfirmOrder={handleConfirmOrder}
            menuItems={MENU_ITEMS}
            tables={TABLES}
          />
        );
      case 'checkout':
        return currentOrder ? (
          <CheckoutView
            order={currentOrder}
            paymentMethods={PAYMENT_METHODS}
            onPaymentComplete={handlePaymentComplete}
            onCancel={() => setCurrentView('order')}
          />
        ) : (
          <div className="text-center text-red-500">
            No order to checkout. Please create a new order.
          </div>
        );
      case 'order-history':
        return (
          <OrderHistoryView
            orders={orderHistory}
            onBackToOrder={() => setCurrentView('order')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex justify-between mb-4">
        {currentView !== 'order' && (
          <button
            onClick={() => setCurrentView('order')}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            New Order
          </button>
        )}
        {currentView !== 'order-history' && (
          <button
            onClick={() => setCurrentView('order-history')}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Order History
          </button>
        )}
      </div>
      {renderView()}
    </div>
  );
}

// Other Components (OrderCreationView, CheckoutView, OrderHistoryView)
// No changes were necessary for these components in your current version. They remain functional.

export default RestaurantOrderSystem;
