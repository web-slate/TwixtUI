import React from 'react';
import TwixtSimpleTable from '../../../react/src/List/SimpleTable';

export default {
  title: 'List/TwixtSimpleTable',
  component: TwixtSimpleTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
  },
};


export const BasicTableWithHeader = () => {
  const tableConfig = {
    canShowHeader: true,
    canShowFilter: false,
    canShowAddButton: false,
    uniqueFieldId: 'id',
    displayFields: [
      { fieldId: 'name', label: 'Name', rowStyle: 'px-6', cellStyle: '', textStyle: 'text-sm font-medium text-gray-800' },
      { fieldId: 'age', label: 'Age', rowStyle: 'px-6', cellStyle: '', textStyle: 'text-sm text-gray-800' },
      { fieldId: 'address', label: 'Address', rowStyle: 'px-6', cellStyle: '', textStyle: 'text-sm text-gray-800' },
    ],
    actions: [],
  };

  const tableData = [
    { id: 1, name: 'John Brown', age: 45, address: 'New York No. 1 Lake Park' },
    { id: 2, name: 'Jim Green', age: 27, address: 'London No. 1 Lake Park' },
    { id: 3, name: 'Joe Black', age: 31, address: 'Sidney No. 1 Lake Park' },
  ];

  return <TwixtSimpleTable title="Users List" config={tableConfig} data={tableData} />
}

export const TableWithActionLinks = () => {
  const actionLinksConfig = {
    canShowHeader: true,
    uniqueFieldId: 'id',
    displayFields: [
      { fieldId: 'name', label: 'Name', rowStyle: 'px-5', cellStyle: 'py-3', textStyle: 'text-sm font-medium leading-none text-gray-600' },
      { fieldId: 'email', label: 'Email', rowStyle: 'px-5', cellStyle: 'py-3', textStyle: 'text-sm leading-none text-gray-500' }
    ],
    actions: [
      {
        actionType: 'link',
        label: 'Edit',
        onClick: (data) => console.log('Edit clicked', data)
      },
      {
        actionType: 'box-item',
        label: ' |',
        overwriteClass: 'px-2'
      },
      {
        actionType: 'link',
        label: 'Delete',
        link: 'https://github.com/web-slate/TwixtUI',
        onClick: (data) => console.log('Delete clicked', data)
      }
    ],
  };

  const actionLinksData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];

  return <TwixtSimpleTable title="Users List" config={actionLinksConfig} data={actionLinksData} />;
}

export const TableWithAddButton = () => {
  const addButtonConfig = {
    canShowHeader: true,
    canShowAddButton: true,
    uniqueFieldId: 'id',
    addLabel: 'Add User',
    onAddClick: () => alert('Add button clicked'),
    displayFields: [
      { fieldId: 'name', label: 'Name', rowStyle: 'px-5', cellStyle: 'py-3', textStyle: 'text-sm font-medium leading-none text-gray-600' },
      { fieldId: 'email', label: 'email', rowStyle: 'px-5', cellStyle: 'py-3', textStyle: 'text-sm leading-none text-gray-500' }
    ]
  };

  const addButtonData = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ];
  return <TwixtSimpleTable title="Users List" config={addButtonConfig} data={addButtonData} />
}

export const TableWithDefaultSortedField = () => {
  const defaultSortingConfig = {
    canShowHeader: true,
    canShowAddButton: true,
    uniqueFieldId: 'id',
    addLabel: 'Add User',
    onAddClick: () => alert('Add button clicked'),
    sorting: {
      fieldId: 'name',
      order: 'desc'
    },
    displayFields: [
      { fieldId: 'name', label: 'Name', rowStyle: 'px-5', cellStyle: 'py-3', textStyle: 'text-sm font-medium leading-none text-gray-600' },
      { fieldId: 'email', label: 'email', rowStyle: 'px-5', cellStyle: 'py-3', textStyle: 'text-sm leading-none text-gray-500' }
    ]
  };

  const defaultSortingData = [
    { id: 1, name: 'Marie Curie', email: 'marie.curie@example.com' },
    { id: 2, name: 'Isaac Newton', email: 'isaac.newton@example.com' },
    { id: 3, name: 'Nikola Tesla', email: 'nikola.tesla@example.com' },
    { id: 4, name: 'Charles Darwin', email: 'charles.darwin@example.com' },
    { id: 5, name: 'Albert Einstein', email: 'albert.einstein@example.com' },
    { id: 6, name: 'Galileo Galilei', email: 'galileo.galilei@example.com' },
    { id: 7, name: 'Ada Lovelace', email: 'ada.lovelace@example.com' },
    { id: 8, name: 'James Clerk Maxwell', email: 'james.maxwell@example.com' },
    { id: 9, name: 'Richard Feynman', email: 'richard.feynman@example.com' },
    { id: 10, name: 'Niels Bohr', email: 'niels.bohr@example.com' },
    { id: 11, name: 'Rosalind Franklin', email: 'rosalind.franklin@example.com' },
    { id: 12, name: 'Michael Faraday', email: 'michael.faraday@example.com' },
    { id: 13, name: 'Stephen Hawking', email: 'stephen.hawking@example.com' },
    { id: 14, name: 'J.J. Thomson', email: 'jj.thomson@example.com' },
    { id: 15, name: 'Carl Sagan', email: 'carl.sagan@example.com' }
  ];
  
  return <TwixtSimpleTable title="Users List" config={defaultSortingConfig} data={defaultSortingData} />
}
