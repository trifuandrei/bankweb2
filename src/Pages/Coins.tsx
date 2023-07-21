import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ComplexTable from '../Components/ComplexTable';
import { useNavigate } from 'react-router-dom';
import ApiFetch from '../service/ApiCalls/request';

const Coins = () => {
    const navigate = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(ApiFetch.fetchCoins);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const handleGetCoinById = () => {
        // Implement the action for "Get Coin by ID" here
        alert('Get Coin by ID');
    };

    const handleGetCoinByName = () => {
        // Implement the action for "Get Coin by Name" here
        alert('Get Coin by Name');
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ padding: '30px' }}>Welcome to COINS</h1>
            <ComplexTable url={ApiFetch.deleteCoin} data={data} />
            <br />
            <div style={{ marginBottom: '20px' }}>
                <Button variant="primary" onClick={() => { navigate("/addCoin") }} >
                    <i className="fas fa-plus"></i> Add a new coin
                </Button>

                <Button variant="secondary" onClick={() => { navigate("/getCoinByIdOrName") }} >
                    <i className="fas fa-search"></i> Get Coin
                </Button>
            </div>
        </div>
    );
};

export default Coins;