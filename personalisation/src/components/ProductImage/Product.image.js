import styles from './Product.module.scss'

const ProductImage = () => {

    console.log(styles)
    
    return(
        <div className={styles.imageContainer}>
        <img 
          className={styles.image}
          alt="Kodilla shirt"
          src={`${process.env.PUBLIC_URL}/images/products/shirt-kodilla--black.jpg`} />
      </div>
       )
}

export default ProductImage;