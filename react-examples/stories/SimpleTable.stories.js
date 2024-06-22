import React from 'react';
import TwixtSimpleTable from '../../react/src/SimpleTable.js';

export default {
  title: 'Common/TwixtSimpleTable',
  component: TwixtSimpleTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    title: 'Welcome to SimpleTable Component',
    desc: 'Explore the SimpleTable component for improved layout designed to enhance your experience.'
  },
};

export const Default = () => (
  <TwixtSimpleTable
    title="Default Table"
    config={{
      addLabel: 'Add Item',
      onAddClick: () => alert('Add button clicked'),
      uniqueFieldId: 'id',
      displayFields: [
        { fieldId: 'name', rowStyle: 'px-4 py-2', cellStyle: 'font-bold', textStyle: 'text-gray-800' },
        { fieldId: 'age', rowStyle: 'px-4 py-2', cellStyle: '', textStyle: 'text-gray-600' },
        { fieldId: 'email', rowStyle: 'px-4 py-2', cellStyle: '', textStyle: 'text-gray-600' }
      ],
      viewLabel: 'View'
    }}
    data={[
      { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', age: 25, email: 'jane@example.com' },
      { id: 3, name: 'Bob Johnson', age: 40, email: 'bob@example.com' }
    ]}
  />
);

export const CustomData = () => (
  <SimpleTable
    title="Custom Data Table"
    config={{
      addLabel: 'Add Item',
      onAddClick: () => alert('Add button clicked'),
      uniqueFieldId: 'id',
      displayFields: [
        { fieldId: 'product', rowStyle: 'px-4 py-2', cellStyle: 'font-bold', textStyle: 'text-gray-800' },
        { fieldId: 'price', rowStyle: 'px-4 py-2', cellStyle: '', textStyle: 'text-gray-600' },
        { fieldId: 'quantity', rowStyle: 'px-4 py-2', cellStyle: '', textStyle: 'text-gray-600' }
      ],
      viewLabel: 'Details'
    }}
    data={[
      { id: 1, product: 'Laptop', price: '$1000', quantity: 5 },
      { id: 2, product: 'Smartphone', price: '$800', quantity: 10 }
    ]}
  />
);
