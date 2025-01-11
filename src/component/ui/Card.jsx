{/* Shopping Cart */}
<div className="fixed right-0 top-0 h-full w-1/3 bg-white shadow-xl overflow-y-scroll">
<div className="px-4 py-6 sm:px-6">
  <div className="flex items-center justify-between">
    <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
    <button type="button" className="text-gray-400 hover:text-gray-500">
      <span className="sr-only">Close panel</span>
      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
    </button>
  </div>
  <ul role="list" className="mt-8 divide-y divide-gray-200">
    {products.map((product) => (
      <li key={product.id} className="flex py-6">
        <div className="h-24 w-24 overflow-hidden rounded-md border border-gray-200">
          <img
            alt={product.imageAlt}
            src={product.imageSrc}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="ml-4 flex-1 flex flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <h3>
                <a href={product.href}>{product.name}</a>
              </h3>
              <p>{product.price}</p>
            </div>
            <p className="mt-1 text-sm text-gray-500">{product.color}</p>
          </div>
          <div className="flex items-end justify-between text-sm">
            <p className="text-gray-500">Qty {product.quantity}</p>
            <button type="button" className="text-indigo-600 hover:text-indigo-500">
              Remove
            </button>
          </div>
        </div>
      </li>
    ))}
  </ul>
  <div className="border-t border-gray-200 mt-6 px-4 py-6 sm:px-6">
    <div className="flex justify-between text-base font-medium text-gray-900">
      <p>Subtotal</p>
      <p>$35</p>
    </div>
    <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
    <div className="mt-6">
      <a
        href="#"
        className="flex items-center justify-center rounded-md bg-indigo-600 px-6 py-3 text-white text-base font-medium shadow-sm hover:bg-indigo-700"
      >
        Checkout
      </a>
    </div>
    <div className="mt-6 flex justify-center text-sm text-gray-500">
      <button type="button" className="text-indigo-600 hover:text-indigo-500">
        Continue Shopping &rarr;
      </button>
    </div>
  </div>
</div>
</div>