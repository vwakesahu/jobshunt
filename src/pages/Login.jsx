import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { Link } from "react-router-dom";

const Login = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [{ user }, dispatch] = useStateValue();

  const login = async () => {
    const {
      user: { providerData },
    } = await signInWithPopup(firebaseAuth, provider);
    console.log(providerData);

    if (providerData[0].email === "viveksahu1762@gmail.com") {
      dispatch({ type: actionType.SET_USER, user: providerData[0] });

      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      alert("Not an Admin");
    }
  };

  const logout = () => {
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };
  return (
    <div className=" h-screen flex items-center justify-center">
      {user ? (
        <div className=" flex items-center justify-center flex-col gap-3">
          <img
            src={user.photoURL}
            className="w-25  drop-shadow-xl cursor-pointer rounded-full"
          />
          <p
            className="bg-red-500 p-4 text-white font-semibold rounded-lg cursor-pointer mt-4"
            onClick={logout}
          >
            Logout
          </p>
        </div>
      ) : (
        <p
          className=" bg-lightBlue p-4 text-white font-semibold rounded-lg cursor-pointer"
          onClick={login}
        >
          Login With Google
        </p>
      )}
    </div>
  );
};

export default Login;
