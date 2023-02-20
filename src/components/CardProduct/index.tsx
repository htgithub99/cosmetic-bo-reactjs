import { Button } from "antd";
import { ICardProduct } from "constants/interface";
import styles from "./styles.module.scss";
import {StarFilled} from '@ant-design/icons';

const CardProduct = ({ item }: ICardProduct) => {
  const { url, off_sale, slot, price, pro_price, name  } = item;
  return (
    <div className={styles.wrapCardProduct}>
      <div className={styles.cardProduct_img}>
        <a href='/product/1'>
          <img src={url} alt="product" />
        </a>
      </div>
      <div className={styles.cardProduct_sale}>Off {off_sale}%</div>
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
      <a><div className={styles.name_product}>{name}</div></a>
      {/* <div className="">Làm sạch da, phù hợp da dầu mụn</div> */}
      <div className={styles.cardProduct_addProduct}>
       Thêm giỏ hàng
      </div>
    </div>
  );
};

export default CardProduct;
