import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  toastError,
  toastSuccess,
} from "../../../design-system/components/Toast/Toast";
import { setUser } from "../../../slices/userSlice";

export default function useAuth() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const loginSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData: any = {};

    formData.forEach((value, key) => {
      userData[key] = value;
    });

    try {
      const response = await fetch(
        "https://real-estate-server-ctvu.onrender.com/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        toastSuccess("Successfully Logged In");
        localStorage.setItem("accessToken", data.accessToken);
        dispatch(setUser(data.user));
        navigate("/");
      } else {
        const errorMessage = await response.text(); // Read the error message
        toastError(errorMessage.split('"').join(""));
      }
    } catch (error: any) {
      toastError(error.message);
    }
  };

  const registerSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData: any = {};

    formData.forEach((value, key) => {
      userData[key] = value;
    });

    try {
      const response = await fetch(
        "https://real-estate-server-ctvu.onrender.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      if (response.ok) {
        toastSuccess("Success");
        navigate("/account/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    loginSubmit,
    registerSubmit,
  };
}
