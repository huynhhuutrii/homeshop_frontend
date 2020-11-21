import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../../redux/actions/category.action';
import { Button, Modal } from 'react-bootstrap';
import Tree from '../tree';
export default function Category() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryReducer);
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [parentID, setParentID] = useState('');

  const handleClose = () => {
    const form = new FormData();
    form.append('name', categoryName);
    form.append('parentID', parentID);
    form.append('categoryImage', categoryImage);
    dispatch(addCategory(form));
    setCategoryName('');
    setParentID('');
    setCategoryImage('');
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({
        value: category._id,
        name: category.name,
        parentID: category.parentID,
        type: category.type,
      });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };
  const handelCategoryImage = (e) => {
    setCategoryImage(e.target.files[0]);
  };

  const renderAddCategoryModel = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Thêm mới danh mục sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className={styles.inputCategory}
            type="text"
            placeholder="Tên danh mục"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
          />
          <select
            className="form-control"
            value={parentID}
            onChange={(e) => setParentID(e.target.value)}
          >
            <option>Chọn danh mục</option>
            {createCategoryList(category.categories).map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          <input
            type="file"
            name="categoryImage"
            onChange={handelCategoryImage}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Danh mục sản phẩm</div>
        <Button onClick={handleShow}>Thêm</Button>
      </div>
      <div className={styles.body}>
        <Tree cats={category?.categories || []} />
      </div>
      {renderAddCategoryModel()}
    </div>
  );
}
