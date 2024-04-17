import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/UI/Button.jsx";

const Single = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const item = state.item;

  return (
    <dialog
      className={
        "fixed top-0 h-dvh w-dvw bg-black bg-opacity-50 text-stone-100 "
      }
      open={item ? true : false}
    >
      <p>
        <Button text={"Close"} handleClick={() => navigate(-1)} />
      </p>
      {item && (
        <>
          {item.media_type.includes("video") ? (
            <video className={"h-3/4 m-auto"} controls>
              <source src={item.filename} type={item.media_type} />
            </video>
          ) : (
            <img
              className={"h-3/4 m-auto"}
              src={item.filename}
              alt={item.title}
            />
          )}
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>{new Date(item.created_at).toLocaleString()}</p>
          <p>{item.filesize}</p>
        </>
      )}
    </dialog>
  );
};

export default Single;
