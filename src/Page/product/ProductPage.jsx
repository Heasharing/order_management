import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import ModalPopUp from '../Model/ModalPopUp'
import { Modal } from "antd";
import ModalPage from "../Model/ModelPage";

function ProductPage() {
  const [isCartOpen, setIsCartOpen] = useState(true); // Cart is initially open
  
  // Sample product list with price and quantity
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/plus/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: 35,  // Use numeric value for price
      color: "Black",
      quantity: 1,  // Initial quantity
    },
    // More products can be added here
  ]);

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    setIsCartOpen(true); // Open cart when quantity is updated
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
    setIsCartOpen(true); // Open cart when quantity is updated
  };

  const getSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-white border-[5px] inset-0 overflow-hidden">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 px-4 py-6 sm:px-6 sm:py-9 lg:max-w-7xl mx-auto">
        <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"

            />
        
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleIncrement(product.id)}
                >
                  
                  +

                </button>
              </div>
              
            </div>
          </div>
        ))}
         <ModalPage/>
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  // onClick={() => handleIncrement(product.id)}
                  onClick={ModalPopUp}
                >
                  +
                </button>
              </div>
              <Modal/>
            </div>
          </div>
        ))}
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        {cartItems.map((product) => (
          <div key={product.id} className="group relative bg-white shadow-sm rounded-lg p-4">
            <img
              alt={product.imageAlt}
              src={product.imageSrc}
              className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75"
            />
            <div className="mt-4">
              <h3 className="text-sm text-gray-700">
                <a href={product.href}>
                  <span aria-hidden="true" className="absolute inset-0" />
                  {product.name}
                </a>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.color}</p>
              <p className="text-sm font-medium text-gray-900">
                ${product.price}
              </p>
              <div className="flex items-center mt-2">
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-l-md"
                  onClick={() => handleDecrement(product.id)}
                >
                  -
                </button>
                <span className="px-4">{product.quantity}</span>
                <button
                  type="button"
                  className="px-2 py-1 bg-gray-200 rounded-r-md"
                  onClick={() => handleIncrement(product.id)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* Cart Dialog */}
      {/* <div
        className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 transition-opacity duration-300 ${
          isCartOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsCartOpen()} // Closes cart when clicking outside
      ></div> */}

      <div
        className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-xl transition-transform duration-300 transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-medium text-gray-900">Invoice</h2>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)} // Close cart button
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              <span className="sr-only">Close cart</span>
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            <ul className="divide-y divide-gray-200">
              {cartItems.map((product) => (
                <li key={product.id} className="flex py-4">
                  <div className="w-24 h-24 overflow-hidden rounded-md border">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="ml-4 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-900">
                        <a href={product.href}>{product.name}</a>
                      </h3>
                      <p className="text-sm text-gray-500">{product.color}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
                      <button
                        type="button"
                        className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer */}
          <div className="p-4 border-t">
            <div className="flex justify-between text-lg font-medium text-gray-900">
              <span>Subtotal</span>
              <span>${getSubtotal().toFixed(2)}</span>
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <button
              type="button"
              className="mt-4 w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={() => setIsCartOpen(false)}
              className="mt-4 w-full text-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              Continue Shopping &rarr;
            </button>
          </div>
        </div>
        </div>
        
      </div>
    
  );
}

export default ProductPage;
