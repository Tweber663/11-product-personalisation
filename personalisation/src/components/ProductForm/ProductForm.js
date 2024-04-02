import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize.js/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = ({title, colorArr, props, setSelectedColor, setSelectedSize, selectedColor, selectedSize}) => {

const {sizes} = props; 
const newArr = [];



const submitBasket = (e) => {
    e.preventDefault()
    console.log(newArr);
}

const payLoad_1 = (load) => {
    newArr.push({ callback1: load });
};

const payLoad_2 = (load) => {
    newArr.push({ callback2: load });
};



    return(
        <form onSubmit={submitBasket}>
        {/* <div className={styles.sizes}>
          <h3 className={styles.optionLabel}>Sizes</h3>
          <ul className={styles.choices}>
            {sizes.map((s, index) => (
               <li onClick={() => setSelectedSize(s)} key={index}><button type="button" className={clsx(selectedSize === s && styles.active)}>{s.name}</button></li>
            ))}
          </ul>
        </div> */}
        <OptionSize payLoad_1={payLoad_1} title={title} sizes={sizes} setSelectedColor={setSelectedColor} setSelectedSize={setSelectedSize} selectedColor={selectedColor} selectedSize={selectedSize}/>
        

        {/* <div className={styles.colors}>
          <h3 className={styles.optionLabel}>Colors</h3>
          <ul className={styles.choices}>
            {colorArr.map((colorClass, index) => (
              <li  onClick={() => setSelectedColor(colorClass)}  key={index}><button type="button" className={clsx(styles[colorClass], selectedColor === colorClass && styles.active)} /></li>
            ))}
          </ul>
        </div> */}

        <OptionColor payLoad_2={payLoad_2}  colorArr={colorArr} setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>

        <Button className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
    )
}

export default ProductForm