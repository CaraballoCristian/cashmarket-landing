import React from "react";

const Badge = ({msg, icon, containerStyles, textStyles, iconStyles}) => {
  const Icon = icon;
  return (
    <div className={`flex items-center border py-1 px-2  text-text dark:text-text-dark rounded-md font-semibold
     ${containerStyles || "border-text/60 dark:border-text-dark/60"}`}>
      <Icon className={`size-[12px] mr-2 text-accent dark:text-accent-dark ${iconStyles || ""}`} />
      <h2 className={` ${textStyles || "text-xs"}` }>{msg}</h2>
    </div>
  );
};

export default Badge;
