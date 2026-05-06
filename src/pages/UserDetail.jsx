import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users/" + id,
  );
  return (
    <div>
      <h2>Chi tiết người dùng</h2>
      <p>Tên: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <button onClick={() => navigate(-1)}>Quay lại</button>
    </div>
  );
};
export default UserDetail;
