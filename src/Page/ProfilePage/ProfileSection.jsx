import React from 'react';
import { Edit } from 'lucide-react';

export const ProfileSection = ({ formData, editingSection, handleEdit }) => {
  return (
    <div className="bg-white rounded-lg p-6 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img 
            src="/api/placeholder/64/64"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h2 className="text-lg font-medium">{formData.firstName} {formData.lastName}</h2>
            <p className="text-gray-600">{formData.bio}</p>
            <p className="text-gray-600">{formData.cityState}, {formData.country}</p>
          </div>
        </div>
        <button 
          onClick={() => handleEdit('profile')}
          className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
        >
          <span>Edit</span>
          <Edit className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
