// import React from 'react'
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Unstable_Grid2';
// import Container from '@mui/material/Container';
import SlideStore from './page/SlideStore'
import ProductStore from './page/ProductStore';
import Header from './components/Header'

import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/store-game" exact element={<Layout />}></Route>
        <Route path="/store-game/login" element={<Login />}></Route>
        <Route path="/store-game/register" element={<Register />}></Route>
       
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </BrowserRouter>
  );
}

const Layout = () => {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "cover.bg1",
        }}
      >
        {/*  --- Header ---  */}
        <Header />
        {/*  ---- Body ---- */}
        <Box
          sx={{
            width: "100%",
          }}
        >
          <SlideStore />
          <ProductStore />
          <ProductStore />
          <ProductStore />
          <ProductStore />
        </Box>
  
        {/*  ---- Footer ---- */}
        <Box sx={{ padding: "50px 0" }}>
          <Box
            sx={{
              bgcolor: "cover.bg4",
              height: "300px",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Đây là phần footer chưa kịp viết !! thông cảm !!
          </Box>
        </Box>
      </Box>
    );
  }
export default App;
