// // eslint-disable-next-line no-unused-vars
// import React, { useState } from 'react';
// // // eslint-disable-next-line no-unused-vars
// import { Edit } from 'boostrap';
// import { ProfileSection } from '../ProfilePage/ProfileSection';
// import { PersonalInfoSection } from '../ProfilePage/PersonalInfoSection';
// import { AddressSection } from '../ProfilePage/AddressSection';

// const ProfileSettings = () => {
//   const [editingSection, setEditingSection] = useState(null);
//   const [formData, setFormData] = useState({
//     firstName: "Rafiqur",
//     lastName: "Rahman",
//     email: "rafiqurrahman51@gmail.com",
//     phone: "+09 345 346 46",
//     bio: "Team Manager",
//     country: "United Kingdom",
//     cityState: "Leeds, East London",
//     postalCode: "ERT 2354",
//     taxId: "AS65645756"
//   });

//   const [tempData, setTempData] = useState({ ...formData });

//   const handleEdit = (section) => {
//     setTempData({ ...formData });
//     setEditingSection(section);
//   };

//   const handleSave = () => {
//     setFormData({ ...tempData });
//     setEditingSection(null);
//   };

//   const handleCancel = () => {
//     setTempData({ ...formData });
//     setEditingSection(null);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-8">
//       <h1 className="text-xl font-medium">My Profile</h1>

//       <ProfileSection
//         formData={formData}
//         editingSection={editingSection}
//         handleEdit={handleEdit}
//       />

//       <PersonalInfoSection
//         formData={formData}
//         tempData={tempData}
//         setTempData={setTempData}
//         editingSection={editingSection}
//         handleEdit={handleEdit}
//         handleSave={handleSave}
//         handleCancel={handleCancel}
//       />

//       <AddressSection
//         formData={formData}
//         tempData={tempData}
//         setTempData={setTempData}
//         editingSection={editingSection}
//         handleEdit={handleEdit}
//         handleSave={handleSave}
//         handleCancel={handleCancel}
//       />
//     </div>
//   );
// };

// export default AddressSection;
