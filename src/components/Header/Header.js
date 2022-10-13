import './Header.css'
import Basket from '../../assets/basket.svg'
import Like from '../../assets/like.svg'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

    const countProductInBasket =  useSelector(state => state.basket.product).reduce((acc,el) => acc + el?.count,0)


    return (
        <div className='header'>
            <Link className='link' to={'/'}>
                <div className='header__name'>QPICK</div>
            </Link>
            <div className='header__icons'>
                <div className='header__icon'>
                    <div className='header__icon-counter'>
                        <span>1</span>
                    </div>
                    <img className='header__icon-like' src={Like} alt=""/>
                </div>
                <Link to={'/basket'}>
                    <div className='header__icon'>
                        {countProductInBasket !== 0 && <div className='header__icon-counter'>
                            <span>{countProductInBasket}</span>
                        </div>}
                        <img className='header__icon-basket' src={Basket}/>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Header;