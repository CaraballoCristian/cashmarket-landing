const DarkModeSwitcher = ({toggleDark, dark}) => {
  return (
    <button 
      className="p-2 text-[20px] cursor-pointer" 
      onClick={toggleDark}>
      {dark ? "🌙" : "🌞"}
    </button>
  );
};

export default DarkModeSwitcher;
