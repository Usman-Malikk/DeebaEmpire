import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Images } from '../../Assets/Images'

const Trusted = () => {
    return (
        <Box
            display={"flex"}
            justifyContent="center"
            flexDirection="column"
            alignItems={"center"}
            sx={{ margin: "50px 0px", gap: "30px" }}
        >
            <Typography variant="h3" fontWeight={"600"}>
                Trusted By
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', gap: "20px" }}>
                <CardMedia component={'img'}
                    image={Images.AwsLogo}
                    sx={{ width: { xs: "40px", md: '100px' }, borderRadius: "20px", mb: "30px" }} />
                <CardMedia component={'img'}
                    image={Images.MicrosoftPartner}
                    sx={{ width: { xs: "40px", md: '100px' }, borderRadius: "20px", mb: "30px" }} />
                <CardMedia component={'img'}
                    image={Images.GoogleRating}
                    sx={{ width: { xs: "40px", md: '100px' }, borderRadius: "20px", mb: "30px" }} />
                <CardMedia component={'img'}
                    image={Images.GoodFirms}
                    sx={{ width: { xs: "40px", md: '100px' }, borderRadius: "20px", mb: "30px" }} />
                <CardMedia component={'img'}
                    image={Images.AppFutura}
                    sx={{ width: { xs: "40px", md: '100px' }, borderRadius: "20px", mb: "30px" }} />
                <CardMedia component={'img'}
                    image={Images.DigitalBestLogo}
                    sx={{ width: { xs: "40px", md: '100px' }, borderRadius: "20px", mb: "30px" }} />
            </Box>

        </Box>
    )
}

export default Trusted