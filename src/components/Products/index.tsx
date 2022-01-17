import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function Products () {
  return(
    <Box p={4}>
      <Paper elevation={3}>
        <Typography variant="body1" p={2}>
          Macbook Pro 32GB
        </Typography>
      </Paper>
      <Paper elevation={3}>
        <Typography variant="body1" mt={2} p={2}>
          Teclado Mecânico Keychron K2
        </Typography>
      </Paper>
    </Box>
  )
}