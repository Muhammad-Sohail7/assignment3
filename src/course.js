import React from "react";

 export const Core = (props) => {


    return(
        <React.Fragment>
            <div>

                <h1>My Name is {props.name}</h1>
                <h1>My Roll No is {props.roll}</h1>
                <h1>My Course is {props.course}</h1>
                <h1>My Batch is {props.batch}</h1>
                <h1>My PIAIC Campus is {props.institute}</h1>
            </div>
        </React.Fragment>
    )
}