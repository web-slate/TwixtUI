import React, { useState } from 'react';

const TableFilters = () => {
  return (
    <div className="sm:flex items-center justify-between">
      {/* ... Buttons for All, Done, Pending ... */}
      Filter
    </div>
  );
};

const TableAddButton = () => {
  return (
    <button className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
      <p className="text-sm font-medium leading-none text-white">Add Table</p>
    </button>
  );
};

const TableTable = ({ config, data }) => {
  return (
    <div className="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
      <div className="mt-7 overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <tbody>
            {data.map(dataItem => (
              <TableRow key={dataItem[config.uniqueFieldId]} config={config} dataItem={dataItem} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const TableRow = ({ config, dataItem }) => {
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
      {config.displayFields.map(field => {
        return (
          <td className={field.rowStyle}>
            <div className={field.cellStyle}>
              <p className={field.textStyle}>{dataItem[field.fieldId]}</p>
            </div>
          </td>
        )
      })}
      <td className="pl-4">
        <button className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none" onClick={() => config.onViewClick(dataItem[field.fieldId])}>{config.viewLabel}</button>
      </td>
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


const DropdownContent = ({ rowId }) => {
  // DropdownContent implementation
};

const SimpleTable = ({ config, data }) => {
  return (
    <div className="sm:px-6 w-full">
      <TableHeader />
      <TableFilters />
      <TableAddButton />
      <TableTable config={config} data={data} />
    </div>
  );
}

export default SimpleTable;
