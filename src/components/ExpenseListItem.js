import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({ id, description, createdAt, amount}) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>{createdAt}</p>
        <p>{amount}</p>
        
    </div>
);

export default ExpenseListItem;  