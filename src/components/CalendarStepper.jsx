import { Stepper, Step, StepIndicator } from "@mui/joy";
import { stepClasses } from "@mui/joy/Step";

export default function CalendarStepper({ activeStep }) {
  return (
    <Stepper
      sx={{
        width: "60%",
        margin: "10px auto",
        [`& .${stepClasses.completed}`]: {
          "&::after": { bgcolor: "success.solidBg" },
        },
      }}
    >
      <Step
        indicator={
          <StepIndicator
            sx={{ backgroundColor: activeStep >= 0 ? "#fd6a30" : "#ccc" }}
            variant="solid"
            color="neutral"
          >
            1
          </StepIndicator>
        }
      ></Step>
      <Step
        indicator={
          <StepIndicator
            sx={{ backgroundColor: activeStep >= 1 ? "#fd6a30" : "#ccc" }}
            variant="solid"
            color="neutral"
          >
            2
          </StepIndicator>
        }
      ></Step>
      <Step
        indicator={
          <StepIndicator
            variant="solid"
            color="neutral"
            sx={{ backgroundColor: activeStep >= 2 ? "#fd6a30" : "#ccc" }}
          >
            3
          </StepIndicator>
        }
      ></Step>
    </Stepper>
  );
}
