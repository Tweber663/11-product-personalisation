import { useState } from 'react'
import styles from './OptionSize.module.scss'
import clsx from 'clsx'

const OptionSize = ({payLoad_1, title, sizes, setSelectedColor, setSelectedSize, selectedColor, selectedSize}) => {

const [currentPrice, setCurrentPirce ] = useState(20);

const getPrice = (s) => {
    if (typeof s !== 'undefined')
    setCurrentPirce(s.additionalPrice + 20); 
}

const infoPrep = (s) => {
    const load = {
        title: title, 
        price: 20 + s.additionalPrice,
        size: s.name
    }
    payLoad_1(load)
}


    return (
        <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
        {sizes.map((s, index) => (
        <li onClick={() => { setSelectedSize(s); getPrice(s); infoPrep(s)}} 
            key={index}>
            <button type="button" className={clsx(selectedSize === s && styles.active)}>
            {s.name}
            </button>
        </li>
        ))}
        </ul>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>{currentPrice}$</span>
        </header>
      </div>
    )
}


export default OptionSize