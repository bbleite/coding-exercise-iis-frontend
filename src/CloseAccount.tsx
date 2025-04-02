import { useState } from "react"

const CloseAccount = () => {
    const [customerId, setCustomerId] = useState("")
    const [accountId, setAccountId] = useState("")
    const [response, setResponse] = useState(null)

    const BASE_URL = "https://localhost:7013/api/account/close-account"

    const handleSubmit = async () => {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customerId: Number(customerId), accountId: Number(accountId)})
        })

        const data = await res.json()
        setResponse(data)
    }

    return (
        <>
        <h2>Close Account</h2>
            <input type="text" value={customerId} style={{margin: "5px"}} placeholder="Customer ID" onChange={(e) => setCustomerId(e.target.value)}/> <br></br>
            <input type="text" value={accountId} style={{margin: "5px"}} placeholder="Account ID" onChange={(e) => setAccountId(e.target.value)}/> <br></br>
            <button onClick={handleSubmit} style={{margin: "5px"}}>Close Account</button>

        {response && <pre>{JSON.stringify(response)}</pre>}
        </>
    )
}

export default CloseAccount