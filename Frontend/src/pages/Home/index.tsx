import { Box, Stack, Typography } from "@mui/material";
import { alpha } from "@mui/material/styles";
import Feed from "./Feed";

export default function Home() {
  return (
    <Box
      component="main"
      sx={(theme) => ({
        flexGrow: 1,
        backgroundColor: alpha(theme.palette.background.default, 1),
        overflow: "auto",
      })}
    >
      <Stack
        spacing={2}
        sx={{
          alignItems: "center",
          mx: 3,
          pb: 5,
          mt: { xs: 8, md: 0 },
        }}
      >
        <Typography variant="h4">Home Page</Typography>
        <Feed />
      </Stack>
    </Box>
  );
}
