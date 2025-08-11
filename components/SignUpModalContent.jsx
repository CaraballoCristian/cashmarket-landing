// Helpers
import { helpValidations } from "@/helpers/helpValidations";

// Hooks
import { useState } from "react";

const initialForm = {
  name: "",
  email: "",
  password: "",
  confirmation: "",
};

const SignUpModalContent = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleBlur = (e) => {
    // En ese momento actualiza la variable de estado Form
    handleChange(e);

    const { name } = e.target;
    const fieldErrors = helpValidations(form);

    if (fieldErrors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: fieldErrors[name],
      }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(helpValidations(e.target));

    console.log(Object.keys(errors));

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmation ||
      Object.keys(errors).length !== 0
    ) {
      window.alert("Salame");
      return;
    } else window.alert("Fake Sign Up Succesful 💜");

    setForm(initialForm);
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl text-center">Sign Up!</h2>
      <form
        className="flex flex-col items-center gap-10"
        onSubmit={handleSubmit}
      >
        <div className="relative w-full flex items-center justify-center">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.name}
            required
            className="border-2 border-accent rounded-full w-full py-2 px-4 font-semibold"
          />
          {errors.name && (
            <div
             
              className={`absolute top-full w-85 p-1 rounded-md z-40 text-center text-bg font-extrabold bg-red-500`}
            >
              <p>{errors.name}</p>
            </div>
          )}
        </div>
        <div className="relative w-full flex items-center justify-center ">
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.email}
            required
            className="border-2 border-accent rounded-full w-full py-2 px-4 font-semibold"
          />
          {errors.email && (
            <div
              className={`absolute top-full w-85 p-1 rounded-md z-40 text-center text-bg font-extrabold bg-red-500`}
            >
              <p>{errors.email}</p>
            </div>
          )}
        </div>

        <div className="relative w-full flex items-center justify-center ">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.password}
            required
            className="border-2 border-accent rounded-full w-full py-2 px-4 font-semibold"
          />
          {errors.password && (
            <div
              className={`absolute top-full w-85 p-1 rounded-md z-40 text-center text-bg font-extrabold bg-red-500`}
            >
              <p>{errors.password}</p>
            </div>
          )}
        </div>

        <div className="relative w-full flex items-center justify-center ">
          <input
            type="password"
            name="confirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.confirmation}
            required
            className="border-2 border-accent rounded-full w-full py-2 px-4 font-semibold"
          />
          {errors.confirmation && (
            <div
              className={`absolute top-full w-85 p-1 rounded-md z-40 text-center text-bg font-extrabold bg-red-500`}
            >
              <p>{errors.confirmation}</p>
            </div>
          )}
        </div>
        <input
          type="submit"
          value="Sign Up"
          className="bg-accent rounded-full w-full font-semibold text-bg px-6 py-2 "
        />
      </form>

      {/* Disclaimer */}
      <div className="text-center">
        <p>This is a visual prototype. No data is being submitted.</p>
      </div>
    </div>
  );
};

export default SignUpModalContent;
