import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import sofacaocap from "../../assets/img/sofacaocap.jpg"
import banghego from "../../assets/img/banghe.jpg"
import dotrangtri from "../../assets/img/dotrangtri.jpg"
import dungcunhabep from "../../assets/img/dungcunhabep.jpg"
import hoctap from "../../assets/img/hoctap.jpg"
import tailoc from "../../assets/img/tailoc.jpg"
import caytrangtri from "../../assets/img/trangtri.jpg"
import salenhieu from "../../assets/img/salenhieu.jpg"
export default class collectionProduct extends React.Component {
  render() {
    return <div className={styles.collectionProduct}>
      <div className={styles.allHeader}>
        <div className={styles.title}>
          <FontAwesomeIcon icon={faAddressBook} size="2x" color="#5CC9F1" />
          <div>Bộ sưu tập</div>
        </div>
        <div className={styles.listAll}>Xem tất cả</div>
      </div>
      <div className={styles.collection}>
        <div className={styles.item}>
          <div className={styles.left}>
            <div className={styles.name}>Sofa cao cấp</div>
            <div className={styles.click}>Khám phá</div>
          </div>
          <img src={sofacaocap} alt="..." />
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <div className={styles.name}>Bàn ghế gỗ</div>
            <div className={styles.click}>Khám phá</div>
          </div>
          <img src={banghego} alt="..." />
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <div className={styles.name}>Đồ trang trí</div>
            <div className={styles.click}>Khám phá</div>
          </div>
          <img src={dotrangtri} alt="..." />
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <div className={styles.name}>Dụng cụ nhà bếp</div>
            <div className={styles.click}>Khám phá</div>
          </div>
          <img src={dungcunhabep} alt="..." />
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <div className={styles.name}>Nội thất tiện ích</div>
            <div className={styles.click}>Khám phá</div>
          </div>
          <img src={hoctap} alt="..." />
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <div className={styles.name}>Phong thủy tài lộc</div>
            <div className={styles.click}>Khám phá</div>
          </div>
          <img src={tailoc} alt="..." />
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <div className={styles.name}>Cây trang trí</div>
            <div className={styles.click}>Khám phá</div>
          </div>
          <img src={caytrangtri} alt="..." />
        </div>
        <div className={styles.item}>
          <div className={styles.left}>
            <div className={styles.name}>Sản phẩm bán nhiều</div>
            <div className={styles.click}>Khám phá</div>
          </div>
          <img src={salenhieu} alt="..." />
        </div>

      </div>
    </div>
  }
}