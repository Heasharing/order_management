import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2, Plus, Minus } from "lucide-react";
import friedRiceImg from "/src/assets/Picture/fried-rice.jpg";
// import chickenCurryImg from "./src/assets/images/chicken-curry.jpg";
// import cocaColaImg from "./src/assets/images/coca-cola.jpg";
// import greenSaladImg from "./src/assets/images/green-salad.jpg";
const OrderSystem = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTable, setSelectedTable] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  const tables = [
    { id: 1, number: 1, chairCount: 4, isAvailable: true, notes: "Near window" },
    { id: 2, number: 2, chairCount: 6, isAvailable: false, notes: "Reserved" },
    { id: 3, number: 3, chairCount: 2, isAvailable: true, notes: "For couples" },
    { id: 4, number: 4, chairCount: 8, isAvailable: true, notes: "Family table" },
  ];

  const menuItems = [
    { id: 1, name: "Fried Rice", price: 12.99, category: "Main", image: friedRiceImg },
    { id: 2, name: "Chicken Curry", price: 15.99, category: "Main", image: "/images/chicken-curry.jpg" },
    { id: 3, name: "Coca Cola", price: 2.99, category: "Drinks", image: "/images/coca-cola.jpg" },
    { id: 4, name: "Green Salad", price: 8.99, category: "Sides", image: "/images/green-salad.jpg" },
  ];

  const handleTableSelect = (tableId) => {
    const table = tables.find((t) => t.id === parseInt(tableId));
    if (table && table.isAvailable) {
      setSelectedTable(table);
      setSelectedItems([]);
      setCurrentStep(2);
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
      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto">
        {currentStep === 1 && (
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-6">Step 1: Select Table</h2>
            <Select onValueChange={handleTableSelect}>
              <SelectTrigger className="w-full mb-4">
                <SelectValue placeholder="Choose a table" />
              </SelectTrigger>
              <SelectContent>
                {tables.map((table) => (
                  <SelectItem
                    key={table.id}
                    value={table.id.toString()}
                    disabled={!table.isAvailable}
                  >
                    Table {table.number} - {table.chairCount} seats 
                    {!table.isAvailable && " (Occupied)"} - {table.notes}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {currentStep === 2 && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Menu Items</h2>
              <div className="flex items-center gap-4">
                <p className="text-gray-600">Table {selectedTable.number}</p>
                <Button variant="outline" onClick={() => {
                  setSelectedTable(null);
                  setCurrentStep(1);
                }}>
                  Change Table
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {menuItems.map((item) => (
                <Card key={item.id} className="hover:shadow-lg">
                  <CardContent className="p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 object-cover rounded-lg mb-4"
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

      {/* Shopping Cart */}
      <div className="w-96 border-l bg-gray-50 p-4 flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <span className="text-sm text-gray-600">
            {totalQuantity} {totalQuantity === 1 ? 'item' : 'items'}
          </span>
        </div>

        <div className="flex-1 overflow-y-auto">
          {selectedItems.length === 0 ? (
            <p className="text-center text-gray-500 py-4">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {selectedItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">{item.name}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-700 p-0 h-auto"
                      onClick={() => handleRemoveItem(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between mb-2">
            <span className="font-medium">Subtotal</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          <Button 
            className="w-full mt-4" 
            disabled={selectedItems.length === 0}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderSystem;
