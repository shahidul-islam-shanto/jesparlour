import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import NavBer from "../Components/NavBer/NavBer";
import { useWow } from "../hooks/useWow";

const Root = () => {
  useWow();

  return (
    <div className="min-h-screen bg-white text-nu20">
      <NavBer />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
