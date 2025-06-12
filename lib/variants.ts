const resumeButtonVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
  },
  tap: { scale: 1 },
};

const submitButtonVariants = {
  ...resumeButtonVariants,
  hover: {
    scale: 1.02,
  },
};

export { resumeButtonVariants, submitButtonVariants };
