import React from 'react'
import { Link } from 'react-router-dom'

const PageTitle = (props) => {
    return (
        <div className="wpo-page-title">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wpo-breadcumb-wrap">
                            <h2>{props.pageTitle}</h2>
                            <ol>
                                <li><Link to="/home">Home</Link></li>
                                <li>{props.pagesub}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageTitle;

