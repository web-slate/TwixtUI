import React, { useState } from 'react';

const TableHeader = ({ title }) => {
  if (!title) return null;

  return (
    <div className="px-4 md:px-10 py-4 md:py-7">
      <div className="flex items-center justify-between">
        <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">{title}</p>
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

const TableFilters = () => {
  return (
    <div className="sm:flex items-center justify-between">
      {/* ... Buttons for All, Done, Pending ... */}
      Table Filter under development
    </div>
  );
};

const TableAddButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
      <p className="text-sm font-medium leading-none text-white">{label}</p>
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
  const displayFields = config?.displayFields || [];
  const actionButtons = config?.actionButtons || [];

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <tr className="focus:outline-none h-16 border border-gray-100 rounded">
      {config?.canRowThisSelectable && (<td>
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
      </td>)}
      {displayFields.map(field => {
        return (
          <td className={field.rowStyle}>
            <div className={field.cellStyle}>
              <p className={field.textStyle}>{dataItem[field.fieldId]}</p>
            </div>
          </td>
        )
      })}
      {actionButtons.map(button => {
        return (
          <td className="pl-4">
            {button.label !== '' && (<button
              className="focus:ring-2 focus:ring-offset-2 focus:ring-red-300 text-sm leading-none text-gray-600 py-3 px-5 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none"
              onClick={() => {
                if (button.onClick) {
                  button.onClick(dataItem);
                }
              }}>
              {button.label}
            </button>)}
          </td>
        )
      })}
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

const TwixtSimpleTable = ({ title, config, data }) => {
  const { canShowFilter = false, canShowHeader = false, canShowAddButton = false } = config;
  return (
    <div className="sm:px-6 w-full">
      {canShowHeader && (<TableHeader title={title} />)}
      {canShowFilter && (<TableFilters />)}
      {canShowAddButton && (<TableAddButton label={config.addLabel} onClick={config.onAddClick} />)}
      <TableTable config={config} data={data} />
    </div>
  );
}

export default TwixtSimpleTable;
