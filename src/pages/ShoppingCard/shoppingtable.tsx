import MainContainer from "components/MainContainer";
import styles from "./styles.module.scss";
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
  key: string;
  name: string;
  quality: number;
  price: number;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Ảnh sản phẩm',
    dataIndex: 'image',
    key: 'image',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Số lượng ',
    dataIndex: 'quality',
    key: 'quality',
    render: (_, record) => (
      <div className={styles.pro_qty}>
        <div className={styles.main}>
          <input type="text" title="Quantity" value="01" />
          <div className={styles.dec_qty_btn}>-</div>
          <div className={styles.inc_qty_btn}>+</div></div>
      </div>
    )
  },
  {
    title: 'Giá sản phẩm',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Tổng tiền',
    key: 'total',
    dataIndex: 'total',
    render: (_, record) => (
      <div>150.000 đ</div>
    ),
  },
  {
    title: '',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Xóa</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John BrownJohn BrownJohn BrownJohn Brown',
    quality: 32,
    price: 150000
  },
  {
    key: '2',
    name: 'Jim Green John BrownJohn Brown',
    quality: 42,
    price: 99000
  },
  {
    key: '3',
    name: 'Joe BlackJohn BrownJohn Brown',
    quality: 32,
    price: 450000
  },
];

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const ShoppingTable = () => {
  return (
      <div className={styles.shopping_card}>
        <Table columns={columns} dataSource={data} bordered />
    </div>
  );
};

export default ShoppingTable;
