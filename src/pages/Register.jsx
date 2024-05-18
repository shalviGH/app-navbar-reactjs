import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({ error: false, message: "" });

  const validateEmail = (email) => {
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setError({
        error: false,
        message: "",
      });
      console.log("Email correcto");
    } else {
      setError({
        error: true,
        message: "Formato de email Incorrecto",
      });
    }
  };
  return (
    <>
      <h1>view register</h1>
      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email"
          type="email"
          required
          variant="outlined"
          fullWidth
          helperText={error.message}
          error={error.error}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* <TextField
          id="name"
          label="Full Name"
          type="text"
          variant="outlined"
          fullWidth
          helperText="Ingrese el nombre completo"
          error={false}
        /> */}

        <Button type="submit" variant="outlined" sx={{ mt: 2 }}>
          Registrarme
        </Button>
      </Box>
    </>
  );
}
