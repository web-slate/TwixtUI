import React from 'react';

const UserFacePile = ({ users }) => {
    
  return (
    <>
    <div className="flex items-center space-x-2">
      {users.map((user, index) => (
        <img
          key={index}
          src={user.avatarUrl}
          className={`w-14 h-14 rounded-full ${user.class}`}
        />
      ))}
    </div>
    </>
  );
};

export default UserFacePile;
