import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import OptionSize from '../OptionSize.js/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import { useState } from 'react';

const ProductForm = ({changeColorTshirt, title, colorArr, props, setSelectedColor, setSelectedSize, selectedColor, selectedSize}) => {


const {sizes} = props; 
const newArr = [];
const [load1, setLoad1] = useState({
    Name: title,
    Price: 20, 
    Size: "S", 
});


const [load2, setLoad2] = useState({
    Color: colorArr[0].split("").slice(5, colorArr[0].length).join(""),
});

const submitBasket = (e) => {
    e.preventDefault()
    const payLoad = {
        ...load1, 
        ...load2 
    }
    console.log(payLoad)
}

const payLoad_1 = ({Name, Price, Size}) => {
    setLoad1({
       Name, 
       Price, 
       Size, 
    })
};

const payLoad_2 = ({Color}) => {
    let newColor = Color.split("").slice(5, Color.length).join("")
    setLoad2({
        Color: newColor,  
    })
};
changeColorTshirt(load2.Color.toLowerCase(), props.name)



    return(
        <form onSubmit={submitBasket}>
  
        <OptionSize payLoad_1={payLoad_1} title={title} sizes={sizes} setSelectedColor={setSelectedColor} setSelectedSize={setSelectedSize} selectedColor={selectedColor} selectedSize={selectedSize}/>

        <OptionColor payLoad_2={payLoad_2}  colorArr={colorArr} setSelectedColor={setSelectedColor} selectedColor={selectedColor}/>

        <Button className={styles.button}>
          <span className="fa fa-shopping-cart" />
        </Button>
      </form>
    )
}

export default ProductForm