import React from "react";

function FunctionalComponent(props) {
    return(
        <div>
            <h2>Functional Component</h2>
            <p>{props.x}</p>
        </div>
    );
}

export default FunctionalComponent;