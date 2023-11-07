import PropTypes from "prop-types";
import { Box } from "@mui/material";

const Main = ({children}) => {
  return (
    <Box p={1}>{children}</Box>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;