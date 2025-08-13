const Button = ({
  variant,
  textValue,
  disabledCondition,
  isLoading,
  loadingValue,
  handler,
}) => {
  // Tailwind Clases
  let styles =
    "relative rounded-xl transition-colors duration-200 transform overflow-hidden font-semibold disabled:cursor-not-allowed disabled:from-muted/40 disabled:to-muted/80 dark:disabled:from-muted-dark/70 dark:disabled:to-muted-dark/30 py-2 px-5 text-nowrap  cursor-pointer";

  // Space between clases
  styles += " ";

  // Variant Selector
  switch (variant) {
    /* Accent Buttons */
    case "accent":
      styles +=
        "text-text text-sm bg-accent hover:bg-accent-hover dark:bg-accent-dark dark:hover:bg-accent-dark-hover";
      break;
    /* Form Buttons */
    case "form":
      styles +=
        " w-full text-white py-3 px-6 bg-gradient-to-r from-accent/80 to-accent hover:from-accent-dark/80 hover:to-accent-dark/80";
      break;
    /* B&W Buttons */
    case "black&white":
      styles +=
        "w-full md:w-fit px-6 py-3 mt-10 font-semibold bg-white text-black dark:bg-black dark:text-white hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white";
      break;
    /* Gray Buttons */
    default:
      styles +=
        "text-text-dark dark:text-text bg-bg-dark dark:bg-bg text-sm hover:bg-muted/80 dark:hover:bg-bg/80";
      break;
  }

  return (
    <button onClick={handler} disabled={disabledCondition} className={styles}>
      {/* Login Button Loader */}
      {isLoading ? (
        <div className="flex items-center justify-center gap-2">
          {/* Button Loader */}
          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
          <span>{loadingValue}</span>
        </div>
      ) : (
        textValue
      )}
    </button>
  );
};

export default Button;
