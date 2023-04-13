import React, { useState } from "react"

function PwdGenerator(){
    const[pwd, setPwd] = useState("Generate your password")

    function passwordGenerator(){
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*-_+?"
        let password = ""

        for (let i=0; i <= 8; i++){
            password += characters.charAt(Math.floor(Math.random() * characters.length))
        }
        setPwd(password)
    }

    return (
        <div>
            <p>{pwd}</p>
            <button onClick={() => navigator.clipboard.writeText(pwd)}>copy</button>
            <button onClick={passwordGenerator}>Generate</button>
        </div>
    )
}

export default PwdGenerator