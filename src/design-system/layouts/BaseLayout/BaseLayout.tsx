import { Outlet } from "react-router-dom";
import Footer from "../../compoennts/Footer";
import Header from "../../compoennts/Header";

export default function BaseLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
