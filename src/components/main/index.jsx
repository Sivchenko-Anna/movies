import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Main = ({children}) => {
  return (
    <Box>{children}</Box>
  )
}

Main.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Main;