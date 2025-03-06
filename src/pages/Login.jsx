import { useEffect, useState } from "react";
import FormImage from "../assets/form_image.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getLogin } from "../features/auth/authslice";
;


const Login = () => {
  const { theme } = useSelector((state) => state.theme);

  const { user, isLoading, isError, message,  } = useSelector(
    (state) => state.auth
  );
console.log(user)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getLogin(formData));
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }

    if (isError && message) {
      toast.error(message, { position: "top-center", theme: "dark" });
    }
  }, [isError, message, user]);




  if (isError) {
    return (
      <h1 className="text-center min-h-screen text-red-400 font-semibold uppercase">
        Something Went Wrong...
      </h1>
    );
  }
  
  if (isLoading) {
    return (
      <h1 className="text-center  min-h-screen bg-gray-900 font-semibold uppercase text-white">
        Fetching Trending Coins...
      </h1>
    );
  }



  return (
    <div
      className={
        theme
          ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900 "
          : "min-h-[90vh] py-16 px-8 md:px-16 "
      }
    >
      <div className="shadow border rounded-sm p-4 md:pd-5 flex flex-col md:flex-row items-center justify-between">
        <div className=" w-full md:w-1/2">
          <h1 className="my-3 font-bold text-3xl ml-2 uppercase text-gray-500">
            Log In
          </h1>
          <p className="my-3 ml-2 text-sm text-gray-600">
            Kindly Enter Your Email & Password
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className={
                theme
                  ? "border-2 rounded-md p-2 w-full my-2 bg-gray-900 border-gray-700"
                  : "border-2 rounded-md p-2 w-full my-2"
              }
              placeholder="Enter Email"
              required
              value={email}
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              className={
                theme
                  ? "border-2 rounded-md p-2 w-full my-2 bg-gray-900 border-gray-700"
                  : "border-2 rounded-md p-2 w-full my-2"
              }
              placeholder="Enter Password"
              required
              value={password}
              name="password"
              onChange={handleChange}
            />
            <button className="bg-teal-500 text-white font-bold py-2 px-5 rounded-md my-3 w-full md:w-1/2 hover:bg-teal-600 duration-200">
              Sign In
            </button>
          </form>
        </div>
        <div className="w-1/2 hidden md:block">
          <img className="h-96" src={FormImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
