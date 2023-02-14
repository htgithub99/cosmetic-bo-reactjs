import PageHeader from "components/PageHeader";
import SideNav from "components/SideNav";
import Cookies from "js-cookie";
import { Navigate, useOutlet } from "react-router-dom";
import useProfile from "utils/hooks/useProfile";
import styles from "./styles.module.scss";

export default function PageWrapper() {
  const outlet = useOutlet();
  const isAuthenticated = !!Cookies.get("token");
  const { profile } = useProfile(isAuthenticated);
  
  if (!isAuthenticated) return <Navigate to="/login" />;
  if (!profile) return null;
  
  return (
    <div className={styles.pageWrapper}>
      <SideNav />
      <div className={styles.mainWrapper}>
        <PageHeader />
        <div className={styles.pageContent}>{outlet}</div>
      </div>
    </div>
  );
}
