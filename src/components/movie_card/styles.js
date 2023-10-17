const STYLES = {
  CARD: {
    position: "relative",
    width: "260px",
    borderRadius: "10px",
    marginBottom: "14px",
    filter: "grayscale(10%)",
    transition: "box-shadow 0.2s ease, filter 0.2s ease",
    cursor: "pointer",
    "&:hover": {
      filter: "grayscale(0%) brightness(105%)",
      boxShadow: "0px 4px 8px rgba(5, 5, 5, 0.50)",
    },
  },
  CONTENT: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: "50px",
    backgroundColor: "rgba(0, 0, 0, 1)",
    background: "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))",
  },
  TEXT_TITLE: {
    fontSize: "18px",
  },
  TEXT_RATING: {
    fontSize: "14px",
    color: "#a9a9a9",
  },
};

export { STYLES };
