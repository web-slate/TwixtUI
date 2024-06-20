import React from 'react';

const FormField = ({ id, label }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type="text"
      id={id}
      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  </div>
);
const SubmitButton = ({ onSubmit }) => (
  <div className="flex justify-end">
    <button
      type="button"
      onClick={onSubmit}
      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </div>
);

const FormComponent = ({ fields, onSubmit }) => {
  return (
    <form className="space-y-6">
      {fields.map((field, index) => (
        <FormField key={index} id={field.id} label={field.label} />
      ))}
      <SubmitButton onSubmit={onSubmit} />
    </form>
  );
};

export default FormComponent;
