import React from "react";
import PropTypes from "prop-types";
import { Card, OptionList } from "@shopify/polaris";

function ProductsList({ handleSelectProduct, products, selectedProduct }) {
  return (
    <Card>
      <OptionList
        onChange={handleSelectProduct}
        options={products}
        selected={selectedProduct}
        title="Products"
      />
    </Card>
  );
}

ProductsList.propTypes = {
  handleSelectProduct: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  selectedProduct: PropTypes.string
};

export default ProductsList;
