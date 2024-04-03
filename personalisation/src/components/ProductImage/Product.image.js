import { useEffect, useState } from 'react';
import styles from './Product.module.scss'

const ProductImage = ({selectedColorTshirt, selectedColor, selectedTshirt}) => {
    const defautTshirt = selectedColor.split("").slice(5, selectedColor.length).join("").toLowerCase();
    const [colorImage, setColorImage] = useState(defautTshirt);
    
    useEffect(() => {
        setColorImage(selectedColorTshirt);
    }, [selectedColorTshirt])
    return(
        <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${selectedTshirt}--${colorImage}.jpg`} />
      </div>
       )
}

export default ProductImage;