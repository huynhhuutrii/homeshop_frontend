import React, { useState } from 'react'
import { Modal, Button, Table, Row, Col } from "react-bootstrap";
import styles from "./styles.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/actions/product.action";
export default function Product() {
  const [name, setName] = useState("");
  const [categoryID, setCategoryID] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productImages, setProductImages] = useState([]);
  const [showProductDetailModal, setShowProductDetailModal] = useState(false);
  const [productDetail, setProductDetail] = useState(null);
  const [show, setShow] = useState(false);
  const product = useSelector(state => state.productReducer)
  const mycategory = useSelector(state => state.categoryReducer);
  const dispatch = useDispatch();

  const handleClose = () => {
    const form = new FormData();
    form.append("name", name);
    form.append("category", categoryID);
    form.append("price", price);
    form.append("description", description);
    form.append("quantity", quantity);
    for (let item of productImages) {
      form.append("productImage", item);
    };
    dispatch(addProduct(form));

    setShow(false)
  };
  const handleShow = () => setShow(true);

  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options)
      }
    }
    return options;
  }
  const handelPicture = (e) => {
    setProductImages([...productImages, e.target.files[0]])
  }

  const showProducts = () => {
    return <Table responsive="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Tên sản phầm</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Danh mục</th>
        </tr>
      </thead>
      <tbody>
        {
          product.products.length > 0 ?
            product.products.map((item, index) => {
              return <tr key={index} onClick={() => handelShowProductDetail(item)}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.category.name}</td>
              </tr>
            }) : null
        }
      </tbody>
    </Table>
  }
  const addProductModal = () => {
    return <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Thêm mới danh mục sản phẩm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          className="form-control"
          type="text"
          placeholder="Tên sản phẩm"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Giá sản phẩm"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Mô tả sản phẩm"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Số lượng sản phẩm"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <select
          className="form-control"
          value={categoryID}
          onChange={(e) => setCategoryID(e.target.value)}
        >
          <option>Chọn danh mục</option>
          {
            createCategoryList(mycategory.categories).map(option =>
              <option key={option.value} value={option.value}>{option.name}</option>
            )
          }
        </select>
        {
          product.length > 0 ? productImages.map((item, index) => {
            return <div key={index}>
              {item.name}
            </div>

          }) : null
        }
        <input
          type="file"
          name="productImages"
          onChange={handelPicture}
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
  }
  const handelCloseProductDetailModal = () => {
    setShowProductDetailModal(false)
  }
  const handelShowProductDetail = (product) => {
    setProductDetail(product)
    setShowProductDetailModal(true);
  }
  const productDetailModal = () => {
    if (!productDetail) {
      return null;
    }
    return <Modal size="lg" show={showProductDetailModal} onHide={handelCloseProductDetailModal}>
      <Modal.Header closeButton>
        <Modal.Title>Chi tiết sản phẩm</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md="2">
            <p className={styles.prop}>Tên sản phẩm</p>
          </Col>
          <Col md="10">
            <p>{productDetail.name}</p>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <p className={styles.prop}>Giá</p>
          </Col>
          <Col md="10">
            <p>{productDetail.price}</p>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <p className={styles.prop}>Số lượng</p>
          </Col>
          <Col md="10">
            <p>{productDetail.quantity}</p>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <p className={styles.prop}>Danh mục</p>
          </Col>
          <Col md="10">
            <p>{productDetail.category.name}</p>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <p className={styles.prop}>Mô tả</p>
          </Col>
          <Col md="10">
            <p>{productDetail.description}</p>
          </Col>
        </Row>
        <Row>
          <Col md="2">
            <p className={styles.prop}>Hình ảnh</p>
          </Col>
          <Col md="10" className={styles.picBox}>
            {
              productDetail.productImages.map(pic => <div key={pic._id} >
                <img src={`http://localhost:4000/${pic.img}`} alt="" />
              </div>)
            }
          </Col>
        </Row>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handelCloseProductDetailModal}>
          Close
          </Button>
        <Button variant="primary" onClick={handelCloseProductDetailModal}>
          Save Changes
          </Button>
      </Modal.Footer>
    </Modal>
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>Thêm sản phẩm</div>
        <Button className={styles.button} onClick={handleShow}>Thêm</Button>
      </div>
      {showProducts()}
      {addProductModal()}
      {productDetailModal()}
    </div>
  )
}

