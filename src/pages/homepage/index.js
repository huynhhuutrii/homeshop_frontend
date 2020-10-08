import React, { useEffect } from "react";
import Layout from "../../layout";
import styles from "./styles.module.scss";
import {
  faCouch,
  faBed,
  faGlassCheers,
  faBaby,
  faChalkboard,
  faPlaceOfWorship,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../../assets/img/theme.jpg";
import HotProduct from "../../components/hot-product";
import Products from "../../components/all-product";
import CollectionProduct from "../../components/collection-product";

export default function HomePage(){
  
  return (
    <Layout
    >
      <div className={styles.banner}>
        <div className={styles.list}>
          <div className={styles.listProduct}>Danh mục sản phẩm</div>
          <div className={styles.itemProduct}>
            <FontAwesomeIcon icon={faCouch} />
            <div>Phòng khách</div>
          </div>
          <div className={styles.itemProduct}>
            <FontAwesomeIcon icon={faBed} />
            <div>Phòng ngủ</div>
          </div>
          <div className={styles.itemProduct}>
            <FontAwesomeIcon icon={faGlassCheers} />
            <div>Phòng bếp</div>
          </div>
          <div className={styles.itemProduct}>
            <FontAwesomeIcon icon={faPlaceOfWorship} />
            <div>Phòng thờ</div>
          </div>
          <div className={styles.itemProduct}>
            <FontAwesomeIcon icon={faBaby} />
            <div>Phòng trẻ em</div>
          </div>
          <div className={styles.itemProduct}>
            <FontAwesomeIcon icon={faChalkboard} />
            <div>Phòng học tập</div>
          </div>
        </div>
        <img src={theme} alt="..." />
      </div>
      <HotProduct />
      <CollectionProduct />
      <Products />
    </Layout>
  );
}
