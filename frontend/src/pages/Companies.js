import './Companies.css'
import {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Companies() {
    const [companies, setCompanies] = useState([]);
    const navigate = useNavigate();

    function getCompanies() {
        fetch('http://localhost:8080/companies')
            .then(response => response.json())
            .then(data => {
                setCompanies(data)
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        getCompanies();
    }, []);
    
    return (
        <div className="center-div-companies">
            <table className="main-table">
                <thead>
                    <tr>
                        <td><b>CIN</b></td>
                        <td><b>Name</b></td>
                    </tr>
                </thead>
                <tbody>
                {
                    companies.map((data, id) => <tr key={id}><td>{data.cin}</td><td>{data.name}</td></tr>)
                }
                </tbody>
            </table>
            <br/>
            <button onClick={() => navigate('/search')}>Add Company</button>
        </div>
    )
}

export default Companies;