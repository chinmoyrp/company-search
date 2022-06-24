import './Search.css';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Search() {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [toSubmit, setToSubmit] = useState({});
  const navigate = useNavigate();

  function searchCompany(searchQuery) {
    if (searchQuery.length === 0) {
      setSearchResult([]);
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ search: searchQuery })
    };

    fetch('http://localhost:8080/search', requestOptions)
        .then(response => response.json())
        .then(data => setSearchResult(data));
  }

  function prepareToSubmit(data) {
    setToSubmit(data);
    setSearchResult([]);
  }

  function updateQuery(value) {
    if (toSubmit.length !== 0) {
      setToSubmit({});
    }
    setQuery(value);
  }

  function submitResult() {
    if (toSubmit.length === 0) {
        return;
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(toSubmit)
      };
  
      fetch('http://localhost:8080/companies', requestOptions)
          .then(() => navigate('/companies'));
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => searchCompany(query), 200);
    return () => clearTimeout(timeOutId);
  }, [query]);

  return (
    <div className="center-div">
      <div className="item-alignment">
          <div className="search-form">
            <input placeholder="Company..." value={toSubmit.name} onChange={event => updateQuery(event.target.value)}/>
            <button onClick={() => submitResult()}>Submit</button>
          </div>
        {
          searchResult.map((data, id) => <div key={id} className="search-result" onClick={() => prepareToSubmit(data)} ><p>{data.name}</p></div>)
        }
      </div>
    </div>
  );
}

export default Search;
