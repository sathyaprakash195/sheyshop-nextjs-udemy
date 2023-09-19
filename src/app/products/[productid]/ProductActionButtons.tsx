"use client";
import { Button } from "antd";
import React from "react";

function ProductActionButtons({ product }: { product: any }) {
  return (
    <div className="flex gap-5 mt-5">
      <Button type="default" disabled={product.countInStock === 0}>
        Add to Cart
      </Button>
      <Button type="primary" disabled={product.countInStock === 0}>
        Buy Now
      </Button>
    </div>
  );
}

export default ProductActionButtons;
