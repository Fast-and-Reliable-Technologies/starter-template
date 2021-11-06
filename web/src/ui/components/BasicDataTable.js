import React from 'react';
import DataTable from 'react-data-table-component';

const BasicDataTable = ({ columns = [], data = [] }) => {
  return <DataTable columns={columns} data={data} />;
};

export default BasicDataTable;
