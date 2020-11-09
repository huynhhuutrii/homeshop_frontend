
import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addCategory, updateCategories, deleteCategories as deleteCategoriesAction, getCategory } from "../../redux/actions/category.action";
import CheckboxTree from "react-checkbox-tree";
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { Button, Modal, Row, Col } from 'react-bootstrap';
const updateCategoryModal = (props) => {
  const {
    handelClose,
    expandedArray,
    checkedArray,
    handelCategoryInput,
    createCategoryList,
    updateCategoryModal,
    setUpdateCategoryModal,
    onUpdateCategory,
    category

  } = props
  return <Modal size="lg" show={updateCategoryModal} onHide={() => setUpdateCategoryModal(false)}>
    <Modal.Header closeButton>
      <Modal.Title>Cập nhật danh mục</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Row>
        <Col>
          <div>Mở rộng</div>
        </Col>
      </Row>
      {
        expandedArray.length > 0 &&
        expandedArray.map((item, index) => {
          return <Row key={index}>
            <Row >
              <Col>
                <input
                  className={`${styles.inputCategory} form-control`}
                  type="text"
                  placeholder="Tên danh mục"
                  value={item.name}
                  onChange={(e) => handelCategoryInput("name", e.target.value, index, "expanded")}
                />
              </Col>
              <Col>
                <select
                  className="form-control"
                  value={item.parentID}
                  onChange={(e) => handelCategoryInput("parentID", e.target.value, index, "expanded")}
                >
                  <option>Chọn danh mục</option>
                  {
                    createCategoryList(category.categories).map(option =>
                      <option key={option.value} value={option.value}>{option.name}</option>
                    )
                  }
                </select>
              </Col>
              <Col>
                <select className="form-control">
                  <option value="">Chọn kiểu</option>
                  <option value="store">Store</option>
                  <option value="product">Product</option>
                  <option value="page">Page</option>
                </select>
              </Col>
            </Row>
          </Row>
        })
      }
      <div>Chọn danh mục</div>
      {
        checkedArray.length > 0 &&
        checkedArray.map((item, index) => {
          return <Row key={index}>
            <Row >
              <Col>
                <input
                  className={`${styles.inputCategory} form-control`}
                  type="text"
                  placeholder="Tên danh mục"
                  value={item.name}
                  onChange={(e) => handelCategoryInput("name", e.target.value, index, "checked")}
                />
              </Col>
              <Col>
                <select
                  className="form-control"
                  value={item.parentID}
                  onChange={(e) => handelCategoryInput("parentID", e.target.value, index, "checked")}
                >
                  <option>Chọn danh mục</option>
                  {
                    createCategoryList(category.categories).map(option =>
                      <option key={option.value} value={option.value}>{option.name}</option>
                    )
                  }
                </select>
              </Col>
              <Col>
                <select className="form-control">
                  <option value="">Chọn kiểu</option>
                  <option value="store">Store</option>
                  <option value="product">Product</option>
                  <option value="page">Page</option>
                </select>
              </Col>
            </Row>
          </Row>
        })
      }

      {/* <input
            type="file"
            name="categoryImage"
            onChange={handelCategoryImage}
          /> */}
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" >
        Close
          </Button>
      <Button variant="primary" onClick={onUpdateCategory}>
        Save Changes
          </Button>
    </Modal.Footer>
  </Modal>
}
export default updateCategoryModal;