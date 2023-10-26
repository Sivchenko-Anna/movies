import { TableCell, TableRow, Typography } from "@mui/material";
import PropTypes from "prop-types";

const MovieDetailsTable = ({title, data}) => {
  return (
    <TableRow>
      <TableCell sx={{ padding: "2px" }}>
        <Typography variant="subtitle1" color="text.default">
          {title}
        </Typography>
      </TableCell>
      <TableCell sx={{ padding: "2px" }}>
        <Typography variant="subtitle1" color="text.default">
          {data}
        </Typography>
      </TableCell>
    </TableRow>
  );
}

MovieDetailsTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
};


export default MovieDetailsTable;