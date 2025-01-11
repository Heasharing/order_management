import React, { useState } from 'react';
import { Card } from "@material-tailwind/react";
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
// import { Card } from '@/components/ui/card';

const SettingPage =()=> {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: 'examples@gmail.com',
    mobileNumber: '',
    gender: '',
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('File selected:', file);
      // Add your image upload logic here
    }
  };

  const handleDeleteAvatar = () => {
    console.log('Delete avatar clicked');
    // Add your avatar deletion logic here
  };
  const onClickPassword = (e) => {
    e.preventDefault();
    // Add your password change logic here
    navigate('/regis');
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-6">Account settings</h1>
        
        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-2">
              <div className="space-y-1">
                <div className="flex items-center px-3 py-2 bg-blue-50 text-blue-600 rounded-md">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>Profile Settings</span>
                </div>
                <div className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  {/* <Button type='none'
                  onClick={onClickPassword}> Password
                  
                  </Button> */}
                  <Link to="/regis" onClick={onClickPassword}>Password</Link>
                </div>
                
                <div className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span>Notifications</span>
                </div>
                <div className="flex items-center px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span>Verification</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-3">
            <Card className="p-6">
              <form onSubmit={handleSubmit}>
                {/* Profile Photo Section */}
                <div className="flex items-center mb-8">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100">
                      <img 
                        src="/api/placeholder/96/96"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full text-white cursor-pointer">
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </label>
                  </div>
                  <div className="ml-4">
                    <label className="px-4 py-2 bg-blue-600 text-white rounded-md cursor-pointer mr-2">
                      <input 
                        type="file" 
                        className="hidden" 
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                      Upload New
                    </label>
                    <button 
                      type="button" 
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                      onClick={handleDeleteAvatar}
                    >
                      Delete avatar
                    </button>
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First name"
                      className="w-full p-2 border rounded-md"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="w-full p-2 border rounded-md"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full p-2 border rounded-md"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Mobile Number */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <select className="p-2 border rounded-l-md bg-white">
                        <option value="">kh +885</option>
                      </select>
                      <input
                        type="tel"
                        name="mobileNumber"
                        placeholder="0806 123 7890"
                        className="w-full p-2 border border-l-0 rounded-r-md"
                        value={formData.mobileNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Gender */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Gender
                    </label>
                    <div className="flex space-x-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          className="mr-2"
                          checked={formData.gender === 'male'}
                          onChange={handleInputChange}
                        />
                        Male
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="gender"
                          value="female"
                          className="mr-2"
                          checked={formData.gender === 'female'}
                          onChange={handleInputChange}
                        />
                        Female
                      </label>
                    </div>
                  </div>
    
                </div>
                {/* Submit Button */}
                <div className="mt-6">
                  <button 
                    type="submit" 
                    className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
              {/* add card  */}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingPage;