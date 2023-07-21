import React from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

interface ComplexTableProps {
    data: Array<any>;
    url: string;
}

const ComplexTable: React.FC<ComplexTableProps> = ({ data, url }) => {
    const navigate = useNavigate();

    const onDelete = async (id: number) => {
        url += id;
        await fetch(url, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        window.location.reload();
    }

    const onEdit = () => {
        alert('Edit');
    }

    // Mock coin data
    const mockCoin = {
        id: 1,
        name: "Mock",
        description: "mock coin desc",
        deleted: false,
        when: "2023-07-20T12:03:22.247Z",
        updated: "2023-07-20T12:03:22.247Z"
    };

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr key={mockCoin.id}>
                        <td>{mockCoin.id}</td>
                        <td>{mockCoin.name}</td>
                        <td>{mockCoin.description}</td>
                        <td>
                            <button onClick={() => onDelete(mockCoin.id)} className="btn btn-danger" style={{ marginRight: '10px' }}>
                                <i className="fas fa-trash-alt"></i> Delete
                            </button>
                            <button onClick={() => { navigate(`/editCoin/${mockCoin.id}`) }} className="btn btn-primary">
                                <i className="fas fa-edit"></i> Edit
                            </button>
                        </td>
                    </tr>
                    {data.map((current: any) => (
                        <tr key={current.id}>
                            <td>{current.id}</td>
                            <td>{current.name}</td>
                            <td>{current.description}</td>
                            <td>
                                <button onClick={() => onDelete(current.id)} className="btn btn-danger" style={{ marginRight: '10px' }}>
                                    <i className="fas fa-trash-alt"></i> Delete
                                </button>
                                <button onClick={() => { navigate(`/editCoin/${current.id}`) }} className="btn btn-primary">
                                    <i className="fas fa-edit"></i> Edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ComplexTable;
