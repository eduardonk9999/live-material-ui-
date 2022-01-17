import { Alert, Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { Delivery } from "../Delivery";
import { Payment } from "../Payment";
import { Products } from "../Products";

export function Steps () {
  const [currentStep, setCurrentStep] = useState(0)

  function next() {
    setCurrentStep(currentStep + 1)
  }
  function back() {
    setCurrentStep(currentStep - 1)
  }

  return(
    <Box sx={{ width: "100%"}}>
      <Stepper activeStep={currentStep}>
        <Step>
          <StepLabel>Produtos</StepLabel>
        </Step>
        <Step>
          <StepLabel>Metódo de entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pagamento</StepLabel>
        </Step>
      </Stepper>

      {currentStep === 0 && <Products />}
      {currentStep === 1 && <Delivery />}
      {currentStep === 2 && <Payment />}
      
      {currentStep === 3 ? (
        <Alert>
          Compra efetuada com sucesso! Confira seu e-mail
        </Alert>
      ) : (
        <>
         <Button onClick={back}>Voltar</Button>
         <Button onClick={next}>Próximo</Button>    
        </>
      )}
    </Box>
  );
}