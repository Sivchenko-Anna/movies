import { Box, Typography, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  const goBack = () => navigate("/");

  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        padding: "40px",
      }}
    >
      <Box
        sx={{
          flex: "1",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          
        }}
      >
        <Typography
          variant="h2"
          color="text.primary"
          sx={{ marginBottom: "20px" }}
        >
          💥 Произошла ошибка
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Причина: <i>{error.statusText || error.message}</i>
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center", paddingBottom: "20px" }}>
        <IconButton onClick={goBack}>
          <Close />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ErrorPage;
