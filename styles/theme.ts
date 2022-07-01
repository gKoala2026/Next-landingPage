
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
        text:{
            primary: '#222223',
            secondary: '#535354'
        }
    },
    typography:{
        fontFamily:'Roboto',
    },
});
export default theme