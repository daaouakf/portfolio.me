import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import ThemeSwitch from "../../../Theme";
import Socials from "../Socials";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring" }}
      className="py-4  flex items-center z-10 justify-between gap-x-4 lg:px-24 xl:px-56"
    >
      <ThemeSwitch />
      <div className="md:flex justify-evenly hidden md:w-[80%] xl:w-[70%] text-sm  text-gray-500">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Link
            className={`${router.pathname === "/" ? "font-bold" : ""}`}
            href={"/"}
          >
            Whoami
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Link
            className={`${router.pathname === "/projects" ? "font-bold" : ""}`}
            href={"/projects"}
          >
            Projects
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Link
            className={`${router.pathname === "/career" ? "font-bold" : ""}`}
            href={"/career "}
          >
            Career
          </Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <Link
            className={`${router.pathname === "/contactme" ? "font-bold" : ""}`}
            href={"/contactme"}
          >
            Contact Me
          </Link>
        </motion.div>
      </div>
      <Socials />
      <Sidebar
        ref={ref}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        pathName={router.pathname}
      />
    </motion.nav>
  );
};

export default Navbar;
