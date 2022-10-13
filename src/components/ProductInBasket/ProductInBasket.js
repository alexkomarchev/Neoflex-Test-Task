import './ProductInBasket.css'
import Delete from '../../assets/delete.svg'
import {useDispatch, useSelector} from "react-redux";
import {addProduct, removeProduct} from "../../store/slices/basket";

const ProductInBasket = ({img, title, price,id}) => {

    const dispatch = useDispatch()

    const count = useSelector(state => state.basket.product).filter(el => el.id === id)[0].count

    const product = {title, price, img,id}

    const addCount = () => {

        dispatch(addProduct(product))
    }

    const removeCount = () => {
        dispatch(removeProduct(id))

    }


    return (
        <div className='productInBasket'>
            <img className='productInBasket-delete' src={Delete} alt=""/>
            <div className='productInBasket__top'>
                <img className='productInBasket__top-img' src={img}/>
                <div>
                    <div className='productInBasket__top-title'>{title}</div>
                    <div className='productInBasket__top-price'>{price} ₽</div>
                </div>
            </div>
            <div className='productInBasket__bottom'>
                <div>
                    <button onClick={removeCount} className='productInBasket__bottom-button'>-</button>
                    <span className='productInBasket__bottom-counter'>{count}</span>
                    <button onClick={addCount} className='productInBasket__bottom-button'>+</button>
                </div>
                <div className='productInBasket__bottom-totalPrice'>{price * count} ₽</div>
            </div>
        </div>
    );
};

export default ProductInBasket;