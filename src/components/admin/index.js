import React from 'react';
import styles from './styles.module.scss';
import { NavLink } from 'react-router-dom';
import {
  BsFillGridFill,
  BsFillCalendarFill,
  BsFillBriefcaseFill,
  BsFillGiftFill,
} from 'react-icons/bs';
export default function Admin(props) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <NavLink activeClassName={styles.active} to="/home">
          <BsFillGridFill />
          Home
        </NavLink>
        <NavLink activeClassName={styles.active} to="/category">
          <BsFillCalendarFill />
          Categories
        </NavLink>

        <NavLink activeClassName={styles.active} to="/products">
          <BsFillBriefcaseFill />
          Products
        </NavLink>

        <NavLink activeClassName={styles.active} to="/orders">
          <BsFillGiftFill />
          Orders
        </NavLink>
      </div>
      <div className={styles.right}>{props.children}</div>
    </div>
  );
}
