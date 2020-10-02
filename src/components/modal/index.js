import React, { Component } from "react";
import styles from "./styles.module.scss";

class Modal extends Component {
  render() {
    const { children, isShow, onCloseModal } = this.props;
    const className = isShow ? styles.modalContainer : styles.modalClose;
    return (
      <div className={className} onClick={onCloseModal}>
        <div
          className={styles.centerContent}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    );
  }
}

export default Modal;
