import { Box, MenuItem, Select, Typography } from "@mui/material";

export function Delivery () {
  return (
    <Box p={4}>
       <Typography variant="body1" p={2}>
          Selecione o método  de transporte
        </Typography>
      <Select label="Selecione o método de transporte" >
        <MenuItem value={10}>Correios</MenuItem>
        <MenuItem value={20}>Amazon</MenuItem>
        <MenuItem value={30}>Transportadora do Tio Francisco</MenuItem>
      </Select>
    </Box>
  );
}