// /* eslint-disable react/jsx-no-undef */
// /* eslint-disable react/prop-types */
// // eslint-disable-next-line no-unused-vars
// import React from 'react';

// import { Button,Input } from 'bootstrap';

// export const PersonalInfoSection = ({
//   formData, tempData, setTempData, editingSection, handleEdit, handleSave, handleCancel
// }) => {
//   const renderField = (label, value) => (
//     <div className="space-y-1">
//       <label className="text-sm text-gray-600">{label}</label>
//       <p className="text-gray-900">{value}</p>
//     </div>
//   );

//   const renderEditableField = (label, name, type = "text") => (
//     <div className="space-y-1">
//       <label className="text-sm text-gray-600">{label}</label>
//       <Input
//         type={type}
//         value={tempData[name]}
//         onChange={(e) => setTempData({ ...tempData, [name]: e.target.value })}
//         className="max-w-md"
//       />
//     </div>
//   );

//   return (
//     <div className="bg-white rounded-lg p-6 space-y-4">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-lg font-medium">Personal Information</h3>
//         {editingSection !== 'personal' ? (
//           <button 
//             onClick={() => handleEdit('personal')}
//             className="text-blue-600 hover:text-blue-700 flex items-center space-x-1"
//           >
//             <span>Edit</span>
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
//         {editingSection === 'personal' ? (
//           <>
//             {renderEditableField('First Name', 'firstName')}
//             {renderEditableField('Last Name', 'lastName')}
//             {renderEditableField('Email address', 'email', 'email')}
//             {renderEditableField('Phone', 'phone', 'tel')}
//             <div className="col-span-2">
//               {renderEditableField('Bio', 'bio')}
//             </div>
//           </>
//         ) : (
//           <>
//             {renderField('First Name', formData.firstName)}
//             {renderField('Last Name', formData.lastName)}
//             {renderField('Email address', formData.email)}
//             {renderField('Phone', formData.phone)}
//             <div className="col-span-2">
//               {renderField('Bio', formData.bio)}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };
