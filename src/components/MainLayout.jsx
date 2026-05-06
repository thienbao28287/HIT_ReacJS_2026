import { NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <NavLink to="/" style={{ marginRight: "10px" }}>
          Trang Chủ
        </NavLink>
        <NavLink to="/users">Danh Sách Người Dùng</NavLink>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};
export default MainLayout;
