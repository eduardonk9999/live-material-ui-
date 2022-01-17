import { Card, Container, Stack, TextField } from "@mui/material";

export function Payment () {
  return(
    <Card
      sx={{
        margin: 2,
        padding: 2
      }}
    >
      <Container 
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Stack
          component="form"
          sx={{
            width: "50vw",
          }}
          spacing={2}
          noValidate
          autoComplete="off"
        >
          <TextField 
            type="number"
            label="Número do Cartão"
            variant="standard"
          />
          <TextField label="Nome" variant="standard" />
          <TextField label="Validade" variant="standard" />
          <TextField label="Number" label="CCV" variant="standard" />
        </Stack>
      </Container>
    </Card>
  )
}