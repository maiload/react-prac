import React, {useState} from "react";

function ConfirmButton2(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);

    const handleClick = () => {
        setIsConfirmed((prevState) => !prevState)
    }

    return (
        <button onClick={handleClick} disabled={isConfirmed}>
            {isConfirmed ? "Confirmed" : "Confirm?"}
        </button>
    )
}

export default ConfirmButton2;