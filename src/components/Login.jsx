import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleLogin = () => {
    toast.success("hello");
  };

  return (
    <Grid
      sx={{
        display: "flex",
        width: "full",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Grid
        sx={{
          width: "100%",
          height: "100%",
          borderRight: "1px solid white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            width: "50%",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "1rem", color: "blue" }}>
            Welcome Back, Login
          </Typography>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: "1rem" }}
              onClick={handleLogin}
            >
              Login
            </Button>
          </form>
        </Box>
      </Grid>
      <Grid
        sx={{
          width: "100%",
          height: "100%",
          borderRight: "1px solid white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            width: "50%",
          }}
        >
          <Typography variant="h5" sx={{ marginBottom: "1rem", color: "blue" }}>
            Create an Account
          </Typography>
          <img
            style={{ width: "50px", height: "50px" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNw1fDzeYGH2BFi4ufuCv2EORvqxoEMDdoA&s"
            alt="imges"
          ></img>
          <TextField type="file" />
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <TextField
              variant="outlined"
              fullWidth
              label="Username"
              margin="normal"
              //   value={email}
              //   onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <TextField
              variant="outlined"
              fullWidth
              label="Password"
              type="password"
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: "1rem" }}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Login;
