import React, { Component } from "react";
import "antd/dist/antd.css";

import { Select, Spin } from "antd";
import debounce from "lodash/debounce";

const Option = Select.Option;

class ProductRemoteSelect extends Component {
  constructor(props) {
    super(props);
    this.lastFetchId = 0;
    this.fetchProduct = debounce(this.fetchProduct, 800);
  }

  state = {
    data: [],
    value: [],
    fetching: false
  };

  fetchProduct = value => {
    console.log("fetching product", value);
    this.lastFetchId += 1;
    const fetchId = this.lastFetchId;
    this.setState({ data: [], fetching: true });
    fetch('"http://localhost:8443/api/inventory/getAllProducts')
      .then(response => response.json())
      .then(body => {
        if (fetchId !== this.lastFetchId) {
          return;
        }
        const data = {
          text: "product",
          value: "Mayfair tiles"
        };
        console.log("The values returned are :" + JSON.stringify(body));
      });
  };

  handleChange = value => {
    console.log("handling change ");
  };

  render() {
    const { fetching, data, value } = this.state;
    return (
      <Select
        mode="default"
        size="large"
        name="product_desc"
        placeholder="product Description"
        autosize={false}
        width="100%"
        labelInValue
        value={value}
        notFoundContent={fetching ? <Spin size="small" /> : null}
        onSearch={this.fetchProduct}
        onChange={this.handleChange}
      >
        <Option value="22-955 12x24 Mayfair Zebrino HD Rectified Porcelain">
          '22-955 12x24 Mayfair Zebrino HD Rectified Porcelain'
        </Option>
        <Option value="44-947 12x24 Mayfair Suave Bianco HD Polished Rect. Porcelainn">
          '44-947 12x24 Mayfair Suave Bianco HD Polished Rect. Porcelain'
        </Option>
        <Option value="66-892 12x24 Mayfair Calacatta Oro HD Polished Rect. Porcelain">
          '66-892 12x24 Mayfair Calacatta Oro HD Polished Rect. Porcelain'
        </Option>
        <Option value="89-369 12x24 Belgian Linen Ivory HD Rectified Porcelain Tile">
          '77-369 12x24 Belgian Linen Ivory HD Rectified Porcelain Tile'
        </Option>
      </Select>
    );
  }
}
export default ProductRemoteSelect;
