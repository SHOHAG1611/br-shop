import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import OrderReview from './components/OrderRevew/OrderReview';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home </Route>
        <Route path='/ordersreview' element={<OrderReview></OrderReview>}>OrderReview</Route>
      </Routes>
    </div>
  );
}

export default App;
