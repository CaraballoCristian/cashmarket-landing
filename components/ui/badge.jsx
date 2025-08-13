import React from "react";

const Badge = ({msg, icon}) => {
  const Icon = icon;
  return (
    <div className="flex items-center border py-1 px-2 border-text/60 dark:border-text-dark/60 text-text dark:text-text-dark rounded-md font-semibold">
      <Icon className="h-[12px] w-[12px] mr-2 text-accent dark:text-accent-dark" />
      <h2 className=" text-xs">{msg}</h2>
    </div>
  );
};

export default Badge;
