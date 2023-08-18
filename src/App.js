import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import  Navigation from "./components/Navigation"

function App() {

    return (
        <>
            <BrowserRouter>
            <Navigation />
                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="products" Component={Products}></Route>
                    <Route path="Cart" Component={Cart}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;