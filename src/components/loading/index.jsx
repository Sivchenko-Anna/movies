import { useState, useEffect } from "react";
import { Box, CircularProgress } from "@mui/material";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const Loading = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      ) : (
        children
      )}
    </>
  );
};

Loading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Loading;
