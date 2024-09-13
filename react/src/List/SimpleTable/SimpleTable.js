import React, { useState, useMemo } from 'react';
import TwixtButton from '../../CallsToAction/Button';
import TwixtLink from '../../CallsToAction/Link';
import TwixtBoxItem from '../../Containers/BoxItem';
import TwixIcon from '../../Icon';

// SectionHeader Component: Displays section title and sort options
const SectionHeader = ({ title }) => {
  if (!title) return null;

  return (
    <div className="px-4 md:px-10 py-4 md:py-7">
      <div className="flex items-center justify-between">
        <p className="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
          {title}
        </p>
      </div>
    </div>
  );
};

// TableFilters Component: Placeholder for table filters
const TableFilters = () => {
  return (
    <div className="sm:flex items-center justify-between py-4 px-4">
      <span className="text-gray-600">Table Filter under development</span>
    </div>
  );
};

// AddButton Component: Button to add new entries
const AddButton = ({ label, onClick }) => {
  return (
    <div className="px-4 md:px-10 py-4 md:py-7">
      <TwixtButton
        variant="primary"
        label={label}
        onClick={onClick}
        type="secondary"
      />
    </div>
  );
};

// TableHeader Component: Contains the thead section of the table
const TableHeader = ({ config, sortField, sortOrder, onSort }) => {
  const displayFields = config?.displayFields || [];

  return (
    <thead className="bg-gray-50 dark:bg-neutral-700">
      <tr className="focus:outline-none border border-gray-100 rounded">
        {displayFields.map((field) => (
          <th
            key={field.fieldId}
            className="px-6 py-3 text-start text-xs font-strong text-gray-500 uppercase dark:text-neutral-500 cursor-pointer"
            onClick={() => onSort(field.fieldId)}
          >
            <div className="flex items-center">
              {field.label}
              {sortField === field.fieldId && (
                <TwixIcon  type={sortOrder === 'asc' ? "chevronUp" : "chevronDown"} variant="outline" overwriteClass="ml-2 h-4 w-4" />
              )}
            </div>
          </th>
        ))}
        {config?.actions?.length > 0 && (
          <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">Actions</th>
        )}
      </tr>
    </thead>
  );
};

// TableBody Component: Handles the table's body rows
const TableBody = ({ config, data }) => {
  return (
    <tbody>
      {data.map((dataItem) => (
        <TableRow key={dataItem[config.uniqueFieldId]} config={config} dataItem={dataItem} />
      ))}
    </tbody>
  );
};

// TableRow Component: Handles individual row display and actions
const TableRow = ({ config, dataItem }) => {
  const displayFields = config?.displayFields || [];
  const actions = config?.actions || [];

  return (
    <tr className="focus:outline-none h-12 border border-gray-100 rounded">
      {displayFields.map((field) => (
        <td className={field.rowStyle} key={field.fieldId}>
          <div className={field.cellStyle}>
            <p className={field.textStyle}>{dataItem[field.fieldId]}</p>
          </div>
        </td>
      ))}
      {config?.actions?.length > 0 && (<td className="pl-4">
        <div className="flex px-2">
          {actions.map((action) => (
            <div className="space-x-2" key={action.label}>
              {action.actionType === 'button' && (
                <TwixtButton
                  type={action.type}
                  label={action.label}
                  leftIcon={action.icon}
                  onClick={() => {
                    if (action.onClick) {
                      action.onClick(dataItem);
                    }
                  }}
                  overwriteClass={action.overwriteClass}
                />
              )}
              {action.actionType === 'link' && (
                <TwixtLink
                  label={action.label}
                  leftIcon={action.icon}
                  link={action.link}
                  onClick={() => {
                    if (action.onClick) {
                      action.onClick(dataItem);
                    }
                  }}
                  overwriteClass={action.overwriteClass}
                />
              )}
              {action.actionType === 'box-item' && (
                <TwixtBoxItem
                  type="inline"
                  overwriteClass={action.overwriteClass}
                >{action.label}</TwixtBoxItem>
              )}
            </div>
          ))}
        </div>
      </td>)}
    </tr>
  );
};

// Table Component: Main component containing the header, body, and optional sections like filters and add button
const Table = ({ title, config, data }) => {
  const [sortField, setSortField] = useState(config.sorting?.fieldId || null);
  const [sortOrder, setSortOrder] = useState(config.sorting?.order || 'asc');

  const handleSort = (fieldId) => {
    const newSortOrder = sortField === fieldId && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(fieldId);
    setSortOrder(newSortOrder);
  };

  const sortedData = useMemo(() => {
    if (!sortField) return data;
    return [...data].sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [data, sortField, sortOrder]);

  const { canShowFilter = false, canShowHeader = false, canShowAddButton = false } = config;

  return (
    <div className="sm:px-6 w-full">
      {canShowHeader && <SectionHeader title={title} />}
      {canShowFilter && <TableFilters />}
      {canShowAddButton && <AddButton label={config.addLabel} onClick={config.onAddClick} />}
      <div className="bg-white px-4 md:px-8 xl:px-10">
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            {/* Table Header (thead) */}
            <TableHeader
              config={config}
              sortField={sortField}
              sortOrder={sortOrder}
              onSort={handleSort}
            />

            {/* Table Body (tbody) */}
            <TableBody config={config} data={sortedData} />
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
