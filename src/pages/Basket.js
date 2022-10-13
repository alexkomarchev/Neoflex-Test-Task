import './Basket.css'
import Layout from "../components/Layout/Layout";
import ProductInBasket from "../components/ProductInBasket/ProductInBasket";
import {useSelector} from "react-redux";

const Basket = () => {

    const product = useSelector(state => state.basket.product)

    console.log(product)

    const totalPrice = product.reduce((acc, el) => acc + el?.price * el?.count, 0)

    return (
        <Layout>
            <div className='title'>Корзина</div>
            <div className='main'>
                <div>
                    {(product.length) ? product.map((el) => <ProductInBasket id={el.id} title={el.title} img={el.img}
                                                                             price={el.price} key={el.id}/>) :
                        <div>Вы еще не добавили товары в корзину</div>}
                </div>
                <div className='makeOrder'>
                    <div className='makeOrder__price'>
                        <div className='makeOrder__price-title'>ИТОГО</div>
                        <div className='makeOrder__price-count'>₽ {totalPrice}</div>
                    </div>
                    <button className='makeOrder-button'>Перейти к оформлению</button>
                </div>
            </div>
        </Layout>
    );
};

export default Basket;