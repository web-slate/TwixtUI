import React from 'react';

const Divider = ({ gap = 'mt-4' }) => {
  return <hr className={`bg-gray-900 my-4 ${gap}`} />;
};

export default Divider;
