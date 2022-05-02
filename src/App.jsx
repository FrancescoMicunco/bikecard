import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./Pages/HomePage.jsx";
import ItemList from "./Components/ItemList.jsx";
import ItemDetails from "./Components/ItemDetails.jsx";
import NotFound from "./Pages/NotFound.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
    return (<div className="App" >
        <BrowserRouter >
            <Routes >
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/list' element={<ItemList />} />
                <Route exact path='/detail' element={<ItemDetails />} />
                <Route exact path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    </div>
    );
}

