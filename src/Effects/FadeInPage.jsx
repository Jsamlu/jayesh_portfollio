// components/FadeInPage.jsx
import { motion } from "framer-motion";

export default function FadeInPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0}}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
