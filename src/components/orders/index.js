import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import moment from 'moment';
import { useSelector, useDispatch } from 'react-redux';
import {
  getAllOrder,
  updateOrder,
  deleteOrder,
} from '../../redux/actions/order.action';
import { BsSearch } from 'react-icons/bs';
import { Modal, Button } from 'react-bootstrap';
export default function Orders() {
  const [currentOrder, setCurrentOrder] = useState(null);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllOrder());
  }, []);

  const orders = useSelector((state) => state.orderReducer.orders);

  const itemCount = (cartItems) => {
    let count = 0;
    if (cartItems.length > 0) {
      for (let i = 0; i < cartItems.length; i++) {
        count = count + +cartItems[i].quantity;
      }
    }
    return count;
  };
  const showOrderDetail = (item) => {
    setShow(true);
    setCurrentOrder(item);
  };
  const handelUpdateOrder = () => {
    dispatch(updateOrder(currentOrder._id));
    setShow(false);
  };
  const handleDeleteOrder = () => {
    if (currentOrder) {
      dispatch(deleteOrder(currentOrder._id));
    }
    setShow(false);
  };
  return (
    <div className={styles.container}>
      <div
        style={{
          color: '#00315C',
          fontSize: '20px',
          textTransform: 'uppercase',
        }}
        className="text-uppercase ml-5 mt-3 mb-0"
      >
        Quản lý đơn hàng
      </div>
      <div className="ml-5 mt-3 mb-5 bg-light w-100 p-3 border rounded">
        <div className="ml-3 mr-4">
          <div className="row mb-3 ">
            <h6 className="col-2">SĐT</h6>
            <h6 className="col-2">Ngày mua</h6>
            <h6 className="col-1">SL</h6>
            <h6 className="col-2">Tổng tiền</h6>
            <h6 className="col-3">Trạng thái</h6>
            <div className="col-2"></div>
          </div>
          {orders.length > 0 &&
            orders.map((item, index) => {
              return (
                <div
                  key={index}
                  className="p-2 row border border-secondary mb-3 rounded d-flex flex-row align-items-center"
                >
                  <div className="col-2 text-primary">{item.phone}</div>
                  <div className="col-2">
                    {moment(item.createAt).format('DD/MM/YYYY')}
                  </div>
                  <div className="col-1">{itemCount(item.cartItems)}</div>
                  <div className="col-2">
                    {item.totalPrice.toLocaleString('vi-VI')}
                  </div>
                  <div className="col-3">{item.status}</div>
                  <div className="col-2">
                    <BsSearch
                      style={{ cursor: 'pointer' }}
                      onClick={() => showOrderDetail(item)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h5>Chi tiết đơn hàng</h5>
        </Modal.Header>
        <Modal.Body>
          {currentOrder ? (
            <div>
              <div className="row m-1">
                <div className="col-3">Tên người nhận</div>
                <div className="col-9">{currentOrder.receiver}</div>
              </div>
              <div className="row m-1">
                <div className="col-3">Số điện thoại</div>
                <div className="col-9">{currentOrder.phone}</div>
              </div>
              <div className="row m-1">
                <div className="col-3">Địa chỉ email</div>
                <div className="col-9">{currentOrder.email}</div>
              </div>
              <div className="row m-1">
                <div className="col-3">Địa chỉ nhận hàng</div>
                <div className="col-9">{currentOrder.address}</div>
              </div>
              <div className="row m-1">
                <div className="col-3">Ghi chú</div>
                <div className="col-9">{currentOrder.note}</div>
              </div>
              <div className="row m-1">
                <div className="col-3">Trang thái</div>
                <div className="col-9">{currentOrder.status}</div>
              </div>
              <div className="row m-1">
                <div className="col-3">Thanh toán</div>
                <div className="col-9">{currentOrder.method}</div>
              </div>
              <div className="row m-1">
                <div className="col-3">Giỏ hàng</div>
                <div className="col-9">
                  {currentOrder.cartItems.map((product, index) => {
                    return (
                      <div key={index}>
                        {product.name}
                        <span>({product.quantity})</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row m-1">
                <div className="col-3">Tổng tiền</div>
                <div className="col-9">
                  {currentOrder.totalPrice.toLocaleString('vi-VI')}
                  VNĐ
                </div>
              </div>
            </div>
          ) : null}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDeleteOrder}>
            Xóa đơn hàng
          </Button>
          {currentOrder && currentOrder.status !== 'Đã thanh toán' ? (
            <Button variant="primary" onClick={handelUpdateOrder}>
              Duyệt đơn hàng
            </Button>
          ) : null}
        </Modal.Footer>
      </Modal>
    </div>
  );
}
