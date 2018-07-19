import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, createdAt, amount}) => (
    <div>
        <h3><Link to={`/edit/${id}`}>{description}</Link></h3>
        <p>{moment(createdAt).format("MMMM Do YYYY")}</p>
        <p>{numeral(amount/100).format("$0,0.00")}</p>
        
    </div>
);

export default ExpenseListItem;  