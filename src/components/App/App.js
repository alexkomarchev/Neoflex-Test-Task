import './App.css';
import {Route, Routes,} from "react-router-dom";
import Main from "../../pages/Main";
import Basket from "../../pages/Basket";


function App() {
    return (
        <div className="app">
            <Routes>
                <Route path='/' element={<Main/>}/>
                <Route path='/basket' element={<Basket/>}/>
            </Routes>

        </div>
    );
}

export default App;
