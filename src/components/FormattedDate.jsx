import React from 'react';
import { format } from 'date-fns';

const FormattedDate = ({ date }) => {
    let formattedDate;
    const parsedDate = new Date(date);
    if (isNaN(parsedDate)) {
        formattedDate = 'Invalid Date';
    } else {
        formattedDate = format(parsedDate, 'MMM dd, yyyy');
    }
    return <small>{formattedDate}</small>;
};

export default FormattedDate;