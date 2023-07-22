import {
  Box,
  Button,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import Header from "../../Components/Header/header";
import Pricing from "../../Components/Pricing/pricing";
import SampleCard from "../../Components/SampleCard/sampleCard";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Colors } from "../../Assets/colors";
import { Images } from "../../Assets/Images";
import GetInTouch from "../../Components/GetInTouch/GetInTouch";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import Marquee from "../../Components/Marquee/Marquee";
import Slider from '../../Components/Slider/Slider'
import Trusted from "../../Components/Trusted/Trusted";
import Footer from "../../Components/Footer/footer";

function Home() {
  const animationRef = useRef(null);
  const popupRef = useRef(null);
  const pricingRef = useRef(null);
  const leftSlide = useRef(null);

  const [isIntersecting, setIsIntersecting] = useState(false);
  const [PopupAnimation, setPopupAnimation] = useState(false);
  const [PricingAnimation, setPricingAnimation] = useState(false);
  const [leftAslideAnimation, setleftAslideAnimation] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.id === "ImageSlide") {
            setIsIntersecting(true);

          }
          else if (entry.target.id === "leftAslideAnimation") {
            setleftAslideAnimation(true);
          }
          else if (entry.target.id === "pricing") {
            setPricingAnimation(true);
          } else if (entry.target.id === "features") {
            setPopupAnimation(true);
          }
        }
      });
    });
    observer.observe(pricingRef.current);
    observer.observe(animationRef.current);
    observer.observe(popupRef.current);

  }, [URL]);

  return (
    < >
      <Header />
      {/* Banner Details */}
      <Box
        className="Banner"
        sx={{
          mt: "50px",
          width: "100%",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          boxSizing: "border-box",
          gap: "30px",
        }}
      >
        <Typography
          variant="h2"
          fontWeight={"900"}
          className="tracking-in-expand"
          sx={{ textAlign: "center" }}
        >
          Deeba Empires
        </Typography>


        <Typography
          variant="p"
          className=""
          sx={{ fontSize: "22px", textAlign: "center", color: "#9ba9b4" }}
        >
          Coming Soon!{" "}
        </Typography>
        {/* Buttons */}
        <Box
          sx={{
            // marginTop: "50px",
            display: { xs: "none", md: "flex" },
            gap: "20px",
          }}
        >
          <Button
            href='#pricing'
            sx={{
              color: "rgb(93 93 255 )",
              background: "white",
              fontWeight: "700",
              padding: " 10px 30px",
            }}
          >
            Pricing
          </Button>
          <Button
            href='#getInTouch'
            sx={{
              background: "rgb(93 93 255 )",
              color: "white",
              fontWeight: "600",
              padding: " 10px 30px",
              // fontSize: "20px",
            }}
          >
            Request for Demo
          </Button>
        </Box>
        <CardMedia
          component={"img"}
          image={Images.Hero}
          sx={{ width: "70%", borderRadius: "20px", mb: "30px" }}
        />
      </Box>
      {/* Slider */}
      <div style={{ width: '100%', margin: "10px 0px", boxSizing: "border-box" }}>
        <Slider />
      </div>

      <Divider sx={{ background: "#ffffff21" }} />

      {/* Features */}
      <Box
        ref={popupRef}
        id="features"
        className={`animation ${PopupAnimation ? "fade-in-bottom " : ""}`}
        sx={{
          margin: "50px 0px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0px 40px",
          boxSizing: "border-box",
          gap: "30px",
        }}
      >
        <Typography variant="h3" fontWeight={"600"}>
          Features
        </Typography>
        <Typography variant="h6" fontWeight={"500"} mb="40px" color="#9ba9b4">
          Experience the Power of Innovation: Our Cutting-Edge Features and Services
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs="12" md='4'>
            <SampleCard />
          </Grid>
          <Grid item xs="12" md='4' >
            <SampleCard />
          </Grid>
          <Grid item xs="12" md='4' >
            <SampleCard />
          </Grid>
          <Grid item xs="12" md='4' >
            <SampleCard />
          </Grid>
          <Grid item xs="12" md='4' >
            <SampleCard />
          </Grid>
          <Grid item xs="12" md='4' >
            <SampleCard />
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ background: "#ffffff21" }} />
      {/* Features Detailed Explanation */}
      <Box
        sx={{
          margin: "50px 0px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0px 40px",
          boxSizing: "border-box",
          gap: "30px",
          overflow: "hidden",
        }}
      >
        <Box
          borderRadius={"10px"}
          sx={{
            background: " #bbf7d0",
            padding: "10px 30px",
            color: "rgb(22 163 74)",
            fontWeight: "600",
          }}
        >
          Reach goals that matter
        </Box>
        <Typography variant="h3" fontWeight={"600"}>
          One Platform, unlimited solution
        </Typography>{" "}
        <Typography variant="h6" fontWeight={"500"} mb="40px" color="#9ba9b4">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.{" "}
        </Typography>
        <Grid container spacing={10}>
          <Grid item xs="12" md='6'>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: Colors.purple,
                  fontFamily: "Architects Daughter, cursive",
                }}
              >
                More speed. Less spend
              </Typography>
              <Typography variant="h4" fontWeight={"600"}>
                Keep everything on schedule
              </Typography>
              <Typography
                variant="p"
                sx={{ color: Colors.lightgray, mb: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
            </Box>
          </Grid>
          <Grid item xs="12" md='6'
            id="ImageSlide"
            ref={animationRef}
            className={`animation ${isIntersecting ? "slide-in-right " : ""}`}
            sx={{}}
          >
            <CardMedia
              component={"img"}
              image={
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              }
            />
          </Grid>
          <Grid item xs="12" md='6'>
            <CardMedia
              component={"img"}
              image={
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              }
            />
          </Grid>
          <Grid item xs="12" md='6'>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: Colors.purple,
                  fontFamily: "Architects Daughter, cursive",
                }}
              >
                More speed. Less spend
              </Typography>
              <Typography variant="h4" fontWeight={"600"}>
                Keep everything on schedule
              </Typography>
              <Typography
                variant="p"
                sx={{ color: Colors.lightgray, mb: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
            </Box>
          </Grid>

          <Grid item xs="12" md='6'>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Typography
                sx={{
                  color: Colors.purple,
                  fontFamily: "Architects Daughter, cursive",
                }}
              >
                More speed. Less spend
              </Typography>
              <Typography variant="h4" fontWeight={"600"}>
                Keep everything on schedule
              </Typography>
              <Typography
                variant="p"
                sx={{ color: Colors.lightgray, mb: "20px" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>

              <Typography
                sx={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <CheckCircleIcon sx={{ color: "#22c55e" }} /> Keep everything on
                schedule
              </Typography>
            </Box>
          </Grid>
          <Grid item xs="12" md='6' ref={leftSlide}
            id="leftAslideAnimation"

            className={`animation ${leftAslideAnimation ? "slide-in-right " : ""}`}>
            <CardMedia
              component={"img"}
              image={
                "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
              }
            />
          </Grid>
        </Grid>
      </Box>

      <Divider sx={{ background: "#ffffff21" }} />



      {/* Tech Stack */}
      <Box>
        <Box style={{
          margin: "50px 0px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0px 40px",
          boxSizing: "border-box",
          gap: "30px",
          overflow: "hidden",
        }}>
          <Box
            borderRadius={"10px"}
            sx={{
              background: "#ff613e4a",
              padding: "10px 30px",
              color: '#ff613e',
              fontWeight: "600",
            }}
          >
            Tech Stack
          </Box>
          <Typography variant="h3" fontWeight={"600"}>
            Europe's Leading IT company.
          </Typography>
          <Typography variant="h7" fontWeight={"500"} sx={{ color: Colors.SubheadingColor }}>
            Empowering Your Digital Journey: Web, App & Custom Software Solutions by DeebaEmpire
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "30px 0px" }}
        >
          <Box
            sx={{
              width: "100%",
              borderRadius: "20px",
              display: "flex",
              justifyContent: 'center',
              gap: "40px",
              padding: "0px 40px",
              alignItems: "center"
            }}
          >
            <CardMedia
              component={"img"}
              image={
                "https://media.istockphoto.com/id/1384513137/photo/global-communication.webp?b=1&s=170667a&w=0&k=20&c=drg9zDUfpcopPsJ-UJz5NBysaUqNP-nfHUAXqDwv1go="
              }
              sx={{
                objectFit: "contain",
                width: "400px",
                boxShadow:
                  "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px",
                display: {
                  xs: "none",
                  md: "block"
                }
              }}
            />

            <Box sx={{ width: { xs: "100%", md: "40%" }, textAlign: "center", color: "gray" }}>
              <p>
                Embrace the digital revolution with DeebaEmpire's comprehensive range of services.
                Our expertise in mobile development, app innovation,
                and custom software solutions empowers businesses to thrive in the digital landscape.
                From captivating mobile apps to tailored software solutions,
                we bring your ideas to life, ensuring seamless user experiences and enhanced productivity.
              </p>
            </Box>


          </Box>
        </Box>
        {/* Cool MarQueee---> */}

        <Box>
          <Marquee />
        </Box>
      </Box >

      <Divider sx={{ background: "#ffffff21" }} />

      {/* Trusted By Section */}
      <Trusted />

      {/* Pricing */}
      <Box id="pricing"
        ref={pricingRef}
        className={`animation ${PricingAnimation ? "fade-in-bottom " : ""}`}>
        <Pricing />
      </Box>
      {/* News Letter */}
      <NewsLetter />

      <Box>
        <Box style={{
          margin: "50px 0px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0px 40px",
          boxSizing: "border-box",
          gap: "30px",
          overflow: "hidden",
        }}>
          <Box
            borderRadius={"10px"}
            sx={{
              background: "#caff0036",
              padding: "10px 30px",
              color: '#caff00',
              fontWeight: "600",
            }}
          >
            Our Pride
          </Box>
          <Typography variant="h3" fontWeight={"600"}>
            Our Client's
          </Typography>
          <Typography variant="h7" fontWeight={"500"} sx={{ color: Colors.SubheadingColor }}>
            Empowering Your Digital Journey: Web, App & Custom Software Solutions by DeebaEmpire
          </Typography>
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", margin: "30px 0px" }}
        >

        </Box>
        {/* Cool MarQueee---> */}

        <Box>
          <Marquee />
        </Box>
      </Box >


      <Divider sx={{ background: "#ffffff21" }} />
      {/* Get in Touch Section */}
      <div id='getInTouch'>
        <GetInTouch />
      </div>

      <Divider sx={{ background: "#ffffff21" }} />


      <Footer />
    </>
  );
}

export default Home;
