const Logo = ({ styles, size, dark }) => {
  return (
    <a href="#home">
      <h1 className={styles}>
        <img
          src={dark ? "/assets/logo-dark.png" : "/assets/logo-light.png"}
          alt="logo"
          className={size}
        />
        Cashmarket
      </h1>
    </a>
  );
};

export default Logo;
