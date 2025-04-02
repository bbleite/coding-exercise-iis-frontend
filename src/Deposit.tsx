import { useState } from "react"

const Deposit = () => {
    const [customerId, setCustomerId] = useState("")
    const [accountId, setAccountId] = useState("")
    const [amount, setAmount] = useState("")
    const [response, setResponse] = useState(null)

    const BASE_URL = "https://localhost:7013/api/account/deposit"

    async function handleSubmit() {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body:
                JSON.stringify({
                    customerId: Number(customerId),
                    accountId: Number(accountId),
                    amount: Number(amount)
                })
        })

        const data = await res.json()
        setResponse(data);
    }

    return (
        <>
        <h2>Deposit</h2>
        <input type="text" value={customerId} style={{margin: "5px"}} placeholder="Customer ID" onChange={(e) => setCustomerId(e.target.value)} /> <br></br>
        <input type="text" value={accountId} style={{margin: "5px"}} placeholder="Account ID" onChange={(e) => setAccountId(e.target.value)} /><br></br>
        <input type="text" value={amount} style={{margin: "5px"}} placeholder="Amount" onChange={(e) => setAmount(e.target.value)} /><br></br>

        <button onClick={handleSubmit} style={{margin: "5px"}}>Deposit</button>

        {response && <pre>{JSON.stringify(response)}</pre>}
        </>
    )
}

export default Deposit