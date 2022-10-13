import './Footer.css'
import World from '../../assets/world.svg'
import VK from '../../assets/Link/VK.svg'
import Telegram from '../../assets/Link/Telegram.svg'
import Whatsapp from '../../assets/Link/Whatsapp.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer_title'>QPICK</div>
            <div className='footer_links'>
                <div className='footer_link'>Избранное</div>
                <div className='footer_link'>Корзина</div>
                <div className='footer_link'>Контакты</div>
            </div>

            <div>
                <div className='footer__privacy'>Условия сервиса</div>
                <div className='footer__lang'>
                    <img src={World}/>
                    <div>
                        <span className='footer__lang-rus'>Рус</span>
                        Eng
                    </div>
                </div>
            </div>
            <div className='footer_icon'>
                <img className='icon' src={VK} alt="VK"/>
                <img className='icon' src={Telegram} alt="TG"/>
                <img className='icon' src={Whatsapp} alt="WA"/>
            </div>

        </div>
    );
};

export default Footer;