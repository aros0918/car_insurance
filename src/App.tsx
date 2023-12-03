import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/reducers";
import { LandingPage, MainPage } from "./pages";

const theme = createTheme({

});

function App() {
  return (
    <>
      
      <CssBaseline />
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={ <LandingPage /> } />
                <Route path="/comparison" element={ <MainPage /> } />
              </Routes>
            </BrowserRouter>
          </Provider>
        </ThemeProvider>

      
    </>
  );
}

export default App;
