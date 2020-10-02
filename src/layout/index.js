import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
class Layout extends React.Component {
  render() {
    const { openModelLogin, openRegister } = this.props;
    return <div style={{ backgroundColor: "#F6F6F6" }}>
      <Header openModelLogin={openModelLogin} openRegister={openRegister} />
      {this.props.children}
      <Footer />
    </div>
  }
}
export default Layout