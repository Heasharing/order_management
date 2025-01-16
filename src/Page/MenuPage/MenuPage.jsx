import React from "react";
import image from "../../assets/Picture/image.png"

const MenuPage = () => {
  const menuItems = [
    {
      title: "Chicken Alfredo with Broccoli",
      description: "Creamy Chicken Alfredo paired with fresh broccoli florets.",
      price: "$8.00",
      stock: 42,
      sold: 33,
      image: image, // Replace with the actual image path
    },
    {
      title: "Baked Ziti with Meat Sauce",
      description: "Hearty Baked Ziti complemented by savory meat sauce, a classic dish.",
      price: "$8.00",
      stock: 35,
      sold: 21,
      image: image,
    },
    // Add more items here...
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-screen bg-gray-100 p-4">
        <div className="font-semibold text-lg mb-4">Manage Menu</div>
        <ul>
          <li className="py-2 hover:bg-gray-200 rounded px-2">Sales Summary</li>
          <li className="py-2 hover:bg-gray-200 rounded px-2">Settings</li>
          <li className="py-2 hover:bg-gray-200 rounded px-2">Help Center</li>
          <li className="py-2 hover:bg-gray-200 rounded px-2">Sign Out</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 bg-gray-50">
        <h1 className="text-2xl font-bold mb-6">Menu</h1>
        <div className="grid gap-x-2 gap-y-5 grid-cols-4 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
        <div className="">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold">{item.price}</span>
                <span className="text-sm text-gray-500">
                  Stock: {item.stock} | Sold: {item.sold}
                </span>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Manage
              </button>
            </div>
          ))}
        </div>
        <div className="">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold">{item.price}</span>
                <span className="text-sm text-gray-500">
                  Stock: {item.stock} | Sold: {item.sold}
                </span>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Manage
              </button>
            </div>
          ))}
        </div>
        <div className="">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded"
              />
              <h2 className="text-lg font-semibold mt-4">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.description}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="font-bold">{item.price}</span>
                <span className="text-sm text-gray-500">
                  Stock: {item.stock} | Sold: {item.sold}
                </span>
              </div>
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Manage
              </button>
            </div>
          ))}
        </div>
        
      </div>
      </div>
    </div>
  );
};

export default MenuPage;
