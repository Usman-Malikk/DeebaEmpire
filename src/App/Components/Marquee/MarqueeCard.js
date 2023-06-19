import { CardMedia } from '@mui/material'
import React from 'react'
import { Images } from '../../Assets/Images'

const MarqueeCard = ({ Data }) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: "center",
            gap: "10px",
            boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            padding: "10px ",
            margin: "20px",
            borderRadius: "30px"

        }}>
            <CardMedia component={'img'} image={Data.Image} sx={{ width: "150px", objectFit: "contain", height: "150px", borderRadius: "30px" }}
            />
            <p style={{ fontSize: "15px", fontWeight: '500' }}>{Data.text}</p>
        </div>
    )
}

export default MarqueeCard