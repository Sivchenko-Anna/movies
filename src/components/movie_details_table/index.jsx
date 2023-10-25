import { TableCell, TableRow, Typography } from "@mui/material";
import PropTypes from "prop-types";

const MovieDetailsTable = ({title, data}) => {
  return (
    <TableRow>
      <TableCell>
        <Typography variant="subtitle1">{title}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="subtitle1">{data}</Typography>
      </TableCell>
    </TableRow>
  );
}

MovieDetailsTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.string,
};


export default MovieDetailsTable;