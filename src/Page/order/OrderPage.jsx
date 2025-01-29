import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Trash2, Plus, Minus, Users } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import img from "../../assets/Picture/fried-rice.jpg"

const OrderSystem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showTableModal, setShowTableModal] = useState(true);
  const [tableNumber, setTableNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const tables = [
    { id: 1, number: 1, chairCount: 4, isAvailable: true, notes: "Near window" },
    { id: 2, number: 2, chairCount: 6, isAvailable: false, notes: "Reserved" },
    { id: 3, number: 3, chairCount: 2, isAvailable: true, notes: "For couples" },
    { id: 4, number: 4, chairCount: 8, isAvailable: true, notes: "Family table" },
  ];

  const menuItems = [
    { id: 1, name: "Fried Rice", price: 12.99, category: "Main", image: img},
    { id: 2, name: "Chicken Curry", price: 15.99, category: "Main", image: "/api/placeholder/400/300" },
    { id: 3, name: "Coca Cola", price: 2.99, category: "Drinks", image: "/api/placeholder/400/300" },
    { id: 4, name: "Green Salad", price: 8.99, category: "Sides", image: "/api/placeholder/400/300" },
  ];

  const handleCheckout = () => {
    const newOrder = {
      orderId: `ORD${Math.floor(Math.random() * 90000) + 10000}`,
      customer: `Table ${selectedTable.number}`,
      date: new Date().toISOString().split("T")[0],
      payment: "Pending",
      amount: `$${totalAmount.toFixed(2)}`,
    };

    alert(`Order ${newOrder.orderId} has been placed successfully!`);
    setSelectedItems([]);
    setSelectedTable(null);
    setCurrentStep(1);
    setShowTableModal(true);
    window.location.href = "/orderhistory";
  };

  const handleNext = () => {
    const currentTable = tables[currentSlide];
    if (currentTable.isAvailable) {
      setSelectedTable(currentTable);
      setShowTableModal(false);
      setCurrentStep(2);
      setTableNumber("");
      setErrorMessage("");
    } else {
      setErrorMessage("Please select an available table first");
    }
  };

  const handleTableNumberChange = (e) => {
    const value = e.target.value;
    setTableNumber(value);
    if (value) {
      const number = parseInt(value);
      const tableIndex = tables.findIndex((t) => t.number === number);
      if (tableIndex !== -1) {
        setCurrentSlide(tableIndex);
        setErrorMessage(""); // Clear error if a valid table is selected
      } else {
        setErrorMessage("Table number does not exist");
      }
    }
  };

  const handleTableSelect = (table) => {
    if (table.isAvailable) {
      setCurrentSlide(tables.findIndex((t) => t.id === table.id));
    }
  };

  const handleItemSelect = (item) => {
    const existingItem = selectedItems.find((i) => i.id === item.id);
    if (existingItem) {
      setSelectedItems(
        selectedItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
    } else {
      setSelectedItems(
        selectedItems.map((item) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (itemId) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
  };

  const totalQuantity = selectedItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = selectedItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="flex h-screen">
      <div className="flex-1 p-4 overflow-y-auto">
        <Dialog open={showTableModal} onOpenChange={setShowTableModal}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold mb-6">Select a Table</DialogTitle>
            </DialogHeader>

            <div className="mb-6">
              <Input
                type="number"
                placeholder="Search table number"
                value={tableNumber}
                onChange={handleTableNumberChange}
                min="1"
                max={tables.length}
                className="w-full"
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
            </div>

            <div className="px-8 py-4">
              <Card
                className={`w-full cursor-pointer transition-all duration-200 ${
                  tables[currentSlide].isAvailable
                    ? "hover:shadow-lg"
                    : "opacity-50 cursor-not-allowed"
                }`}
                onClick={() => handleTableSelect(tables[currentSlide])}
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="bg-gray-100 rounded-full w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                      <span className="text-3xl font-bold">T{tables[currentSlide].number}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Table {tables[currentSlide].number}</h3>
                    <div className="flex items-center justify-center gap-2 mb-3 text-gray-600">
                      <Users className="h-5 w-5" />
                      <span className="text-lg">{tables[currentSlide].chairCount} seats</span>
                    </div>
                    <p className="text-gray-500 mb-4">{tables[currentSlide].notes}</p>
                    <div
                      className={`text-base font-medium ${
                        tables[currentSlide].isAvailable ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {tables[currentSlide].isAvailable ? "Available" : "Occupied"}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="flex justify-end mt-6">
                <Button
                  onClick={handleNext}
                  className="bg-blue-400 hover:bg-blue-500 text-white px-8 rounded-full"
                >
                  Next
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {currentStep === 2 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Menu Items</h2>
              <div className="flex items-center gap-4">
                <p className="text-gray-600">Table {selectedTable.number}</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowTableModal(true);
                    setSelectedTable(null);
                    setCurrentStep(1);
                  }}
                >
                  Change Table
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-4 lg:grid-cols-4 gap-4">
              {menuItems.map((item) => (
                <Card key={item.id} className="hover:shadow-lg">
                  <CardContent className="p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-62 object-cover rounded-lg mb-4"
                    />
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold">{item.name}</h3>
                        <p className="text-gray-600">{item.category}</p>
                        <p className="text-lg font-bold mt-2">${item.price}</p>
                      </div>
                      <Button onClick={() => handleItemSelect(item)}>Add</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="w-96 border-l bg-gray-50 p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <span className="text-sm text-gray-600">
            {totalQuantity} {totalQuantity === 1 ? "item" : "items"}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto">
          {selectedItems.length === 0 ? (
            <p className="text-center text-gray-500 py-4">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {selectedItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">{item.name}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus />
                      </Button>
                    </div>
                    <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-4 border-t pt-4">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Total:</span>
            <span className="font-semibold">${totalAmount.toFixed(2)}</span>
          </div>
          <Button
            onClick={handleCheckout}
            className="w-full bg-green-500 text-white hover:bg-green-600"
            disabled={selectedItems.length === 0}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSystem;
