import { Table } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MEDICINE_COLUMNS } from '../../utils/constants';

export default function MedicineTable({ searchValue }) {
  const navigate = useNavigate();

  // TODO: replace with api response
  const medicines = Array(100)
    .fill(0)
    .map((_, index) => ({
      key: index,
      id: index,
      name: 'Medicine ' + index,
      price: 12,
      quantity: index * 2,
      actions: ['Sửa', 'Xoá'],
    }))
    .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <Table
      dataSource={medicines}
      columns={MEDICINE_COLUMNS}
      onRow={(record) => ({
        onClick: () => navigate(record.id.toString()),
      })}
    />
  );
}
