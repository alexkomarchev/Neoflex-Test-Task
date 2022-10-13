import './Product.css'
import Rating from '../../assets/rating.svg'
import {useDispatch} from "react-redux";
import {addProduct} from "../../store/slices/basket";

const Product = ({title, price, img, rate, id}) => {

    const dispatch = useDispatch()

    const product = {title, price, img, id}

    return (
        <div className='product'>
            <div className='product__image'>
                <img src={img}/>
            </div>
            <div className='product__one'>
                <div className='product__one-title'>{title}</div>
                <div className='product__one-price'>{price} ₽</div>
            </div>
            <div className='product__one'>
                <div className='product__one-rate'>
                    <img className='product__one-rate-img' src={Rating}/>
                    <div className='product__one-rate-text'>{rate}</div>
                </div>
                <button onClick={() => {
                    dispatch(addProduct(product))
                }
                } className='product__one-buy'>Купить
                </button>
            </div>
        </div>
    );
};

export default Product;