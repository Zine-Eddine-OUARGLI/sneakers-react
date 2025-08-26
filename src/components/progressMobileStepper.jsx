import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import { useTheme } from "@mui/material/styles";

export default function ProgressMobileStepper({
  steps,
  activeStep,
  setActiveStep,
}) {
  const theme = useTheme();

  const handleNext = () => {
    setActiveStep(() => activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(() => activeStep - 1);
  };

  return (
    <MobileStepper
      variant="progress"
      steps={steps}
      position="static"
      activeStep={activeStep}
      sx={{
        maxWidth: 600,
        flexGrow: 1,
        "& .MuiLinearProgress-bar": {
          backgroundImage: "linear-gradient(to right, #3b82f6, #06b6d4)",
        },
        "& .MuiLinearProgress-root": {
          backgroundColor: "linear-gradient(to right, #3b82f6, #06b6d4)",
        },
      }}
      nextButton={
        <Button
          size="small"
          onClick={handleNext}
          disabled={activeStep === steps - 1}
        >
          {theme.direction === "rtl" ? (
            <KeyboardArrowLeft className="text-blue-500" />
          ) : (
            <KeyboardArrowRight className="text-blue-500" />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === "rtl" ? (
            <KeyboardArrowRight className="text-blue-500" />
          ) : (
            <KeyboardArrowLeft className="text-blue-500" />
          )}
        </Button>
      }
    />
  );
}
