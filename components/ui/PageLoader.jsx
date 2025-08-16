import { motion } from "framer-motion";

const PageLoader = ({ children }) => {
  return (
    /* Page Loader */
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.6,
          ease: "easeIn",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageLoader;
