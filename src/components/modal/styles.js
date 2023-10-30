const STYLES = {
  DIALOG: {
    "& .MuiPaper-root": {
      borderRadius: "20px",
      boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.25)",
      transition: "opacity 300ms, transform 300ms",
      opacity: 0,
      transform: "scale(0.9)",
      "&.modal-animation-enter-active": {
        opacity: 1,
        transform: "scale(1)",
      },
      "&.modal-animation-exit-active": {
        opacity: 0,
        transform: "scale(0.9)",
      },
    },
  },
};

export { STYLES };