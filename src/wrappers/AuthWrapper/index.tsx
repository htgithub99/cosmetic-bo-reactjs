import Footer from "components/Footer";
import PageHeader from "components/PageHeader";
import Contact from "pages/Contact";
import Flashsale from "pages/Flashsale";
import ProductPortfolio from "pages/ProductPortfolio";
import ShoppingCard from "pages/ShoppingCard";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./styles.module.scss";
const ProductDetail = lazy(() => import("pages/ProductDetail"));
const Home = lazy(() => import("pages/Home"));

export default function PageWrapper() {
  // const isAuthenticated = !!Cookies.get("token");
  // const { profile } = useProfile(isAuthenticated);

  // if (!isAuthenticated) return <Navigate to="/login" />;
  // if (!profile) return null;

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.mainWrapper}>
        <PageHeader />
        <div className={styles.pageContent}>
          <Suspense>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductPortfolio />}/>
              <Route path="/product/1" element={<ProductDetail />}/>
              <Route path="/flashsale" element={<Flashsale />}/>
              <Route path="/contact" element={<Contact />}/>
              <Route path="/shoppingcard" element={<ShoppingCard />}/>
            </Routes>
          </Suspense>
        </div>
        <Footer/>
      </div>
    </div>
  );
}
