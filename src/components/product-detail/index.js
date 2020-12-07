import React, { Component } from 'react'
import styles from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class ProductDetail extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <Carousel className={styles.roll} >
            <div>
              <img alt="" src="https://media.ex-cdn.com/EXP/media.homeaz.vn/files/sanpham/2020/09/09/bo-dao-nia-an-bit-tet-homeaz-5164319845.png" />

            </div>
            <div>
              <img alt="" src="https://media.ex-cdn.com/EXP/media.homeaz.vn/files/sanpham/2020/09/09/bo-dao-nia-an-bit-tet-homeaz-4164319613.png" />
            </div>
            <div>
              <img alt="" src="https://media.ex-cdn.com/EXP/media.homeaz.vn/files/sanpham/2020/09/09/bo-dao-nia-an-bit-tet-homeaz-3164318183.png" />
            </div>
          </Carousel>
          <div className={styles.detail}>
            <div className={styles.nameProduct}>Tên sản phẩm Tên sản phẩm Tên sản phẩm Tên sản phẩm Tên sản phẩm Tên sản phẩm Tên sản phẩm</div>
            <div className={styles.brand}>
              <div className={styles.nameBrand} >
                Thương hiệu:<span style={{ color: "#5CC9F1", marginLeft: "5px", fontWeight: "400" }}>Đồ Decor trang trí</span>
              </div>
              <div className={styles.sku}>
                SKU:BMN02
              </div>
            </div>
            <div className={styles.price}>
              Giá:
             <span>490.000</span><sup style={{ color: "#d32f2f" }}>đ</sup>
            </div>
            <div className={styles.amount}>
              <label>Số lượng:</label>
              <div className={styles.inputGroup}>
                <span>-</span>
                <input type='text' value={1} />
                <span>+</span>
              </div>

            </div>
            <button>
              Chọn mua
            </button>

          </div>


        </div>
        <div className={styles.description}>
          <label>
            Mô tả sản phẩm
          </label>
          <div className={styles.bodyDes}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </div>

        </div>
        <div className={styles.productRelation}>
          <label>Sản phẩm có liên quan</label>
          <div className={styles.product}>

          </div>
        </div>
      </div>
    )
  }
}
