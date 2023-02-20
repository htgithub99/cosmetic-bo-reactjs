import { ICardProduct } from "constants/interface";
import { DATA_FAKE_LIST_PRODUCT } from "constants/json";
import styles from "./styles.module.scss";
import { StarFilled } from '@ant-design/icons';


const ProductDetail = () => {
  let item = DATA_FAKE_LIST_PRODUCT[0];
  const { url, off_sale, slot, price, pro_price, name, description } = item;
  return (
    <div className={styles.detail}>
      <div className={styles.breakcum}>
        <div>Trang chu / Chi tiet san pham</div>
      </div>
      <div className={styles.product_detail}>
        <div className={styles.top}>
          <div className={styles.images_product}>
            <img src={url} alt="product" />
            <div className={styles.cardProduct_sale}>Off {off_sale}%</div>
          </div>
          <div className={styles.info_product}>
            <div className={styles.collection}>Sua rua mat</div>
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
            <div className={styles.name_product}>{name}</div>
            <div className={styles.price}>{price}.000đ <span className={styles.low_price}>{pro_price}.000đ</span></div>
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
