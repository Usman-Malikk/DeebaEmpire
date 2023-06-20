import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Images } from '../../Assets/Images'
import { Colors } from '../../Assets/colors'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Slide4 = () => {
    return (
        <Box style={{
            position: "relative",
            width: '100%',
            height: "100%",
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center',
            padding: "10px 0px"
        }}>

            {/* <CardMedia component={'img'} image={Images.LLCSlideBG} style={{ position: "absolute", top: "0px", left: "0px", width: "100%", height: '100%' }} /> */}

            <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", }}>
                <Box sx={{ height: "100%", display: "flex", flexDirection: "column", gap: '10px', width: "40%" }}>
                    <Typography variant='h4' sx={{ fontWeight: "700", textAlign: "start" }}>
                        <span style={{ color: Colors.SubheadingColor }}>   Incorporate </span>in USA instantly from anywhere
                    </Typography>
                    <p style={{ fontSize: "14px", textAlign: "start" }}>
                        Launch your USA-based company to get a bank account and start transacting immediately. No paperwork, tax, or legal headaches.
                    </p>
                    <Box sx={{ display: "flex", justifyContent: "start", mt: '10px', flexDirection: "column", alignItems: "start", gap: "10px" }}>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <CheckCircleOutlineIcon sx={{ color: "green" }} />
                            <p style={{ fontSize: "13px" }}>

                                Set up payroll in Dollars
                            </p>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <CheckCircleOutlineIcon sx={{ color: "green" }} />
                            <p style={{ fontSize: "13px" }}>

                                Set up payroll in Dollars
                            </p>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <CheckCircleOutlineIcon sx={{ color: "green" }} />
                            <p style={{ fontSize: "13px" }}>

                                Set up payroll in Dollars
                            </p>
                        </Box>
                        <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                            <CheckCircleOutlineIcon sx={{ color: "green" }} />
                            <p style={{ fontSize: "13px" }}>

                                Set up payroll in Dollars
                            </p>
                        </Box>

                    </Box>

                    <Button className='quotation-btn' sx={{ width: "fit-content", background: "orange", fontSize: "12px", color: "white", fontWeight: "500", mt: "20px" }}>
                        Get Quotation Now
                    </Button>
                    <p style={{ color: Colors.SubheadingColor, textAlign: 'start' }}>100% Money Back Gurantee</p>
                </Box>
                <CardMedia component={'img'} image={Images.LLcSlide1} sx={{ objectFit: "contain", width: "50%", zIndex: "999" }} />
            </Box>

        </Box>
    )
}

export default Slide4