// import React from 'react'

// const Profile = () => {
//   return (
//     <div>Profile</div>
//   )
// }

// export default Profile


import React, { useState } from 'react';
import '../App.css';

// const Tab = ({ label, activeTab, onClick }) => (
//   <div
//     className={`tab ${activeTab === label ? 'active' : ''}`}
//     onClick={() => onClick(label)}
//   >
//     {label}
//   </div>
// );

const Form = () => {
  // Your form component logic goes here
  return (
    <div>
      <h2>Form Component</h2>
      
      {/* Your form elements go here */}
    </div>
  );
};


const Table1 = () => {
  // Your table component logic goes here
  return (
    <div>
      <h2>Table 1 Component</h2>
      {/* Your table content goes here */}
    </div>
  );
};

const Table2 = () => {
  // Your second table component logic goes here
  return (
    <div>
      <h2>Table 2 Component</h2>
      {/* Your second table content goes here */}
    </div>
  );
};

const Tab = ({ label, activeTab, onClick }) => (
  <div
    className={`tab ${activeTab === label ? 'active' : ''}`}
    onClick={() => onClick(label)}
  >
    {label}
  </div>
);

const Profile = () => {
  const [activeTab, setActiveTab] = useState('Form');

  const tabs = ['Form', 'Table 1', 'Table 2'];

  const tabComponents = {
    Form: <Form />,
    'Table 1': <Table1 />,
    'Table 2': <Table2 />,
  };

  return (
    <div className="app">
      <div className="tabs">
        {tabs.map((tab) => (
          <Tab key={tab} label={tab} activeTab={activeTab} onClick={setActiveTab} />
        ))}
      </div>
      {tabComponents[activeTab]}
    </div>
  );
};

export default Profile;
