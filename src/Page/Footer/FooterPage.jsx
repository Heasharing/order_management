import React from 'react';

const FooterPage = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-6">
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* PTC COMPUTER */}
        <div>
          <h3 className="text-xl font-bold mb-2">PTC COMPUTER</h3>
          <p className="text-gray-600">Opening Hours:</p>
          <p className="text-gray-600">Monday to Sunday, 8:00 AM to 5:30 PM.</p>
        </div>

        {/* CONTACT US */}
        <div>
          <h4 className="text-lg font-semibold mb-2">CONTACT US</h4>
          <div>
            <h5 className="font-medium">Sales Showroom</h5>
            <p className="text-gray-600">📞 012 220 152</p>
            <p className="text-gray-600">📞 093 456 747</p>
            <p className="text-gray-600">📞 071 5777 378</p>
          </div>
          <div className="mt-4">
            <h5 className="font-medium">Service Center</h5>
            <p className="text-gray-600">📞 012 220 135</p>
            <p className="text-gray-600">📞 093 456 735</p>
            <p className="text-gray-600">📞 031 3220 135</p>
          </div>
        </div>

        {/* CONDITIONS APPLY */}
        <div>
          <h4 className="text-lg font-semibold mb-2">CONDITIONS APPLY</h4>
          <ul className="space-y-2">
            <li className="text-blue-600 hover:underline cursor-pointer">Terms & Conditions</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Privacy Policy</li>
            <li className="text-blue-600 hover:underline cursor-pointer">About us</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Help</li>
          </ul>
        </div>

        {/* MY ACCOUNT */}
        <div>
          <h4 className="text-lg font-semibold mb-2">MY ACCOUNT</h4>
          <ul className="space-y-2">
            <li className="text-blue-600 hover:underline cursor-pointer">Login</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Order History</li>
            <li className="text-blue-600 hover:underline cursor-pointer">My Wishlist</li>
            <li className="text-blue-600 hover:underline cursor-pointer">Track Order</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
