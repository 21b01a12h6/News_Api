import axios from 'axios'
import React, { useEffect, useState } from 'react'
const Newssearch = () => {
    const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-06-30&sortBy=publishedAt&apiKey=e5be4309195c45c1a6b15443cdf41b9a"
    const [Data, setData] = useState("")
    const fetchdata = async () => {
        await axios.get(url)
            .then((res) => {
                console.log(res.data.articles)
                setData(res.data.articles)
            })
            .catch((error) => console.error(error))
    }
    useEffect(() => {
        fetchdata();
    }, [])
    return (
        <div>
            <h1 style={{ fontSize:"50px",marginLeft : "460px" }}>New HeadLines...!</h1>
            {
                Data ? Data.map((items, index) => <div>
                    <h1 style={{ width: "800px",marginLeft : "230px" }}>{items.title}</h1>
                    <img src={items.urlToImage} style={{ width: "400px", height: "400px",marginLeft : "400px" }} alt="none" />
                    <p style={{ width: "800px",marginLeft : "230px" }}>{items.description}</p>
                    <hr style={{ marginLeft : "200px",marginRight:"200px" }}></hr>

                </div>)
                    : <h1 style={{fontSize: "100px",textAlign : "center"}}>"loading..."</h1>
            }
        </div>
    )
}
export default Newssearch