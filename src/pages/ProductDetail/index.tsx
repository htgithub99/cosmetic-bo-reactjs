import React, { useState } from 'react';
import { DATA_FAKE_LIST_PRODUCT } from "constants/json";
import styles from "./styles.module.scss";
import { StarFilled } from '@ant-design/icons';
import { Carousel, Radio, Button, Breadcrumb } from 'antd';
import type { RadioChangeEvent } from 'antd';

const contentStyle: React.CSSProperties = {
  lineHeight: '160px',
  textAlign: 'center',
};

const ProductDetail = () => {
  let item = DATA_FAKE_LIST_PRODUCT[0];
  const { url, off_sale, slot, price, pro_price, name, description } = item;
  // radio type product
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className={styles.detail}>
      <div className={styles.breakcum}>
      <Breadcrumb>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Chi tiết sản phẩm</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2>Chi tiết sản phẩm</h2>
      </div>
      <div className={styles.product_detail}>
        <div className={styles.top}>
          <div className={styles.images_product}>
            {/* <img src={url} alt="product" />
            <div className={styles.cardProduct_sale}>Off {off_sale}%</div> */}
            <Carousel autoplay>
              <div>
                <h3 style={contentStyle}><img src={url} alt="product" /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img src={url} alt="product" /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img src={url} alt="product" /></h3>
              </div>
              <div>
                <h3 style={contentStyle}><img src={url} alt="product" /></h3>
              </div>
            </Carousel>
          </div>
          <div className={styles.info_product}>
            <Button className={styles.collection}>Sữa rửa mặt</Button>
            <h3 className={styles.name_product}>{name}</h3>
            <div className={styles.more}>
              <div className={styles.star}>
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
                <StarFilled />
              </div>
              <div className={styles.slot}>
                Đã bán {slot}
              </div>
            </div>
            <div className={styles.price}>{price}.000đ <span className={styles.low_price}>{pro_price}.000đ</span></div>
            <div className={styles.type_product}>
              <h5>Loại sản phẩm</h5>
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Màu hồng</Radio>
                <Radio value={2}>Màu xanh đậm</Radio>
                <br />
                <Radio value={3}>Màu cam</Radio>
                <Radio value={4}>Màu xanh nhạt</Radio>
              </Radio.Group>
            </div>
            <div className={styles.pro_qty}>
              <h5>Số lượng</h5>
              <div className={styles.main}>
                <input type="text" title="Quantity" value="01" />
                <div className={styles.dec_qty_btn}>-</div>
                <div className={styles.inc_qty_btn}>+</div></div>
              <span className={styles.slot}>
                Có sẵn 540 sản phẩm
              </span>
            </div>
            <div className={styles.cardProduct_addProduct}>
              Thêm giỏ hàng
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.description}>{item.description}</div>
          <div className={styles.review}></div>
        </div>
      </div>
    </div>


  );
};

export default ProductDetail;
