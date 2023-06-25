import { Table } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { INVOICE_COLUMNS } from '../../utils/constants';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import ConfirmPublishInvoiceModal from '../Modal/ConfirmPublishInvoiceModal';
export default function InvoiceTable({ searchValue }) {
  const navigate = useNavigate();
  const [openPaymentModal, setOpenPaymentModal] = useState(false);
  const [openDeliveryModal, setOpenDeliveryModal] = useState(false);
  const [openBillModal, setOpenBillModal] = useState(false);
  // TODO: replace with api response
  const invoices = Array(100)
    .fill(0)
    .map((_, index) => ({
      key: index,
      index: index,
      id: 'Hoá đơn ' + index,
      delivery_status: 'Đã giao',
      payment_status: 'Đã thanh toán',
      Total: index * 2 + 'VNĐ',
      actions: [
        { value: 'Thanh toán', onClick: () => setOpenPaymentModal(true) },
        { value: 'Giao thuốc', onClick: () => setOpenDeliveryModal(true) },
        { value: 'Xuất hoá đơn', onClick: () => setOpenBillModal(true) },
      ],
    }));

  const filteredData = invoices.filter((item) => {
    const idCondition = item.id.toLowerCase().includes(searchValue.toLowerCase());
    const deliveryCondition = item.delivery_status.toLowerCase().includes(searchValue.toLowerCase());
    const paymentCondition = item.payment_status.toLowerCase().includes(searchValue.toLowerCase());
    return idCondition || deliveryCondition || paymentCondition;
  });

  return (
    <div>
      <Table
        dataSource={filteredData}
        columns={INVOICE_COLUMNS}
        onRow={(record) => ({
          onClick: () => navigate(record.id.toString()),
        })}
        rowClassName="cursor-pointer"
      />
      {openPaymentModal ? null : null}
      {openDeliveryModal ? null : null}
      {openBillModal ? (
        <Modal>
          <ConfirmPublishInvoiceModal
            open={openBillModal}
            onOk={() => setOpenBillModal(false)}
            onCancel={() => setOpenBillModal(false)}
          />
        </Modal>
      ) : null}
    </div>
  );
}