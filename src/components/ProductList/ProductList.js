import './ProductList.css'
import Product from "../Product/Product";
import {headphones} from "../../data";


const ProductList = () => {
    return (
        <div className='product_list'>
            {headphones.map((product,i) => <Product id={product.id} key={i} title={product.title} img={product.img} price={product.price} rate={product.rate} />)}
        </div>
    );
};

export default ProductList;