import "./product.css"
import { ReactComponent as Snowflake } from '../../assets/images/snowflake.svg'
import { ReactComponent as Elipse } from '../../assets/images/ellipse.svg'
import { Box, Typography } from '@mui/material';

export default function Product({ image, name, itemsCount = 10, tips = 333 }) {
    return (
        <Box className='product'>
            <Box className="topRow">
                <Box className="leftSvg">
                    <Elipse className="elipse" fill='#000000' />
                </Box>
                <Box className="rightSvg">
                    <Elipse className="elipse" fill='#000000' />
                </Box>
            </Box>
            <img className='productImage' src={`src/assets/images/${image}`} alt='Product Item' />
            <Box className='productInfo'>
                <Typography color="#F5F5F5" fontWeight={"bold"}>{name}</Typography>
                <Typography className="items">{itemsCount} available</Typography>
                <Box className="tips">
                    <Snowflake fill='#000000' />
                    <Box display={"flex"}>
                        <Typography color="#F5F5F5" fontWeight={"medium"} marginRight={"4px"}>{tips}</Typography><Typography color="#F5F5F5" fontWeight={"medium"}>TIPS</Typography>
                    </Box>
                </Box>
                <button className="btn">Buy</button>
            </Box>
        </Box>
    )
}