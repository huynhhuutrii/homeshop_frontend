import React from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/img/logo.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import { useDispatch } from "react-redux";


function equalTo(ref, msg) {
  return this.test({
    name: "equalTo",
    exclusive: false,
    message: msg || "${path} must be the same as ${reference}",
    params: {
      reference: ref.path,
    },
    test: function (value) {
      return value === this.resolve(ref);
    },
  });
}

yup.addMethod(yup.string, "equalTo", equalTo);

const schema = yup.object().shape({
  username: yup.string().required("Username bat buoc"),
  phone: yup.number(),
  date: yup.date(),
  mail: yup.string(),
  password: yup.string().required(),
  passwordConfirm: yup.string().equalTo(yup.ref("password")),
});

function Register({ onCloseModel }) {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const handleRegister = (data) => {
    
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>Đăng ký cùng</div>
        <img src={logo} alt="..." />
      </div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <div className={styles.group}>
          <span>Tên người dùng</span>
          <input
            ref={register}
            type="text"
            name="username"
            placeholder="Nhập tên cá nhân"
          />
          {errors.username ? <div>{errors.username.message}</div> : null}
        </div>
        {/* <div className={styles.group}>
          <span>Số điện thoại </span>
          <input
            ref={register}
            type="text"
            name="phone"
            placeholder="Nhập số điện thoại"
          />
        </div> */}
        <div className={styles.group}>
          <span>Email</span>
          <input
            ref={register}
            type="mail"
            name="mail"
            placeholder="Nhập email"
          />
        </div>
        <div className={styles.group}>
          <span>Mật khẩu</span>
          <input
            ref={register}
            type="password"
            name="password"
            placeholder="Nhập mật khẩu"
          />
        </div>
        <div className={styles.group}>
          <span>Xác nhận mật khẩu</span>
          <input
            ref={register}
            name="passwordConfirm"
            type="password"
            placeholder="Nhập mật khẩu xác nhận"
          />
        </div>
        {/* <div className={styles.sexGroup}>
          <div className={styles.sex}>Giới tính</div>
          <div className={styles.radioGroup}>
            <input type="radio" name="sex" />
            <label>Nam</label>
          </div>
          <div className={styles.radioGroup}>
            <input type="radio" name="sex" />
            <label>Nữ</label>
          </div>
        </div> */}
        {/* <div className={styles.group}>
          <span>Ngày sinh</span>
          <input ref={register} type="date" name="date" />
        </div> */}
        <button type="submit">Đăng ký</button>
      </form>
      <div className={styles.policy}>
        Khi bạn nhấn Đăng ký, bạn đã đồng ý thực hiện mọi giao dịch mua bán theo{" "}
        <span>điều kiện sử dụng và chính sách của HTSHOP.vn</span>
      </div>
    </div>
  );
}

export default Register;
