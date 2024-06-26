import { useEffect, useState } from "react";
import { fetchData } from "../lib/fetchData.js";

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const { getUserById } = useUser();

  const getMedia = async () => {
    try {
      const mediaResult = await fetchData(
        import.meta.env.VITE_MEDIA_API + "/media",
      );

      const mediaWithUser = await Promise.all(
        mediaResult.map(async (mediaItem) => {
          const userResult = await getUserById(mediaItem.user_id);
          return { ...mediaItem, username: userResult.username };
        }),
      );

      setMediaArray(mediaWithUser);
    } catch (e) {
      // console.log(e.message);
    }
  };

  useEffect(() => {
    "";
    getMedia();
  }, []);

  const postMedia = async (file, inputs, token) => {
    const result = await fetchData(import.meta.env.VITE_MEDIA_API + "/media", {
      method: "POST",
      body: JSON.stringify({ ...file, ...inputs }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    return result;
  };

  const deleteMedia = async (id, token) => {
    const options = {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    return await fetchData(
      import.meta.env.VITE_MEDIA_API + "/media/" + id,
      options,
    );
  };

  return { mediaArray, postMedia, deleteMedia };
};

const useUser = () => {
  const getUserById = async (id) => {
    const userResult = await fetchData(
      import.meta.env.VITE_AUTH_API + "/users/" + id,
    );
    return userResult;
  };

  const getUserByToken = async (token) => {
    const options = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const tokenResult = await fetchData(
      import.meta.env.VITE_AUTH_API + "/users/token",
      options,
    );
    return tokenResult;
  };

  const register = async (inputs) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };
    return await fetchData(import.meta.env.VITE_AUTH_API + "/users", options);
  };

  return { getUserById, getUserByToken, register };
};

const useAuthentication = () => {
  const login = async (inputs) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    };

    const loginResult = await fetchData(
      import.meta.env.VITE_AUTH_API + "/auth/login",
      options,
    );
    return loginResult;
  };
  return { login };
};

const postFile = async (file, token) => {
  const formData = new FormData();
  formData.append("file", file);
  //  formData.append("token", token);

  const options = {
    method: "POST",
    body: formData,
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  const result = await fetchData(
    import.meta.env.VITE_UPLOAD_SERVER + "/upload",
    options,
  );
  console.log(result);

  return result.data;
};

export { useMedia, useUser, useAuthentication, postFile };
