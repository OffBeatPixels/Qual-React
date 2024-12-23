import { motion } from "framer-motion";

// Higher-order component (HOC) for wrapping components with transition
const Transition = (OgComponent) => {
  return (props) => (
    <>
      {/* Slide-in transition */}
      <motion.div
        className="slide-in"
        initial={{y : 500 }}
        animate={{ y: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Render the original component */}
        <OgComponent {...props} />
      </motion.div>

      <motion.div
        className="slide-out"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 4, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default Transition;
