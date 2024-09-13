import { Header } from "@/components";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <Header />
      <nav>navbar</nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
