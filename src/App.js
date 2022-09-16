import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import NotFound from './component/Not Found/NotFound';
import OrderReview from './component/Order Review/OrderReview';
import PlaceOrder from './component/PlaceOrder/PlaceOrder';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/' element={<Shop/>}/>
        <Route path='/orders' element={<OrderReview/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/placeorder' element={<PlaceOrder/>}/>
        <Route path='*' exact={true} element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
