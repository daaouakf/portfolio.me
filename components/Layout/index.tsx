import React from "react";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const Layout = ({ children }: { children: ReactNode }) => {
  const [start, setStart] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setStart(false);
    }, 3000);
  }, []);

  return start ? (
    <motion.div className="flex items-center justify-center h-screen">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: "linear",
          duration: 0.5,
          x: { duration: 0.5 },
        }}
        className="text-3xl font-bold md:text-3xl xl:text-4xl mb-6 "
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Welcome,
        </motion.span>
        <br />
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-6 ml-6"
        >
          to My Portfolio
        </motion.span>
      </motion.h1>
    </motion.div>
  ) : (
    <motion.div className="container px-6 mx-auto h-full flex flex-col leading-relaxed tracking-wide">
      <Navbar />
      <div className="flex-1 flex justify-center">
        {children}
        <Analytics />
        <SpeedInsights />
      </div>
      <Footer />
    </motion.div>
  );
};

export default Layout;
