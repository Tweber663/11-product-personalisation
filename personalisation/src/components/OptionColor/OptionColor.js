import styles from './OptionColor.module.scss'
import clsx from 'clsx'

const OptionColor = ({colorArr, setSelectedColor, selectedColor}) => {
    
    return (
        <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
          <ul className={styles.choices}>
            {colorArr.map((colorClass, index) => (
              <li  onClick={() => setSelectedColor(colorClass)}  key={index}><button type="button" className={clsx(styles[colorClass], selectedColor === colorClass && styles.active)} /></li>
            ))}
          </ul>
        </div>
    )
}


export default OptionColor