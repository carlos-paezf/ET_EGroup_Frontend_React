import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { FC } from "react"
import { ThemePalette } from "../helpers/util"
import type { ThemeProps } from "../types"


/* Creating a theme object that is being passed to the ThemeProvider component. */
const theme = createTheme( {
    palette: {
        mode: 'light',
        background: {
            default: ThemePalette.BG
        },
        primary: {
            main: ThemePalette.PRIMARY
        },
        secondary: {
            main: ThemePalette.SECONDARY
        }
    },
    typography: {
        fontFamily: ThemePalette.FONT_GLOBAL
    },
    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: ".5em",
                    wordSpacing: "5px",
                    letterSpacing: ".35px",
                    fontSize: '1rem',
                    paddingLeft: '30px',
                    paddingRight: '30px'
                }
            }
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: ".8em",
                    fontSize: "1em",
                }
            },
            styleOverrides: {
                standardError: {
                    border: `1px solid ${ ThemePalette.ERROR_MAIN }`,
                    background: ThemePalette.BG_ERROR_MAIN
                },
                standardSuccess: {
                    border: `1px solid ${ ThemePalette.SUCCESS_MAIN }`,
                    background: ThemePalette.BG_SUCCESS_MAIN
                }
            }
        },
        MuiCardContent: {
            styleOverrides: {
                root: {
                    margin: 0,
                    padding: 0
                }
            }
        },
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    // scrollbarColor: ThemePalette.PRIMARY,
                    // msScrollbarTrackColor: ThemePalette.BG_ERROR_MAIN,
                    scrollbarColor: `#6b6b6b #2b2b2b ${ ThemePalette.BG_ERROR_MAIN } ${ ThemePalette.PRIMARY }`,
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        borderRadius: 5,
                        backgroundColor: ThemePalette.SECONDARY,
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: ThemePalette.PRIMARY,
                        minHeight: 24,
                    },
                    "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
                        backgroundColor: ThemePalette.LIGHT_PRIMARY,
                    },
                    "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
                        backgroundColor: ThemePalette.LIGHT_PRIMARY,
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: ThemePalette.LIGHT_PRIMARY,
                    },
                    "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
                        backgroundColor: "#2b2b2b",
                    },
                }
            },
        }
    },
} )


/**
 * ThemeConfig is a function that takes in a child component and returns a ThemeProvider component with
 * a theme and a CssBaseline component as children.
 * @param  - FC<ThemeProps> - This is a React component that takes a generic type. The generic type is
 * the props that the component will receive.
 * @returns The ThemeProvider is being returned with the theme and the CssBaseline.
 */
export const ThemeConfig: FC<ThemeProps> = ( { children } ) => {
    return (
        <ThemeProvider theme={ theme }>
            <CssBaseline />
            { children }
        </ThemeProvider>
    )
}