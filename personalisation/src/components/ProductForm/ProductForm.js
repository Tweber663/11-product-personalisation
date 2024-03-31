import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize.js/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = ({colorArr, props, setSelectedColor, setSelectedSize, selectedColor, selectedSize}) => {

const {sizes} = props; 



    return(
        <form>
        {/* <div className={styles.sizes}>
          <h3 className={styles.optionLabel}>Sizes</h3>
          <ul className={styles.choices}>
            {sizes.map((s, index) => (
               <li onClick={() => setSelectedSize(s)} key={index}><button type="button" className={clsx(selectedSize === s && styles.active)}>{s.name}</button></li>
            ))}
          </ul>
        </div> */}
        <OptionSize sizes={sizes} setSelectedColor={setSelectedColor} setSelectedSize={setSelectedSize} selectedColor={selectedColor} selectedSize={selectedSize}/>
        

        {/* <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
          <ul className={styles.choices}>
            {colorArr.map((colorClass, index) => (
              <li  onClick={() => setSelectedColor(colorClass)}  key={index}><button type="button" className={clsx(styles[colorClass], selectedColor === colorClass && styles.active)} /></li>
            ))}
          </ul>
        </div> */}

        <OptionColor colorArr={colorArr} setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>

        <Button className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
    )
}

export default ProductForm