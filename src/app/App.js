import { BrowserRouter } from "react-router-dom";
import {
  createMuiTheme,
  ThemeProvider,
  responsiveFontSizes
} from '@material-ui/core/styles';
import Routes from './Routes';

const App = ({ basename }) => {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FF4910'
      },
      secondary: {
        main: '#606060'
      },
    },
    typography: {
      h6: {
        '@media (max-width:600px)': {
          fontSize: '0.75rem',
        },
      }
    }
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme} >
      <BrowserRouter basename={basename}>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
