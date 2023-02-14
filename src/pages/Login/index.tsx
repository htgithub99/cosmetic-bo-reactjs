import { Button, Card, Checkbox, Form, Input, Row } from "antd";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { Navigate } from "react-router-dom";
import { login } from "utils/helper/authentication";
import styles from "./style.module.scss";

export default function Login() {
  const { t } = useTranslation();

  const navigateToSignUp = () => {};
  
  const handleSubmit = async (payload: any) => {
    login(payload);
  };

  const isAuthenticated = !!Cookies.get('token');
  if (isAuthenticated) return <Navigate to="/" />;

  return (
    <div className={styles.loginContainer}>
      <Card bordered className={styles.loginForm}>
        <Form onFinish={handleSubmit}>
          <Row justify="center">
            <h2>{t("common.login")}</h2>
          </Row>
          <Form.Item
            label={t("common.email")}
            name="email"
            rules={[
              {
                required: true,
                message: t("validate.usernameRequired"),
              },
            ]}
            labelAlign="left"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label={t("common.password")}
            name="password"
            rules={[
              { required: true, message: t("validate.passwordRequired") },
            ]}
            labelAlign="left"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="rememberMe" valuePropName="checked">
            <Checkbox> {t("common.rememberMe")}</Checkbox>
          </Form.Item>
          <Form.Item labelCol={{ span: 24 }}>
            <Button block type="primary" htmlType="submit">
              {t("common.login").toUpperCase()}
            </Button>
          </Form.Item>
          <Form.Item labelCol={{ span: 24 }}>
            <Button
              block
              type="dashed"
              htmlType="button"
              onClick={navigateToSignUp}
            >
              {t("common.signUp").toUpperCase()}
            </Button>
          </Form.Item>
          <div>
            <p>Account: admin / 123456</p>
          </div>
        </Form>
      </Card>
    </div>
  );
}
