import styles from './Product.module.scss';
import { useState } from 'react';
import ProductImage from '../ProductImage/Product.image';
import ProductForm from '../ProductForm/ProductForm';

const Product = props => {

const {title, colors, sizes} = props; 

let colorArr = []

colors.forEach((e) => {
 const firstLetter = e.split('')[0].toUpperCase(); 
 const remainingLetters = e.split('').splice(1, e.length).join("");
 colorArr.push(`color${firstLetter}${remainingLetters}`)
})

const [selectedColor, setSelectedColor] = useState(colorArr[0]);
const [selectedSize, setSelectedSize] = useState(sizes[0]);
const [seleColrTshir, setSeleColrTshir] = useState('');
const [selectedTshirt, setSelectedTshirt] = useState('');


const changeColorTshirt = (e, b) => {
  setSeleColrTshir(e);
  setSelectedTshirt(b);
}

  return (
    <article className={styles.product }>
          <ProductImage selectedTshirt={selectedTshirt} selectedColor={selectedColor} selectedColorTshirt={seleColrTshir}/>
      <div>

        <ProductForm changeColorTshirt={changeColorTshirt} title={title} props={props} colorArr={colorArr} selectedColor={selectedColor}  setSelectedColor={setSelectedColor} selectedSize={selectedSize} setSelectedSize={setSelectedSize} />
      </div>
    </article>
  )
};

export default Product;