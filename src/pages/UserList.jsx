import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
const UserList = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  if (loading) return <p>Đang tải...</p>;
  if (error) return <p>Lỗi: {error}</p>;
  if (!data) return null;
  return (
    <div>
      <h2>Danh sách người dùng</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} <Link to={"/users/" + user.id}>Xem chi tiết</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;
