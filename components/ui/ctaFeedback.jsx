const CtaFeedback = ({title, subtitle}) => {
  return (
      <div className="text-center py-4">
        <div className="rounded-xl p-4 bg-accent-dark/10 dark:bg-accent/20 border border-accent-dark/30 dark:border-accent/30">
          <p className="font-semibold text-accent dark:text-accent-dark">
            {title}
          </p>
          <p className="text-sm mt-1 text-accent dark:text-accent-dark">
            {subtitle}
          </p>
        </div>
      </div>
  );
};

export default CtaFeedback;
