import React from "react"

const ButtonSubmit = ({buttonText, handleSubmit}) => {
    return (
        <>
            <button onClick={handleSubmit}>{buttonText}</button>
        </>
    )
};

export default ButtonSubmit
