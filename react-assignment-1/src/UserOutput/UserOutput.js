import React from 'react';

import './UserOutput.css';
const userOutput = (props) => {
    return(
        
        <div className = "UserOP">
            <p>Username: {props.userName}</p>
            <p>Some random text</p>
        </div>

    );
};

export default userOutput;