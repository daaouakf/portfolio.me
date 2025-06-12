import { InputProps } from "@/lib/types";
import { motion } from "framer-motion";
import { FC } from "react";
import { CgDanger } from "react-icons/cg";

const Input: FC<InputProps> = ({
  name,
  value,
  HTMLType,
  label,
  className,
  error,
  inputOnChange,
  textAreaOnChange,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 w-full ${
        HTMLType === "textarea" && "md:col-span-2"
      }`}
    >
      {HTMLType === "text" && (
        <>
          <motion.label
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            htmlFor=""
          >
            {label}
          </motion.label>
          <motion.input
            name={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={`bg-transparent border ${
              error
                ? "border-red-600"
                : "border-slate-900 dark:border-slate-100"
            } rounded-md py-2 px-4 xl:py-3 ${className} transition-all duration-300 shadow-sm shadow-xs dark:shadow-slate-100/50 hover:shadow-sm`}
            value={value}
            onChange={inputOnChange}
          />
          <span
            className={`${
              error ? "visible" : "invisible"
            } transition-all flex gap-2 items-center ml-1 text-sm xl:text-base text-red-600`}
          >
            <CgDanger size={18} />
            Required field
          </span>
        </>
      )}
      {HTMLType === "textarea" && (
        <>
          <motion.label
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            htmlFor=""
          >
            {label}
          </motion.label>
          <motion.textarea
            name={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className={`bg-transparent border ${
              error
                ? "border-red-600"
                : "border-slate-900 dark:border-slate-100"
            } rounded-md py-2 px-4 xl:py-3 ${className} transition-colors duration-300 shadow-xs dark:shadow-slate-100/50`}
            value={value}
            onChange={textAreaOnChange}
          />
          <span
            className={`${
              error ? "visible" : "invisible"
            } transition-all flex gap-2 items-center ml-1 text-sm xl:text-base text-red-600`}
          >
            <CgDanger size={18} />
            Required field
          </span>
        </>
      )}
    </div>
  );
};

export default Input;
