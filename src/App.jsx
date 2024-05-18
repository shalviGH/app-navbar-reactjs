// // import './App.css'

// import { Button } from "@mui/material";
import { Container, Button, Typography, Box, Grid } from "@mui/material";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
// import Button from "@mui/material/Button"
// import Product from "./components/Product";
// import BluuCard from "./components/BluuCard";
// import { useState } from "react"
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

// import MenuIcon from "@mui/icons-material/Menu";
import DraftIcon from "@mui/icons-material/Inbox";
import InboxIcon from "@mui/icons-material/Drafts";
import HomeIcon from "@mui/icons-material/Home";

const navArrayLinks = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    title: "Login",
    path: "/Login",
    icon: <HomeIcon />,
  },
  {
    title: "Register",
    path: "/Register",
    icon: <InboxIcon />,
  },
];

export default function App() {
  return (
    <>
      {/* // <Container sx={{ border: 2, boxShadown: 2, pb: 5 }}> */}
      <Navbar navArrayLinks={navArrayLinks} />

      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        {/* <BluuCard /> */}
        {/* <Product /> */}
        {/* 137111102688601727 */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              magnam vero sapiente inventore blanditiis hic odit quia voluptatum
              ab. Quod architecto eos sunt earum perspiciatis tempore cum
              reiciendis accusamus consectetur?
            </p>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              magnam vero sapiente inventore blanditiis hic odit quia voluptatum
              ab. Quod architecto eos sunt earum perspiciatis tempore cum
              reiciendis accusamus consectetur?
            </p>
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              magnam vero sapiente inventore blanditiis hic odit quia voluptatum
              ab. Quod architecto eos sunt earum perspiciatis tempore cum
              reiciendis accusamus consectetur?
            </p>
          </Grid>
        </Grid>
        <h1>App</h1>
        <Typography
          variant="h4"
          component="h1"
          mb={2}
          align="center"
          color="primary"
        >
          Hola como estas este es la dib web
        </Typography>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button
          variant="contained"
          color="warning"
          startIcon={<AddIcCallIcon />}
        >
          Warning
        </Button>
        <Button variant="contained" color="primary" endIcon={<ModeEditIcon />}>
          Primary
        </Button>
        <Box
          sx={{
            border: 2,
            p: 5,
            borderColor: "peru",
            bgcolor: "red",
            color: "white",
          }}
          component={"span"}
        >
          darksite es un sitio web de hacking
        </Box>
        <h1 className="text-center text-5xl font-extrabold">darksite q3e</h1>
      </Container>
    </>
  );
}

// function App() {

//   // const [number, setNumber ] = useState(0)

//   // const sumar = ()=>{
//   //   setNumber(number+1)
//   //   console.log(number)
//   // }
//   // const restar = ()=>{
//   //   setNumber(number-1)
//   //   console.log(number)
//   // }

//   const [name, setName] = useState('')

//   const getName = (event)=>{
//    const  value = event.target.value
//    setName(value)
//     // console.log(event.target.value)
//   }

//   return (
//     <>
//         <div>
//             <input type="text" onChange={event=>getName(event)} placeholder="Ingrese un nombre" />
//             <p>{name}</p>
//         </div>
//     </>
//     )

// }

// export default App
