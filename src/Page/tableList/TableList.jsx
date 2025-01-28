import React from "react";
// TableList Component
import { Card, CardContent } from "@/components/ui/card";
// Assuming you're using a UI library like Shadcn or Material UI

const TableList = () => {
    const tables = [
        { id: 1, number: 1, chairCount: 4, isAvailable: true, notes: "Near the window" },
        { id: 2, number: 2, chairCount: 6, isAvailable: false, notes: "Reserved for a party" },
        { id: 3, number: 3, chairCount: 2, isAvailable: true, notes: "Perfect for couples" },
        { id: 4, number: 4, chairCount: 8, isAvailable: false, notes: "Family-sized table" },
      ];
    

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tables.map((table) => (
        <Card key={table.id} className="shadow-md border">
          <CardContent className="p-4">
            {/* Table Number */}
            <h5 className="text-xl font-semibold mb-2">Table {table.number}</h5>

            {/* Chair Count */}
            <p className="text-gray-600">
              <strong>Chairs:</strong> {table.chairCount}
            </p>

            {/* Availability */}
            <p
              className={`${
                table.isAvailable ? "text-green-500" : "text-red-500"
              }`}
            >
              <strong>Status:</strong>{" "}
              {table.isAvailable ? "Available" : "Occupied"}
            </p>

            {/* Special Notes */}
            {table.notes && (
              <p className="text-gray-500 italic mt-2">{table.notes}</p>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TableList;
