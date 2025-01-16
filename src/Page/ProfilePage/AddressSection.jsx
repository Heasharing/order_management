// /* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-no-undef */
// // eslint-disable-next-line no-unused-vars
// import React from 'react';
// import { Button,Input  } from 'bootstrap';

// const AddressSection = ({
//   formData, tempData, setTempData, editingSection, handleEdit, handleSave, handleCancel
// }) => {
//   const renderField = (label, value) => (
//     <div className="space-y-1">
//       <label className="text-sm text-gray-600">{label}</label>
//       <p className="text-gray-900">{value}</p>
//     </div>
//   );

//   const renderEditableField = (label, name) => (
//     <div className="space-y-1">
//       <label className="text-sm text-gray-600">{label}</label>
//       <Input
//         type="text"
//         value={tempData[name]}
//         onChange={(e) => setTempData({ ...tempData, [name]: e.target.value })}
//         className="max-w-md"
//       />
//     </div>
//   );

//   return (
//     <div className="bg-white rounded-lg p-6 space-y-4">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-medium">Address</h3>
//         {editingSection !== 'address' ? (
//           <button 
//             onClick={() => handleEdit('address')}
//             className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
//           >
//             <span>Edit</span>
//             {/* Assuming you have an icon named Edit */}
//             <Edit className="w-4 h-4" />
//           </button>
//         ) : (
//           <div className="space-x-2">
//             <Button onClick={handleCancel} variant="outline">Cancel</Button>
//             <Button onClick={handleSave}>Save</Button>
//           </div>
//         )}
//       </div>

//       <div className="grid grid-cols-2 gap-6">
//         {editingSection === 'address' ? (
//           <>
//             {renderEditableField('Country', 'country')}
//             {renderEditableField('City/State', 'cityState')}
//             {renderEditableField('Postal Code', 'postalCode')}
//             {renderEditableField('TAX ID', 'taxId')}
//           </>
//         ) : (
//           <>
//             {renderField('Country', formData.country)}
//             {renderField('City/State', formData.cityState)}
//             {renderField('Postal Code', formData.postalCode)}
//             {renderField('TAX ID', formData.taxId)}
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddressSection;
