import "./product.css"
import { ReactComponent as Snowflake } from '../../assets/images/snowflake.svg'
import { ReactComponent as Elipse } from '../../assets/images/ellipse.svg'
import Box from '@mui/material/Box';

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
                <span className='productName'>{name}</span>
                <span className="items">{itemsCount} available</span>
                <Box className="tips">
                    <Snowflake fill='#000000' />
                    <span>{tips}&nbsp;TIPS</span>
                </Box>
                <button className="btn">Buy</button>
            </Box>
        </Box>
    )
}