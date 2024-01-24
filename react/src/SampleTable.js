import React, { useState } from 'react';

const fruits = [
  { id: 1, name: 'Apple', category: 'Urgent', dueDate: '04/07', status: 'Due Today at 18:00' },
  { id: 2, name: 'Banana', category: 'Normal', dueDate: '05/07', status: 'Due Tomorrow' },
  { id: 3, name: 'Cherry', category: 'Low', dueDate: '06/07', status: 'Due in 3 days' },
];

const TaskHeader = () => {
  return (
    <div className="px-4 md:px-10 py-4 md:py-7">
      <div className="flex items-center justify-between">
        <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Tasks</p>
        <div className="py-3 px-4 flex items-center text-sm font-medium leading-none text-gray-600 bg-gray-200 hover:bg-gray-300 cursor-pointer rounded">
          <p>Sort By:</p>
          <select aria-label="select" className="focus:text-indigo-600 focus:outline-none bg-transparent ml-1">
            <option className="text-sm text-indigo-800">Latest</option>
            <option className="text-sm text-indigo-800">Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};


const TaskFilters = () => {
  return (
    <div className="sm:flex items-center justify-between">
      {/* ... Buttons for All, Done, Pending ... */}
      Filter
    </div>
  );
};


const TaskAddButton = () => {
  return (
    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
      <p className="text-sm font-medium leading-none text-white">Add Task</p>
    </button>
  );
};

const TaskTable = () => {
  return (
    <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
      <div className="mt-7 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <tbody>
            {fruits.map(fruit => (
              <TaskRow key={fruit.id} fruit={fruit} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TaskRow = ({ fruit }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
  };

  return (
    <tr className="focus:outline-none h-16 border border-gray-100 rounded">
      <td>
        <div className="ml-5">
          <div className="bg-gray-200 rounded-sm w-5 h-5 flex flex-shrink-0 justify-center items-center relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="checkbox opacity-0 absolute cursor-pointer w-full h-full"
            />
            {isChecked && (
              <div className="check-icon bg-indigo-700 text-white rounded-sm">
                {/* SVG Check Icon */}
                <svg className="icon icon-tabler icon-tabler-check" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </td>
      <td className="">
        <div className="flex items-center pl-5">
          <p className="text-base font-medium leading-none text-gray-700 mr-2">{fruit.name}</p>
          {/* ... Other icons or elements ... */}
        </div>
      </td>
      <td className="pl-24">
        <div className="flex items-center">
          <p className="text-sm leading-none text-gray-600 ml-2">{fruit.category}</p>
        </div>
      </td>
      <td className="pl-5">
        <div className="flex items-center">
          <p className="text-sm leading-none text-gray-600 ml-2">{fruit.dueDate}</p>
        </div>
      </td>
      <td className="pl-5">
        <div className="flex items-center">
          <button className="py-3 px-3 text-sm leading-none text-gray-700 bg-gray-100 hover:bg-gray-200 rounded focus:outline-none">{fruit.status}</button>
        </div>
      </td>
      <td className="pl-4">
        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none">View</button>
      </td>
      {/* ... More cells as needed ... */}
    </tr>
  );
};


const DropdownButton = ({ onClick }) => {
  return (
    <button className="focus:ring-2 rounded-md focus:outline-none" onClick={onClick} role="button" aria-label="option">
      {/* ... SVG and other elements ... */}
    </button>
  );
};


const DropdownContent = ({ taskId }) => {
  // DropdownContent implementation
};

const SampleTable = () => {
  return (
    <div className="sm:px-6 w-full">
      <TaskHeader />
      <TaskFilters />
      <TaskAddButton />
      <TaskTable />
    </div>
  );
}

export default SampleTable;
