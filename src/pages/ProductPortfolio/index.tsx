import MainContainer from "components/MainContainer";
import {
  DATA_FAKE_LIST_BANNER,
  DATA_FAKE_LIST_PRODUCT,
  DATA_FAKE_LIST_PRODUCT_TYPE,
} from "constants/json";
import ListProductItem from "../components/ListProductItem";
import ListProductType from "../components/ListProductType";
import styles from "./styles.module.scss";
import { Input, Select, Breadcrumb } from 'antd';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const { Search } = Input;

const ProductPortfolio = () => {
  const onSearch = (value: string) => console.log(value);
  return (
    <MainContainer>
      <div className={styles.breakcrumb}>
        <Breadcrumb>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Danh mục sản phẩm</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2>Danh mục sản phẩm</h2>
      </div>
      <div className={styles.wrapHome}>
        <div className={styles.find_product}>
          <div className={styles.sort_price_product}>
            <Select
              placeholder="Sắp xếp giá"
              style={{ width: 150 }}
              onChange={handleChange}
              options={[
                { value: 'price_0_n', label: 'Từ thấp đến cao' },
                { value: 'price_n_0', label: 'Từ cao đến thấp' },
                { value: 'price_0-200', label: 'Từ 0 đến 200' },
                { value: 'price_200-500', label: 'Từ 200 đến 500' },
                { value: 'price_500-1000', label: 'Từ 500 đến 1tr' },
                { value: 'price_1000_n', label: 'Trên 1tr' },
              ]}
            />
          </div>
          <div className={styles.search_product}>
            <Search placeholder="Tìm kiếm sản phẩm" onSearch={onSearch} style={{ width: 500 }} />
          </div>
          <div className={styles.filter_product}>Sort</div>
        </div>
        <div className={styles.home_productType}>
          <ListProductType data={DATA_FAKE_LIST_PRODUCT_TYPE} />
        </div>
        <div className={styles.home_listProduct}>
          <div className={styles.listProduct_topsale}>
            <ListProductItem data={DATA_FAKE_LIST_PRODUCT} />
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default ProductPortfolio;
