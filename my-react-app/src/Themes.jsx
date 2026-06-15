 import { createTheme } from '@mui/material/styles';

 const darkGrey = '#202020';
 const white = '#ffffff';
 const skyBlue = '#1976d2';
 const lightBlue = '#8cbae8';
 const red = '#f44336';
 
 const theme = createTheme({   
    palette: {
        primary: {
            main: skyBlue, // Dark blue 
            contrastText: white, // White
        },
        secondary: {
            main: lightBlue, // Custom secondary color
            contrastText: darkGrey
        },
        accent: {
            main: red, // Custom secondary color
            contrastText: darkGrey
        },
    },
    typography: {
        main: {
            fontSize: 10
        },
        sectionHeader: {
            fontSize: 18,
            fontWeight: "bold",
            color: darkGrey 
        },
        contentHeaderText: {
            color: darkGrey            
        },
        contentText: {
            color: darkGrey 
        },
    },
    components: {
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    color: 'primary.main', // Primary text color
                    fontWeight: 500,  // Optional styling
                },
                secondary: {
                    color: "#9c27b0", // Secondary text color
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                head: {
                    backgroundColor: '#ffffff', // Blue background
                    color: '#00000',              // White text
                    fontWeight: 'bold',
                }
            }
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    color: 'secondary.main',
                    textTransform: "none",
                    fontWeight: 500,    
                    fontSize: "1rem",
                    "&.Mui-selected": {
                        color: "#708090", // Selected text color
                    },
                },
            },
        },
        MuiTableContainer: {
            styleOverrides: {
                primary: {
                    color: '#708090', // Primary text color
                    fontWeight: 900,  // Optional styling
                },
                root: {
                    color: '#708090',
                    backgroundColor: "#f5f5f5",
                    border: "1px solid #ccc",
                    borderRadius: 8,
                },
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained', // Default variant for all buttons
                disableElevation: true, // Remove shadow
            },
            styleOverrides: {
                root: {
                    backgroundColor: 'theme.palette.primary.main',
                    borderRadius: 8, // Rounded corners
                    textTransform: 'none', // Keep normal case text
                    fontWeight:"bold",
                    padding: '8px 20px',
                },
            },

        }
    }
});

export default theme;

