import { Box, Button, Input, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
const NewsLetter = () => {
    return (
        <Box sx={{
            width: '100%',
            position: "relative",
            display: 'flex',
            justifyContent: "center",
            background: "#ffffff1f",
            padding: "20px 0px"

        }}>
            {/* BG Div */}
            {/* <Box sx={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                position: "absolute",
                height: '100%',
                width: '100%',
                top: "0px",
                borderRadius: "30px",
                left: '0px',
                overflow: "hidden"
            }}>
                <img src={Images.NewsLetterBg} style={{
                    height: '100%',
                    width: '100%',
                    objectFit: "cover"
                }} />

            </Box> */}
            {/* Subscription Letter */}
            <Box sx={{ zIndex: "99999", textAlign: 'center' }}>
                <h2 style={{ color: "rgb(255 153 0)", fontFamily: "Anton,sans-serif", marginTop: "10px", fontSize: '40px' }}>
                    Sign Up For News Letter
                </h2>
                <div style={{
                    display: 'flex',
                    justifyContent: "center"
                }}>

                    <p style={{ color: "white", marginTop: "10px", fontSize: "16px", width: '70%' }}>
                        Want to be the first to read our news? Subscribe to the newsletter to keep abreast of all events.
                    </p>
                </div>
                <Box mt={'40px'} sx={{ display: "flex", justifyContent: "center", gap: "10px" }}>

                    <input
                        placeholder='DeebaEmpire@gmail.com'
                        style={{
                            background: "white",
                            border: "none",
                            borderRadius: "20px",
                            padding: "13px",
                            width: '40%',
                            boxShadow: '  rgba(0, 0, 0, 0.05) 0px 0px 0px 1px'

                        }} />
                    <Button style={{ color: "rgb(255 153 0)", border: 'none', padding: "5px", borderRadius: '20px', fontWeight: "600", display: 'flex', gap: "5px" }}>
                        Subscribe <SendIcon />
                    </Button>
                </Box>
            </Box>

        </Box>
    )
}

export default NewsLetter