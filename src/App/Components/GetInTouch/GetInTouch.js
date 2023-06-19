import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from '@mui/icons-material/Cancel';

function GetInTouch() {
    return (
        <Box
            display={"flex"}
            justifyContent="center"
            flexDirection="column"
            alignItems={"center"}
            sx={{ margin: "50px 0px", gap: "30px" }}
        >
            <Typography variant="h3" fontWeight={"600"}>
                Get In Touch
            </Typography>
            <Typography variant="h6" fontWeight={"500"} mb="80px" color="#9ba9b4">
                Let us know if you have any query our team will get back to you soon!
            </Typography>

            {/* Pricing Section */}
            <Grid container spacing={2} display='flex' justifyContent={'center'} gap='10px'>
                <Grid item xs={3} sx={{ borderRadius: "10px", border: "1px solid #ffffff21", boxShadow: " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}>
                    <Box sx={{ padding: "20px" }}>
                        <Typography variant="h5" mb="25px" fontWeight={"700"} color='rgb(93 93 255 )'>
                            Free
                        </Typography>
                        <Typography variant="h6" mb="30px">
                            Free/-
                        </Typography>

                        <Typography variant="h7">
                            Use crucial services for{" "}
                            <span style={{ color: " rgb(93 93 255 )", fontWeight: "700" }}>
                                Free
                            </span>
                        </Typography>
                        <Divider sx={{ background: "#ffffff21", margin: "10px 0px" }} />

                        <ul
                            style={{
                                listStyle: "none",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CancelIcon sx={{ color: "maroon" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CancelIcon sx={{ color: "maroon" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CancelIcon sx={{ color: "maroon" }} />1 concurrent stream
                            </li>
                        </ul>
                    </Box>
                </Grid>
                <Grid item xs={3} mt='-50px' sx={{ height: "fit-content", borderRadius: "10px", border: "1px solid #ffffff21", boxShadow: " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}>
                    <Box sx={{ padding: "20px" }}>
                        <Typography variant="h5" mb="25px" fontWeight={"700"} color='rgb(93 93 255 )'>
                            Most Recomended Package
                        </Typography>
                        <Typography variant="h6" mb="30px">
                            100$/-
                        </Typography>

                        <Typography variant="h7">
                            Use all the features with advance 24/7 helpline service services for{" "}
                            <span style={{ color: " rgb(93 93 255 )", fontWeight: "700" }}>
                                Free
                            </span>
                        </Typography>
                        <Divider sx={{ background: "#ffffff21", margin: "10px 0px" }} />

                        <ul
                            style={{
                                listStyle: "none",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                        </ul>
                    </Box>
                </Grid>
                <Grid item xs={3} sx={{ borderRadius: "10px", border: "1px solid #ffffff21", boxShadow: " rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px" }}>
                    <Box sx={{ padding: "20px" }}>
                        <Typography variant="h5" mb="25px" fontWeight={"700"} color='rgb(93 93 255 )'>
                            Silver Package
                        </Typography>
                        <Typography variant="h6" mb="30px">
                            120$/-
                        </Typography>

                        <Typography variant="h7">
                            Use crucial services for{" "}
                            <span style={{ color: " rgb(93 93 255 )", fontWeight: "700" }}>
                                Free
                            </span>
                        </Typography>
                        <Divider sx={{ background: "#ffffff21", margin: "10px 0px" }} />

                        <ul
                            style={{
                                listStyle: "none",
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                            }}
                        >
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                            <li style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                                <CheckCircleIcon sx={{ color: "#36d8d0" }} />1 concurrent stream
                            </li>
                        </ul>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default GetInTouch;
