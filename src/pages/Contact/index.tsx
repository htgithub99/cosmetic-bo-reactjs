import styles from "./styles.module.scss";
import {
  PhoneOutlined, HomeOutlined, FacebookOutlined
} from '@ant-design/icons';
const Contact = () => {
  return (
    <section className={styles.section_space}>
                <div className={styles.container}>
                    <div className={styles.contact_info}>
                        <div className={styles.contact_info_item}>
                          {/* icon sđt */}
                            <div className={styles.icon}><PhoneOutlined /></div>
                            <div> Hotline: 0328878826</div>
                            <div>0961963493</div>
                        </div>
                        <div className={styles.contact_info_item}>
                            {/* icon fb */}
                            <div className={styles.icon}><FacebookOutlined /></div>
                            <div><a href="https://www.facebook.com/bo.cosmetic00">Bơ Cosmetic</a></div>
                            <div><a href="https://www.facebook.com/mylin.6789">Chủ shop: Đặng Thị Mỹ Linh</a></div>
                        </div>
                        <div className={styles.contact_info_item}>
                          {/* icon địa chỉ */}
                          <div className={styles.icon}><HomeOutlined /></div>
                            <div>Cơ sở 1: Chợ KTX Sevt, Đồng Tiến, Thái Nguyên</div>
                            <div>Cơ sở 2: Trần Xá, Bắc Ninh</div>
                        </div>
                    </div>
                </div>
            </section>

  );
};

export default Contact;
