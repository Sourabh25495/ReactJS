import React from 'react'


const validation = (props) => {

    let validationMessge = 'Text Long Enough '

    if(props.inputLength <=5){
        validationMessge = 'Text too short'
    }
    return(

    <div>
       <p>{validationMessge}</p>
    </div>
    )
}

export default validation