import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import datatest from "../../assets/img/datatest.jpg";
export default class HotProduct extends React.Component {
  render() {
    return <div className={styles.hotProduct}>
      <div className={styles.hotHeader}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faFireAlt} size="2x" color="#5CC9F1" />
          <div>Sản phẩm nổi bậc</div>
        </div>
        <div className={styles.listAll}>Xem tất cả</div>
      </div>
      <div className={styles.listHot}>
        <div className={styles.itemHot}>
          <img src={datatest} alt="..." />
          <div className={styles.nameProduct}> Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại  </div>
          <div className={styles.price}>200000<sup>đ</sup></div>
        </div>
        <div className={styles.itemHot}>
          <img src={datatest} alt="..." />
          <div className={styles.nameProduct}> Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại  </div>
          <div className={styles.price}>200000<sup>đ</sup></div>
        </div>
        <div className={styles.itemHot}>
          <img src={datatest} alt="..." />
          <div className={styles.nameProduct}> Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại  </div>
          <div className={styles.price}>200000<sup>đ</sup></div>
        </div>
        <div className={styles.itemHot}>
          <img src={datatest} alt="..." />
          <div className={styles.nameProduct}> Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại  </div>
          <div className={styles.price}>200000<sup>đ</sup></div>
        </div>
        <div className={styles.itemHot}>
          <img src={datatest} alt="..." />
          <div className={styles.nameProduct}> Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại  </div>
          <div className={styles.price}>200000<sup>đ</sup></div>
        </div>
        <div className={styles.itemHot}>
          <img src={datatest} alt="..." />
          <div className={styles.nameProduct}> Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại Đèn thả trang trí hiện đại  </div>
          <div className={styles.price}>200000<sup>đ</sup></div>
        </div>

      </div>
    </div>
  }
}