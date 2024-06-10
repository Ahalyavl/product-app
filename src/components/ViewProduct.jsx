import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewProduct = () => {
    const [data, changeData] = useState([])
    const fetchdata = () => {
      axios.get("https://friendsapi-re5a.onrender.com/view").then((response)=>{
        changeData(response.data)
        console.log(response.data)
      }).catch ((error)=>{
        alert.apply(error.message)
      })
    }

    useEffect(
      ()=>{fetchdata()},[]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">PRODUCT ID </th>
                                        <th scope="col">PRODUCT NAME</th>
                                        <th scope="col">Category</th>
                                        <th scope="col">PRICE</th>
                                       
                                        
                                        
                                        
                                </tr>
                            </thead>
                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>
                                            <th scope="row">{value.productId}</th>
                                            <td>{value.productName}</td>
                                            <td>{value.category}</td>
                                            <td>{value.price}</td>
                                            
                                            
                                        </tr>

                                    </tbody>
                                }
                            )}

                         </table>

                     </div>
                 </div>
             </div>

     </div>
    )
}

export default ViewProduct