import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Componenets/Home.jsx";
import Context from "./Componenets/Hooks/Context.jsx";
import LazyLoading from "./Componenets/LazyLoading.jsx";
import {lazy, Suspense} from "react";

const Login = lazy(() => import('./Componenets/Login.jsx'));
const Register= lazy(() => import('./Componenets/Register.jsx'));
const EmptyBasket= lazy(() => import('./Componenets/EmptyBasket.jsx'))

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="login" element={<Suspense fallback={<LazyLoading/>}> <Login/> </Suspense>} />
            <Route path="register" element={ <Suspense fallback={<LazyLoading />}> <Register/> </Suspense>} />
            <Route path="/eshop" element={ <Suspense fallback={<LazyLoading />}> <EmptyBasket/> </Suspense>} />
        </Routes>
      </BrowserRouter>
    </Context>

  )
}

export default App
