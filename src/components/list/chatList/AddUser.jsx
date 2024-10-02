import { Box, Grid } from "@mui/material";

const AddUser = () => {
  return (
    <Grid>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 30,
          position: "fixed",
          top: 0,
          left: 0,
        }}
      >
        <Box sx={{ backgroundColor: "rgba(17,25,40,0.5)", height: "30vh" }}>
          hemraj
        </Box>
      </Box>
    </Grid>
  );
};

export default AddUser;
