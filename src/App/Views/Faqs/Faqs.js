import React from 'react'
import Header from '../../Components/Header/header'
import { Box, Divider } from '@mui/material'
import GetInTouch from '../../Components/GetInTouch/GetInTouch'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Colors } from '../../Assets/colors';
import Footer from '../../Components/Footer/footer';


const Faqs = () => {

    const FaqsQuestion = [
        {
            question: "Question :1",
            answere: "Answere :1"
        },
        {
            question: "Question :1",
            answere: "Answere :1"
        },
        {
            question: "Question :1",
            answere: "Answere :1"
        },
        {
            question: "Question :1",
            answere: "Answere :1"
        }
    ]


    return (
        <Box sx={{ minHeight: "100vh" }}>
            <Header />

            {/* Faqs Short Details  */}
            <Box style={{
                margin: "30px 0px",
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
                        background: " #bbf7d0",
                        padding: "10px 30px",
                        color: "rgb(22 163 74)",
                        fontWeight: "600",
                        fontSize: "20px"
                    }}
                >

                    Faq's
                </Box>


            </Box>

            <div sx={{ display: "flex", flexDirection: "column", gap: '10px' }}>

                {FaqsQuestion.map((item, index) => {
                    return (
                        <div
                            style={{ marginTop: "10px" }}

                        >
                            <Accordion
                                defaultExpanded={index == 0 ? true : false}
                                sx={{ background: "rgb(0 0 0 / 20%)", color: "white", border: `1px solid white` }}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography sx={{ color: Colors.SubheadingColor }}>{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        {item?.answere}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                    )
                })}


            </div>


            {/* Get in Touch Section */}
            <div id='getInTouch'>
                <GetInTouch />
            </div>

            <Divider sx={{ background: "#ffffff21" }} />
            <Footer />
        </Box>
    )
}

export default Faqs