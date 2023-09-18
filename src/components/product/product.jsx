import "./product.css"
import { ReactComponent as Snowflake } from '../../assets/images/snowflake.svg'
import { ReactComponent as Elipse } from '../../assets/images/ellipse.svg'

export default function Product({ image, name, itemsCount = 10, tips = 333 }) {
    return (
        <div className='product'>
            <div className="topRow">
                <div className="leftSvg">
                    <Elipse className="elipse" fill='#000000' />
                </div>
                <div className="rightSvg">
                    <Elipse className="elipse" fill='#000000' />
                </div>
            </div>
            <img className='productImage' src={`src/assets/images/${image}`} alt='Product Item' />
            <div className='productInfo'>
                <span className='productName'>{name}</span>
                <span className="items">{itemsCount} available</span>
                <div className="tips">
                    <Snowflake fill='#000000' />
                    <span>{tips}&nbsp;TIPS</span>
                </div>
                <button className="btn">Buy</button>
            </div>
        </div>
    )
}