const FooterDisclaimer = ({ msg }) => {
  return (
    <div className="rounded-lg p-3 border border-muted/30 dark:border-muted-dark/30 bg-bg dark:bg-bg-dark/50 ">
      <p className="text-sm text-center text-muted dark:text-muted-dark">
        {msg}
      </p>
    </div>
  );
};

export default FooterDisclaimer;
