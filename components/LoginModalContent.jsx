import { useState } from "react";

const initialForm = {
  user: "",
  password: "",
};

const LoginModalContent = () => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.user || !form.password) {
      window.alert("Incomplete Data");
      return;
    } else {
      window.alert("Thx 💜");
    }

    setForm(initialForm);
  };

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl text-center">Login</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-end gap-4">
        <input
          type="text"
          name="user"
          placeholder="Username"
          onChange={handleChange}
          value={form.user}
          className="border-2 border-accent rounded-full w-full py-2 px-4 font-semibold"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
          className="border-2 border-accent rounded-full w-full py-2 px-4 font-semibold"
        />
        <input  
          type="submit"
          value="Login"
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

export default LoginModalContent;
