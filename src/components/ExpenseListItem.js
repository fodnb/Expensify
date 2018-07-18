import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, createdAt, amount}) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>{moment(createdAt).format("MMMM Do YYYY")}</p>
        <p>{amount}</p>
        
    </div>
);

export default ExpenseListItem;  