import styles from './OptionColor.module.scss'
import clsx from 'clsx'

const OptionColor = ({payLoad_2, colorArr, setSelectedColor, selectedColor}) => {
    
const infoPrep = (color) => {
  payLoad_2({
    color: color,
  })
}

    return (
        <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
          <ul className={styles.choices}>
            {colorArr.map((colorClass, index) => (
              <li  onClick={() => { setSelectedColor(colorClass); infoPrep(selectedColor) }}  key={index}><button type="button" className={clsx(styles[colorClass], selectedColor === colorClass && styles.active)} /></li>
            ))}
          </ul>
        </div>
    )
}


export default OptionColor