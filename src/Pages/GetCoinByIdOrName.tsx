import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ApiFetch from '../service/ApiCalls/request';

const GetCoinByIdOrName = () => {
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState<string>('');
    const [searchType, setSearchType] = useState<string>('id'); // Default search type is 'id'

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const coin = await fetchCoinDetails(searchType, searchValue);
        if (coin) {
            navigate(`/coins/${coin.id}`); // Redirect to the coin details page using the fetched coin's ID
        } else {
            // Handle case when the coin is not found
            alert('Coin not found!');
        }
    };

    const fetchCoinDetails = async (type: string, value: string) => {
        try {
            const response = await fetch(
                type === 'id'
                    ? ApiFetch.getCoinById + value
                    : `${ApiFetch.getCoinByName}?name=${value}`
            );

            if (response.ok) {
                return await response.json();
            } else {
                return null;
            }
        } catch (error) {
            console.error(error);
            return null;
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Form onSubmit={handleSubmit}>
                <h1 style={{ margin: '20px' }}>Get Coin by ID or Name</h1>
                <Form.Group controlId="formSearchType">
                    <Form.Label>Search By</Form.Label>
                    <Form.Control
                        as="select"
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                    >
                        <option value="id">ID</option>
                        <option value="name">Name</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formSearchValue">
                    <Form.Label>{searchType === 'id' ? 'ID' : 'Name'}</Form.Label>
                    <Form.Control
                        type="text"
                        style={{ marginBottom: '20px', maxWidth: '300px', width: '100%' }}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder={`Enter ${searchType === 'id' ? 'ID' : 'name'}`}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Get Coin
                </Button>
            </Form>
        </div>
    );
};

export default GetCoinByIdOrName;
