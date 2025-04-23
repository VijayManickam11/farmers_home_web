import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Services from '../../api/Services';


const ServiceSidebar = (props) => {


    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [searchTerm, setSearchTerm] = useState('');
    const [showError, setShowError] = useState(false);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
        if (showError) {
            setShowError(false);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm.trim() === '') {
            setShowError(true);
        } else {
            setShowError(false);
            console.log('Searching for:', searchTerm);
        }
    };





    return (
        <div className="blog-sidebar">
            <div className="widget search-widget">
                <h3>Search Here</h3>
                <form 
                 onSubmit={handleSubmit}>
                    <input
                        className="form-control"
                        type="text"
                        name="search"
                        value={searchTerm}
                        onChange={handleInputChange}
                        placeholder="Search..."
                    />
                    <button type="submit">
                        <i className="ti-search"></i>
                    </button>
                </form>
                {showError && <p style={{ color: 'red' }}>Please enter a search term.</p>}
            </div>
            <div className="widget category-widget">
                <h3>Our Services</h3>
                <ul>
                    {Services.map((serv,item) => (
                        <li key={item}><Link onClick={ClickHandler} to={`/service-single/${serv.slug}`} >{serv.title}</Link></li>
                    ))}
                </ul>
            </div>
           
        </div>

    )
}

export default ServiceSidebar;


