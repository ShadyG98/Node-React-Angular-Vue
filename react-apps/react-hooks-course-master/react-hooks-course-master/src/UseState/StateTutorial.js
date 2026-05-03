import React, { useState } from "react";

const StateTutorial = () => {
    const [inputValue, setInputValue] = useState("Pedro");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <input placeholder="enter something..." onChange={handleChange} />
            {inputValue}
        </div>
    );
};

export default StateTutorial;