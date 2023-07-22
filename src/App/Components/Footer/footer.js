import { Box, Button, CardMedia, Input, TextField } from '@mui/material'
import React from 'react'
import { Images } from '../../Assets/Images'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Colors } from '../../Assets/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
    return (
        <Box sx={{ padding: "0px", paddingBottom: "50px" }}>
            <Box style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <CardMedia component={'img'} image={Images.Logo} sx={{ height: "150px", width: "150px", objectFit: "contain" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <p style={{ fontSize: "26px", fontFamily: "Abril Fatface', cursive", fontWeight: "700" }}>Deeba Empire</p>
                    <p style={{ display: "flex", gap: "10px", alignItems: "center", color: "gray", fontSize: "14px" }}> <LocationOnIcon /> A-230 Block 8 Gulistan-e-Jauhar Khi, Pakistan </p>
                    <p style={{ display: "flex", gap: "10px", alignItems: "center", color: "gray", fontSize: "14px" }}> <PhoneIcon />+92-3301898-2 </p>

                </div>
            </Box>


            <div style={{
                display: "flex",
                justifyContent: 'space-between',
                alignItems: "center"
            }}>
                <div style={{ display: "flex", gap: "30px" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", color: "gray", fontSize: "12px" }}>
                        <p >
                            Faqs
                        </p>
                        <p>
                            Contact Us
                        </p>
                        <p>
                            Our Partners
                        </p>
                        <p>
                            Tech Stack
                        </p>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", color: "gray", fontSize: "12px" }}>
                        <p>
                            Faqs
                        </p>
                        <p>
                            Contact Us
                        </p>
                        <p>
                            Our Partners
                        </p>
                        <p>
                            Tech Stack
                        </p>
                    </div>
                </div>
                {/* Right Side Footer  */}
                <div style={{ display: 'flex' }}>
                    <input id="outlined-basic" variant="outlined" placeholder="Enter your name" style={{
                        padding: "10px ", background: "none", border: `1px solid ${Colors.SubheadingColor}`,
                        width: '250px',
                        color: "white", ':focus': {
                            border: `1px solid ${Colors.SubheadingColor}`,
                        }
                    }} />
                    <button style={{
                        color: "white",
                        border: "none",
                        borderTopRightRadius: "10px",
                        borderBottomRightRadius: "10px",
                        background: 'none',
                        padding: "0px 15px",
                        cursor: "pointer",
                        fontWeight: "700",
                        background: "rgb(93 93 255)"
                    }}>
                        Send
                    </button>
                </div>
            </div>

            <div style={{ display: "flex", gap: "10px", alignItems: "center", marginTop: "30px" }}>
                <FacebookIcon sx={{ cursor: "pointer", fontSize: "40px", color: "#4267B3" }} />
                <InstagramIcon sx={{ cursor: "pointer", fontSize: "40px", color: "cd486b" }} />
                < LinkedInIcon sx={{ cursor: "pointer", fontSize: "40px", color: "#0072b1" }} />
                <TwitterIcon sx={{ cursor: "pointer", fontSize: "40px", color: "#26a7de" }} />
                <YouTubeIcon sx={{ cursor: "pointer", fontSize: "40px", color: '#CD201F' }} />
            </div>

            <div style={{ marginTop: "50px", display: "flex", justifyContent: "center", fontSize: "10px", color: 'lightgray' }}>
                <p>
                    All Right Resevered 2023
                </p>
            </div>

        </Box>
    )
}

export default Footer