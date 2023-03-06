import MainContainer from "components/MainContainer";
import styles from "./styles.module.scss";
import { Input, Breadcrumb } from 'antd';
import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Button, Form } from 'antd';
import ShoppingTable from "./shoppingtable";

interface DataType {
  key: string;
  name: string;
  money: string;
  address: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Cash Assets',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
  }
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    money: '￥300,000.00',
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: '￥1,256,000.00',
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: '￥120,000.00',
    address: 'Sydney No. 1 Lake Park',
  },
];


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
  console.log(values);
};

const ShoppingCard = () => {
  return (
    <MainContainer>
      <div className={styles.breakcrumb}>
        <Breadcrumb>
          <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Giỏ hàng</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2>Giỏ hàng</h2>
      </div>
      <ShoppingTable />
      <div className={styles.checkout}>
        <div className={styles.info_checkout}>
          <h2>Thông tin mua hàng</h2>
          <Form
            {...layout}
            name="nest-messages"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            validateMessages={validateMessages}
          >
            <Form.Item name={['user', 'name']} label="Tên khách hàng" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'address']} label="Địa chỉ" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item name={['user', 'number']} label="Số điện thoại" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'extra']} label="Ghi chú cho shop">
              <Input.TextArea />
            </Form.Item>
            {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item> */}
          </Form>
        </div>
        <div className={styles.shipping}>
          <Table
            columns={columns}
            dataSource={data}
            bordered
            title={() => 'Header'}
          />
        </div>
      </div>
    </MainContainer>
  );
};

export default ShoppingCard;
