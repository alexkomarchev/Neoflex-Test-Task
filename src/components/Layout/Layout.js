import './Layout.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = ({children}) => {
    return (
        <div className='layout'>
            <div className='top'>
                <Header/>
                {children}
            </div>
            <Footer/>
        </div>
    );
};

export default Layout;