/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import {
  addCategory,
  updateCategories,
  deleteCategories as deleteCategoriesAction,
} from '../../redux/actions/category.action';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';
import { Button, Modal, Row, Col } from 'react-bootstrap';
import {
  IoIosCheckboxOutline,
  IoIosCheckbox,
  IoIosArrowDown,
  IoIosArrowForward,
} from 'react-icons/io';
import Tree from '../tree';
export default function Category() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.categoryReducer);
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [parentID, setParentID] = useState('');
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const [checkedArray, setCheckedArray] = useState([]);
  const [expandedArray, setExpandedArray] = useState([]);
  const [updateCategoryModal, setUpdateCategoryModal] = useState(false);
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false);
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

  const showCategory = (categories) => {
    let listCat = [];
    for (let category of categories) {
      listCat.push({
        label: category.name,
        value: category._id,
        children:
          category.children.length > 0 && showCategory(category.children),
      });
    }
    return listCat;
  };

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
  const updateCheckedAndExpandedCategories = () => {
    const categories = createCategoryList(category.categories);

    const checkedArray = [];
    const expandedArray = [];
    checked.length > 0 &&
      checked.forEach((categoryID, index) => {
        const category = categories.find(
          (category, _index) => categoryID === category.value
        );
        category && checkedArray.push(category);
      });
    expanded.length > 0 &&
      expanded.forEach((categoryID, index) => {
        const category = categories.find(
          (category, _index) => categoryID === category.value
        );
        category && expandedArray.push(category);
      });
    setCheckedArray(checkedArray);
    setExpandedArray(expandedArray);
  };
  const onOpenUpdateCategory = () => {
    updateCheckedAndExpandedCategories();
    setUpdateCategoryModal(true);
  };
  const handelCategoryInput = (key, value, index, type) => {
    if (type === 'checked') {
      const updatedCheckArray = checkedArray.map((item, _index) =>
        index === _index ? { ...item, [key]: value } : item
      );
      setCheckedArray(updatedCheckArray);
    } else {
      if (type === 'expanded') {
        const updatedExpandedArray = checkedArray.map((item, _index) =>
          index === _index ? { ...item, [key]: value } : item
        );
        setExpandedArray(updatedExpandedArray);
      }
    }
  };
  const onUpdateCategory = () => {
    const form = new FormData();
    expandedArray.forEach((item, index) => {
      form.append('_id', item.value);
      form.append('name', item.name);
      form.append('parentID', item.parentID ? item.parentID : '');
      form.append('type', item.type);
    });
    checkedArray.forEach((item, index) => {
      form.append('_id', item.value);
      form.append('name', item.name);
      form.append('parentID', item.parentID ? item.parentID : '');
      form.append('type', item.type);
    });
    dispatch(updateCategories(form));

    setUpdateCategoryModal(false);
  };
  const deleteCategory = () => {
    updateCheckedAndExpandedCategories();
    setDeleteCategoryModal(true);
  };
  const deleteCategories = () => {
    const checkIdArray = checkedArray.map((item, index) => ({
      _id: item.value,
    }));
    if (checkIdArray.length > 0) {
      dispatch(deleteCategoriesAction(checkIdArray));
      setDeleteCategoryModal(false);
    }
    setDeleteCategoryModal(false);
  };
  const renderDeleteCategoryModel = () => {
    return (
      <Modal
        show={deleteCategoryModal}
        onHide={() => setDeleteCategoryModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Xóa danh mục sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h6>Expanded</h6>
          {expandedArray.map((item, index) => {
            return <span key={index}>{item.name}</span>;
          })}
          <h6>Checked</h6>
          {checkedArray.map((item, index) => {
            return (
              <div
                key={index}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <span>{item.name}</span>
              </div>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">No</Button>
          <Button variant="danger" onClick={deleteCategories}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };
  const renderUpdateCategoryModal = () => {
    return (
      <Modal
        size="lg"
        show={updateCategoryModal}
        onHide={() => setUpdateCategoryModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Cập nhật danh mục</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <div>Mở rộng</div>
            </Col>
          </Row>
          {expandedArray.length > 0 &&
            expandedArray.map((item, index) => {
              return (
                <Row key={index}>
                  <Row>
                    <Col>
                      <input
                        className={`${styles.inputCategory} form-control`}
                        type="text"
                        placeholder="Tên danh mục"
                        value={item.name}
                        onChange={(e) =>
                          handelCategoryInput(
                            'name',
                            e.target.value,
                            index,
                            'expanded'
                          )
                        }
                      />
                    </Col>
                    <Col>
                      <select
                        className="form-control"
                        value={item.parentID}
                        onChange={(e) =>
                          handelCategoryInput(
                            'parentID',
                            e.target.value,
                            index,
                            'expanded'
                          )
                        }
                      >
                        <option>Chọn danh mục</option>
                        {createCategoryList(category.categories).map(
                          (option) => (
                            <option key={option.value} value={option.value}>
                              {option.name}
                            </option>
                          )
                        )}
                      </select>
                    </Col>
                    <Col>
                      <select
                        value={item.type}
                        className="form-control"
                        onChange={(e) =>
                          handelCategoryInput(
                            'type',
                            e.target.value,
                            index,
                            'expanded'
                          )
                        }
                      >
                        <option value="">Chọn kiểu</option>
                        <option value="store">Store</option>
                        <option value="product">Product</option>
                        <option value="page">Page</option>
                      </select>
                    </Col>
                  </Row>
                </Row>
              );
            })}
          <div>Chọn danh mục</div>
          {checkedArray.length > 0 &&
            checkedArray.map((item, index) => {
              return (
                <Row key={index}>
                  <Row>
                    <Col>
                      <input
                        className={`${styles.inputCategory} form-control`}
                        type="text"
                        placeholder="Tên danh mục"
                        value={item.name}
                        onChange={(e) =>
                          handelCategoryInput(
                            'name',
                            e.target.value,
                            index,
                            'checked'
                          )
                        }
                      />
                    </Col>
                    <Col>
                      <select
                        className="form-control"
                        value={item.parentID}
                        onChange={(e) =>
                          handelCategoryInput(
                            'parentID',
                            e.target.value,
                            index,
                            'checked'
                          )
                        }
                      >
                        <option>Chọn danh mục</option>
                        {createCategoryList(category.categories).map(
                          (option) => (
                            <option key={option.value} value={option.value}>
                              {option.name}
                            </option>
                          )
                        )}
                      </select>
                    </Col>
                    <Col>
                      <select
                        value={item.type}
                        className="form-control"
                        onChange={(e) =>
                          handelCategoryInput(
                            'type',
                            e.target.value,
                            index,
                            'checked'
                          )
                        }
                      >
                        <option value="">Chọn kiểu</option>
                        <option value="store">Store</option>
                        <option value="product">Product</option>
                        <option value="page">Page</option>
                      </select>
                    </Col>
                  </Row>
                </Row>
              );
            })}

          {/* <input
            type="file"
            name="categoryImage"
            onChange={handelCategoryImage}
          /> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary" onClick={onUpdateCategory}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
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

        {/* <ul>
          {showCategory(category.categories)}
        </ul> */}
        {/* <CheckboxTree
          nodes={showCategory(category.categories)}
          checked={checked}
          expanded={expanded}
          onCheck={(checked) => setChecked(checked)}
          onExpand={(expanded) => setExpanded(expanded)}
          icons={{
            check: <IoIosCheckbox />,
            uncheck: <IoIosCheckboxOutline />,
            halfCheck: <IoIosCheckboxOutline />,
            expandClose: <IoIosArrowForward />,
            expandOpen: <IoIosArrowDown />,
          }}
        /> */}
      </div>
      <Row>
        <Col>
          <button onClick={deleteCategory}>Xóa</button>
          <button onClick={onOpenUpdateCategory}>Chỉnh sửa</button>
        </Col>
      </Row>
      {renderAddCategoryModel()}
      {renderUpdateCategoryModal()}
      {renderDeleteCategoryModel()}
    </div>
  );
}
