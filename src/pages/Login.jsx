import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export function Login({isAuth, setIsAuth}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  let history = useHistory(); 

  const onSubmit = (data) => {
    localStorage.setItem("auth", "true");
    setIsAuth(true);
    history.push("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-sm bg-white border rounded-xl px-10 py-16 shadow-xl">
        <h1 className="text-2xl font-semibold pb-1">User Authentication</h1>
        <p className="pb-4">Please enter your credentials to continue</p>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Please enter your email address."
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"}`}
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email address.",
                },
              })}
            />
            {errors.email && (<div className="text-red-500 text-xs italic">{errors.email.message}</div>)}
          </label>
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Please enter your password."
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? "border-red-500 focus:border-red-500 focus:ring-red-500" : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"}`}
              {...register("password", {
                required: "Password is required.",
                maxLength: {
                    value: 10,
                    message: "Password cannot exceed 10 characters."
                },
                minLength: {
                    value: 3,
                    message: "Password must be at least 3 characters long."
                }
              })}
            />
            {errors.password && (<div className="text-red-500 text-xs italic">{errors.password.message}</div>)}
          </label>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded-full focus:outline-none focus:shadow-outline" type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}
