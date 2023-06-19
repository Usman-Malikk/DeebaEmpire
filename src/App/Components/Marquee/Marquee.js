import { CardMedia } from '@mui/material';
import React from 'react'
import Marquee from "react-fast-marquee";
import { Images } from '../../Assets/Images';
import MarqueeCard from './MarqueeCard';
import { MarqueeText } from '../../Assets/MarqueeText';

const MarQueeComponent = () => {
    return (
        <Marquee pauseOnHover={true} >
            {MarqueeText.map((text, index) => {
                return <MarqueeCard Data={text} />
            })}
        </Marquee>
    )
}

export default MarQueeComponent