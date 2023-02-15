import { KeyboardArrowUp } from "@mui/icons-material"
import { Box, Fab, Zoom } from "@mui/material"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import { FC, useCallback } from "react"


const ScrollTop: FC = () => {
    const trigger = useScrollTrigger( {
        // target: document.body,
        // disableHysteresis: true,
        threshold: 100,
    } )

    const scrollToTop = useCallback( () => {
        window.scrollTo( { top: 0, behavior: "smooth" } )
    }, [] )

    return (
        <Zoom in={ trigger }>
            <Box role="presentation" sx={ {
                position: "fixed",
                bottom: 32,
                right: 32,
                zIndex: 1,
                display: 'block'
            } } >
                <Fab onClick={ scrollToTop } color="primary" size="small"
                    aria-label="scroll back to top" >
                    <KeyboardArrowUp />
                </Fab>
            </Box>
        </Zoom >
    )
}

export default ScrollTop