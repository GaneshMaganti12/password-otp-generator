import React, { useState } from "react"

function PwdGenerator(){
    const[otp, setOtp] = useState("Generate otp")

    function passwordGenerator(){
        const characters = "1234567890"
        let otpDigits = ""

        for (let i=0; i < 6; i++){
            otpDigits += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        setOtp(otpDigits)
    }

    return (
        <div>
            <button onClick={passwordGenerator}>Generate</button>
            <p>{otp}</p>
            <button onClick={() => navigator.clipboard.writeText(otp)}>copy</button>
        </div>
    )
}

export default PwdGenerator