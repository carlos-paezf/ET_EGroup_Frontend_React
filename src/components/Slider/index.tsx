import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material"
import { Box, Button, MobileStepper, useTheme } from "@mui/material"
import { FC, useState } from "react"
import { HeroComponent } from "../Hero"


export const SliderComponent: FC = () => {
    const theme = useTheme()
    const [ activeStep, setActiveStep ] = useState( 0 )
    const maxSteps = 3

    const handleNext = () => {
        setActiveStep( ( prevActiveStep ) => prevActiveStep + 1 )
    }

    const handleBack = () => {
        setActiveStep( ( prevActiveStep ) => prevActiveStep - 1 )
    }

    return (
        <Box sx={ { flexGrow: 1 } }>
            <Box sx={ { width: '100%', p: 0 } }>
                <HeroComponent step={ activeStep } />
            </Box>

            <MobileStepper variant="dots" position="static"
                steps={ maxSteps } activeStep={ activeStep }
                nextButton={
                    <Button size="small" onClick={ handleNext } disabled={ activeStep === maxSteps - 1 }>
                        Next
                        {
                            theme.direction === 'rtl'
                                ? <KeyboardArrowLeft />
                                : <KeyboardArrowRight />
                        }
                    </Button>
                }
                backButton={
                    <Button size="small" onClick={ handleBack } disabled={ activeStep === 0 }>
                        {
                            theme.direction === 'rtl'
                                ? <KeyboardArrowRight />
                                : <KeyboardArrowLeft />
                        }
                        Back
                    </Button>
                }
            />
        </Box>
    )
}