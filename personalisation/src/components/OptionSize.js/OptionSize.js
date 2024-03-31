import styles from './OptionSize.module.scss'
import clsx from 'clsx'

const OptionSize = ({sizes, setSelectedColor, setSelectedSize, selectedColor, selectedSize}) => {



    return (
        <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
          {sizes.map((s, index) => (
             <li onClick={() => setSelectedSize(s)} key={index}><button type="button" className={clsx(selectedSize === s && styles.active)}>{s.name}</button></li>
          ))}
        </ul>
      </div>
    )
}


export default OptionSize