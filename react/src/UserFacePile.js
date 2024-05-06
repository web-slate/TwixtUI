import React from 'react';

const UserFacePile = ({ user }) => {
  return (
    <img
      src={user.avatarUrl}
      className={`w-14 h-14 rounded-full ${user.class}`}
    />
  );
};

export default UserFacePile;
