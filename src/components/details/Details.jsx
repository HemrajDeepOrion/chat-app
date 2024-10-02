import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

function Details() {
  return (
    <Grid
      sx={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Grid>
        <Grid
          sx={{
            width: "100%",
            borderBottom: "1px solid #dddddd59",
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  height: "100px",
                  width: "100px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  display: "flex",
                  justifyContent: "center",
                }}
                src="./avatar.png"
                alt=""
              />
            </Box>
            <Typography variant="h4">John Doe</Typography>
            <Typography>Lorem ipsum dolor sit amet consectetur.</Typography>
          </Box>
        </Grid>
        <Grid sx={{ padding: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Chat Settings</Typography>
              <img
                style={{
                  width: "17px",
                  height: "17px",
                  backgroundColor: "rgba(17,25,40,0.3",
                  padding: "10px",
                  borderRadius: "50%",
                }}
                src="./arrowUp.png"
                alt="1234"
              ></img>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Privacy and Help</Typography>
              <img
                style={{
                  width: "17px",
                  height: "17px",
                  backgroundColor: "rgba(17,25,40,0.3",
                  padding: "10px",
                  borderRadius: "50%",
                }}
                src="./arrowUp.png"
                alt="1234"
              ></img>
            </Box>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography>Shared Images</Typography>
                <img
                  style={{
                    width: "17px",
                    height: "17px",
                    backgroundColor: "rgba(17,25,40,0.3",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                  src="./arrowDown.png"
                  alt="1234"
                ></img>
              </Box>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNw1fDzeYGH2BFi4ufuCv2EORvqxoEMDdoA&s"
                  alt="imges"
                ></img>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  Photo_123.png
                </Typography>
              </Box>
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "rgba(17,25,40,0.3",
                  padding: "10px",
                  borderRadius: "50%",
                }}
                src="./download.png"
                alt="1234"
              ></img>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNw1fDzeYGH2BFi4ufuCv2EORvqxoEMDdoA&s"
                  alt="imges"
                ></img>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  Photo_123.png
                </Typography>
              </Box>
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "rgba(17,25,40,0.3",
                  padding: "10px",
                  borderRadius: "50%",
                }}
                src="./download.png"
                alt="1234"
              ></img>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNw1fDzeYGH2BFi4ufuCv2EORvqxoEMDdoA&s"
                  alt="imges"
                ></img>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  Photo_123.png
                </Typography>
              </Box>
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "rgba(17,25,40,0.3",
                  padding: "10px",
                  borderRadius: "50%",
                }}
                src="./download.png"
                alt="1234"
              ></img>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <img
                  style={{ width: "35px", height: "35px" }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNw1fDzeYGH2BFi4ufuCv2EORvqxoEMDdoA&s"
                  alt="imges"
                ></img>
                <Typography sx={{ fontSize: "0.85rem" }}>
                  Photo_123.png
                </Typography>
              </Box>
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "rgba(17,25,40,0.3",
                  padding: "10px",
                  borderRadius: "50%",
                }}
                src="./download.png"
                alt="1234"
              ></img>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography>Shared Files</Typography>
              <img
                style={{
                  width: "17px",
                  height: "17px",
                  backgroundColor: "rgba(17,25,40,0.3",
                  padding: "10px",
                  borderRadius: "50%",
                }}
                src="./arrowUp.png"
                alt="1234"
              ></img>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Grid
        sx={{
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          borderTop: "1px solid #dddddd59",
        }}
      >
        <Button
          sx={{
            width: "100%",
            backgroundColor: "#8B0000",
            ":hover": { backgroundColor: "#DC143C" },
            color: "white",
          }}
        >
          Block User
        </Button>
        <Button variant="contained" sx={{ width: "100%" }}>
          logout
        </Button>
      </Grid>
    </Grid>
  );
}

export default Details;
