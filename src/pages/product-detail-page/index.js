import React, { Component } from 'react';
import Layout from "../../layout";
import ProductDetail from "../../components/product-detail";
export default class ProductDetailPage extends Component {
  render() {
    return (
      <Layout>
        <ProductDetail />
      </Layout>
    )
  }
}
