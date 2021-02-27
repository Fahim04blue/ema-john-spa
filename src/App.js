import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {ShopContext} from './ShopContext';

function App() {
  return (
    <ShopContext>
    <div >
      <Header></Header>
      <Shop></Shop>
    </div>
    </ShopContext>
  );
}

export default App;
