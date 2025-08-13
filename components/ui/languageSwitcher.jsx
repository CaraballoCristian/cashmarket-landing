"use client";

const LanguageSwitcher = ({ setLocale }) => {
  
  return (
    <select
      className="text-text dark:text-text-dark bg-bg dark:bg-bg-dark rounded-md font-semibold p-2 outline-none text-lg cursor-pointer"
      onChange={(e) => setLocale(e.target.value)}
      defaultValue="en"
      aria-label="Select language"
    >
      <option value="en">EN</option>
      <option value="es">ES</option>
    </select>
  );
};

export default LanguageSwitcher;