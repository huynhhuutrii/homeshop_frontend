import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/img/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom"
import {
  faSearch,
  faUserAlt,
  faCartPlus,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.nameTitle}>Sản phẩm nội thất</div>
          <div className={styles.nameTitle}>Dịch vụ nội thất</div>
          <div className={styles.nameTitle}>Thiết kế nhà đẹp</div>
          <div className={styles.nameTitle}>Doanh nghiệp nội thất</div>
          <div className={styles.nameTitle}>Tư vấn nội thất</div>
        </div>
        <div className={styles.title}>
          <img src={logo} alt="..." />
          <div className={styles.groupSearch}>
            <FontAwesomeIcon icon={faSearch} size="1x" color="#00AEEF" />
            <input type="text" />
            <div className={styles.labelSearch}>Tìm kiếm</div>
          </div>
          <div className={styles.userGroup}>
            <FontAwesomeIcon icon={faUserAlt} size="1x" color="#5CC9F1" />
            <NavLink to="/register" activeClassName={styles.navActive}>
              Đăng ký
            </NavLink>
            <div>|</div>
            <NavLink to="/login" activeClassName={styles.navActive}>
              Đăng nhập
            </NavLink>
          </div>
          <div className={styles.carts}>
            <div className={styles.cartIcon}>
              <sub>2</sub>
              <FontAwesomeIcon icon={faCartPlus} color="#5CC9F1" />
            </div>
            <div>Giỏ hàng</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
