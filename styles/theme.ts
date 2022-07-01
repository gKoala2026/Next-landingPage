
import { createTheme } from '@mui/material/styles';
import "@fontsource/Roboto"
import "@fontsource/bai-jamjuree"
import "@fontsource/Inter"

const theme = createTheme({
    palette: {
        common:{
          black:'#000',
          white:'#fff',
        },
        mode: 'light',
        primary: {
            main: '#F8FCFF',
            dark: '#222223',
            light: '#52C0FF',
            contrastText: '#222223',
        },
        secondary:{
            main:'#E15C19',
        },
        text:{
            primary: '#222223',
            secondary: '#535354'
        },
        background:{
            default:'#E5E5E5',
            paper:'#F8FCFF',
        }
    },
    typography:{
        fontFamily:'Roboto',
    },
});
export default theme