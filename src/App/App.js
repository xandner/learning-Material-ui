
import './App.css';
import SideMenu from "../Component/SideMenu";
import {createMuiTheme, CssBaseline, makeStyles, MuiThemeProvider} from "@material-ui/core";
import Header from "../Component/Header";
import PageHeader from "../Component/PageHeader";
import AccessibleIcon from '@material-ui/icons/Accessible';
import { ThemeProvider } from "@material-ui/styles";
import Employees from "../Pages/Employees/Employees";

const useStyle = makeStyles({
    appMain: {
        paddingLeft: '320px',
        width: '100%'
    }
})

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#135f06",
            light: "#455977"
        },
        secondary: {
            main: "#f1dddd",
            light: "#e7c658"
        },
        background:{
            default:"#d5f894"
        }
    },
    shape:{
        borderRadius:"12px"
    },
    overrides:{
        MuiAppBar:{
            root:{
                transform:'translateZ(0)'
            }
        }
    },
    MuiIconButton:{
        disableRipple:true
    }

})

function App() {
    const classes = useStyle()

    return (
        <ThemeProvider theme={theme}>
            <SideMenu/>

            <div className={classes.appMain}>
                <Header/>


                <Employees/>
            </div>

            <CssBaseline/>
        </ThemeProvider>


    );
}

export default App;
