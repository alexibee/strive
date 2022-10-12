import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const Shop = () => {

    return <h1>I am the Shop</h1>
  }

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Route>
    </Routes>

  );
}

export default App;
