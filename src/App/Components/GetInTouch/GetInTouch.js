import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";
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
            sx={{ margin: "50px 0px", gap: "30px", width: "100%" }}
        >
            <Typography variant="h3" fontWeight={"600"}>
                Get in Touch
            </Typography>
            <Typography variant="h6" fontWeight={"500"} mb="50px" color="#9ba9b4">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                officia deserunt mollit anim id est laborum.{" "}
            </Typography>

            {/* Pricing Section */}
            <Grid container>
                <Grid item xs='12' >

                    <TextField id="outlined-basic" variant="outlined" placeholder="Enter your name" sx={{
                        width: '100%', background: "none", border: "1px solid lightgray",
                        ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                            color: "lightgray !important"
                        }, ":focus": {
                            border: "1px solid lightgray"
                        }
                    }} />
                    <TextField id="outlined-basic" variant="outlined" placeholder="Enter your valid email" sx={{
                        width: '100%', background: "none", border: "1px solid lightgray",
                        ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                            color: "lightgray !important"
                        }, ":focus": {
                            border: "1px solid lightgray"
                        },
                        mt: "30px"
                    }} />
                    <TextField
                        id="filled-multiline-static"
                        multiline
                        rows={10}
                        placeholder="Enter your message"
                        variant="filled"
                        sx={{
                            color: "lightgray",
                            mt: "30px",
                            border: "1px solid lightgray",
                            width: "100%",
                            ".css-7209ej-MuiInputBase-input-MuiFilledInput-input": {
                                color: "lightgray"
                            }
                        }}
                    />
                    <div style={{ display: "flex", justifyContent: "end" }}>
                        <Button sx={{ mt: '20px', background: "rgb(93 93 255)", color: "white", padding: "10px 30px", fontWeight: "900" }}>
                            Submit
                        </Button>
                    </div>
                </Grid>

            </Grid>
        </Box>
    );
}

export default GetInTouch;
