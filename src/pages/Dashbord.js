import React from "react";
import Sidebar from "../components/sidebar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import MenuIcon from "@mui/icons-material/Menu";
// import { CardActionArea } from "@mui/material";
import Stack from "@mui/material/Stack";

import Image1 from "../images/image1.png";
import Image2 from "../images/image2.png";
import Image3 from "../images/image3.png";
import Image4 from "../images/image4.png";
import "../App.css";

function Dashbord() {
  return (
    <>
      {/* <Sidebar/> */}
      <div className="bgcolor">
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1 className="textss">Analytics Overview</h1>

          <Stack direction="row" spacing={3}>
            <Card sx={{ minWidth: 280 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={Image1}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h1 className="text"> 28.7k </h1>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h3 className="text">Total followers</h3>
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 280 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={Image2}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h1 className="text"> 8.1k </h1>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h3 className="text">impressions</h3>
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 280 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={Image3}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h1 className="text"> 1.7k </h1>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h3 className="text">Total Engagement</h3>
                </Typography>
              </CardContent>
            </Card>

            <Card sx={{ minWidth: 280 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={Image4}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h1 className="text"> 1k </h1>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <h3 className="text">Conversion Rata</h3>
                </Typography>
              </CardContent>
            </Card>
          </Stack>
        </Box>
      </Box>
      </div>
    </>
  );
}

export default Dashbord;
