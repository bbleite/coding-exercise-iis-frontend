import { useState } from "react";

function CreateAccount() {
    const [customerId, setCustomerId] = useState("")
    const [intialDeposit, setInitialDeposit] = useState("")
    const [accountTypeId, setAccountTypeId] = useState("")
    const [response, setResponse] = useState(null)

    const BASE_URL = "https://localhost:7031/api/account/open-account"

    async function handleSubmit() {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application-json" },
            body: JSON.stringify({
                customerId: Number(customerId), 
                intialDeposit: Number(intialDeposit),
                accountTypeId: Number(accountTypeId)
            })
        })

        const data = await res.json()
        setResponse(data)
    }

    return (
        <>
        <h2>Open Account</h2>
        <input type="text" value={customerId} style={{margin: "5px"}} placeholder="Customer ID" onChange={(e) => {setCustomerId(e.target.value)}} /> < br></br>
        <input type="text" value={intialDeposit} style={{margin: "5px"}} placeholder="Initial Deposit" onChange={(e) => {setInitialDeposit(e.target.value)}} /> < br></br>
        <input type="text" value={accountTypeId} style={{margin: "5px"}} placeholder="Account Type ID" onChange={(e) => {setAccountTypeId(e.target.value)}} /> < br></br>
        <button onClick={handleSubmit} style={{margin: "5px"}}>Open Account</button>

        {response && <pre>{JSON.stringify(response)}</pre>}
        </>
    )
}

export default CreateAccount