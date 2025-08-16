"use client";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader" // Animate Presence ID
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 flex items-center justify-center bg-bg dark:bg-bg-dark z-[1000]"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="size-[100px] trnsf rounded-full border-8 border-accent 
              dark:border-accent-dark border-t-transparent dark:border-t-transparent animate-spin"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
