import { Box, Typography } from "@mui/material"

const AuthorizationMessage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="200px"
    >
      <Typography variant="h6" color="textSecondary">
        🔒 Для просмотра фильмов необходимо авторизоваться! 🔒
      </Typography>
    </Box>
  );
}

export default AuthorizationMessage;