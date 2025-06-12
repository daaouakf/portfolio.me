import Socials from "@/components/common/Socials";
import { SidebarProps } from "@/lib/types";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { forwardRef } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";

const Sidebar = forwardRef<HTMLDivElement, SidebarProps>(
  ({ isOpen, setIsOpen, pathName }, ref) => {
    return (
      <>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.button
              className="text-xl md:hidden z-20"
              onClick={() => setIsOpen(!isOpen)}
              layout
              key="cross"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 1.2 }}
              exit={{ y: 10, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 30,
              }}
            >
              {" "}
              <RxCross1 />{" "}
            </motion.button>
          ) : (
            <motion.button
              className="text-xl md:hidden z-20"
              onClick={() => setIsOpen(!isOpen)}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ y: 10, opacity: 0 }}
              whileTap={{ scale: 1.2 }}
              transition={{
                type: "spring",
                stiffness: 700,
                damping: 30,
              }}
              key="menu"
            >
              {" "}
              <RxHamburgerMenu />{" "}
            </motion.button>
          )}
        </AnimatePresence>
        <div
          className={`fixed ${
            isOpen ? "z-[11] backdrop-blur-sm bg-slate-900/60" : "invisible"
          } right-0 top-0 h-full w-full bg-transparent`}
        >
          <div
            ref={ref}
            className={`bg-slate-100 md:hidden text-xl sm:text-2xl dark:bg-slate-900 min-w-[400px] absolute right-0 h-full shadow-lg shadow-slate-900/50 dark:shadow-slate-200/50 border-l border-slate-900 dark:border-slate-200 ${
              isOpen ? "translate-x-0" : "invisible translate-x-full"
            } transition-all flex flex-col justify-center items-center gap-y-20 p-4`}
          >
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!open)}
            >
              <Link
                className={`${pathName === "/" ? "font-bold" : ""}`}
                href={"/"}
              >
                Whoami
              </Link>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!open)}
            >
              <Link
                className={`${pathName === "/projects" ? "font-bold" : ""}`}
                href={"/projects"}
              >
                Projects
              </Link>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!open)}
            >
              <Link
                className={`${pathName === "/career" ? "font-bold" : ""}`}
                href={"/career"}
              >
                Career
              </Link>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!open)}
            >
              <Link
                className={`${pathName === "/contactme" ? "font-bold" : ""}`}
                href={"/contactme"}
              >
                Contact Me
              </Link>
            </motion.div>
            <Socials className="!flex absolute bottom-20 !text-4xl" />
          </div>
        </div>
      </>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default Sidebar;
