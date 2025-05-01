import React from "react";
import { FaAngleUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const GoToTop = ({ show }) => {
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          onClick={scrollUp}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-5 right-6 text-xl text-slate-100 p-4 rounded-md bg-[#043A53]/50 z-[99] cursor-pointer"
        >
          <FaAngleUp />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GoToTop;
