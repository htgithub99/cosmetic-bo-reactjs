import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

interface IProps {
  data: any;
}
const ListProductType = ({ data }: IProps) => {
  return (
    <div className={styles.wrapProductType}>
      <Row gutter={[16, 16]}>
        {data?.map(
          ({
            category,
            id,
            background,
          }: {
            category: string;
            id: number;
            background: string;
          }) => (
            <Col
              className="gutter-row"
              xs={24}
              sm={24}
              md={12}
              lg={12}
              xl={4}
              key={id}
            >
              <Link to="#">
                <div
                  className={styles.productType__item}
                  style={{
                    background: background,
                  }}
                >
                  {/* <img src={url} alt="productType" width={70} /> */}
                  <h4>{category}</h4>
                </div>
              </Link>
            </Col>
          )
        )}
      </Row>
    </div>
  );
};

export default ListProductType;
