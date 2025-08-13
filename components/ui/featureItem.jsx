import React from "react";

const FeatureItem = ({msg, icon}) => {
  const Icon = icon;

  return (
    <div className="flex items-center gap-3 text-text dark:text-text-dark">
      <Icon
        className="text-accent dark:text-accent-dark flex-shrink-0"
        size={18}
      />
      <span className="text-sm">{msg}</span>
    </div>
  );
};

export default FeatureItem;
