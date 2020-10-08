import React from 'react'
import styles from "./styles.module.scss";
import { NavLink } from "react-router-dom";
export default function Admin(props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/category">Categories</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/orders">Orders</NavLink></li>
          </ul>
      </div>
      <div className={styles.right}>
          {props.children}
      </div>
    </div>
  )
}
