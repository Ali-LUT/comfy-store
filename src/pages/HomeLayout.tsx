import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <header>header</header>
      <nav>navbar</nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
