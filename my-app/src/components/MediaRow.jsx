import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import Button from "./UI/Button.jsx";

const MediaRow = ({ item, deleteMedia }) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const sure = confirm("Are you sure?");
    if (!sure) return;
    const token = localStorage.getItem("token");
    const deleteResult = await deleteMedia(item.media_id, token);
    console.log("deleteResult", deleteResult);
    navigate(0);
  };

  return (
    <tr>
      <td>
        <img src={item.thumbnail} alt={item.title} />
      </td>
      <td>{item.username}</td>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{new Date(item.created_at).toLocaleString()}</td>
      <td>{item.filesize}</td>
      <td>{item.media_type}</td>
      <td>
        <Link to={`/media/${item.media_id}`} state={{ item }}>
          View
        </Link>
        <br />
        <br />
        <Button text={"Edit"} />
        <Button
          text={"Delete"}
          onClick={handleDelete}
          className={"bg-red-500"}
        />
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  item: PropTypes.object.isRequired,
  deleteMedia: PropTypes.func.isRequired,
};

export default MediaRow;
