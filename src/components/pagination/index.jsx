import { useContext, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination, Stack } from "@mui/material";
import { setActivePage } from "../../slices/filters_slice";
import { ColorThemeContext } from "../../theme/toggle_theme";

const PaginationMovies = () => {
  const currentPage = useSelector((state) => state.filters.currentPage);
  const { theme } = useContext(ColorThemeContext);
  const dispatch = useDispatch();

  const page = useMemo(() => {
    return currentPage;
  }, [currentPage]);

  function handleChange(event, page) {
    dispatch(setActivePage({ currentPage: page }));
  }

  return (
    <Stack>
      <Pagination
        count={500}
        page={page}
        size="small"
        color="secondary"
        alignItems="center"
        onChange={handleChange}
        sx={{
          "& .MuiPagination-ul": {
            justifyContent: "center",
          },
          "& .MuiPaginationItem-root": {
            color: theme.palette.text.secondary,
          },
        }}
      />
    </Stack>
  );
};

export default PaginationMovies;
