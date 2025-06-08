// components/FadeInPage.jsx
import { motion } from "framer-motion";

export default function FadeInPage({ children }) {
  return (
    <motion.div
      initial={{ backgroundColor: "#000", opacity: 0 }}
      animate={{ backgroundColor: "transparent", opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
