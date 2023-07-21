import Navbar from './Components/Navbar';
import Dashboard from './Pages/Dashboard';
import Coins from './Pages/Coins';
import AddCoin from './Pages/AddCoin';
import EditCoin from './Pages/EditCoin';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GetCoinByIdOrName from './Pages/GetCoinByIdOrName';
const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/coins' element={<Coins />} />
                <Route path='/addCoin' element={<AddCoin />} />
                <Route path='/editCoin/:id' element={<EditCoin />} />
                <Route path='/getCoinByIdOrName' element={<GetCoinByIdOrName />} />

            </Routes>
        </Router>
    )
}

export default App