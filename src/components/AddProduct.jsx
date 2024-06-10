import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddProduct= () => {
    const [data, setData] = useState({
        productId: "",
        productName:"",
        category:"",
        price:""
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const readValue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status ==  "success") {
                    alert("Successfully Added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                alert.apply(error.message)
              }
        )

    }
    
    return (
        <div>
            <Navbar />
            <h1><center>PRODUCT APP</center></h1>
            
            
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="fname" className="form-label">PRODUCT ID</label>
                                <input type="text" className="form-control" name='productId' value={data.productId} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="lname" className="form-label">PRODUCT NAME</label>
                                <input type="text" className="form-control" name='productName' value={data.productName} onChange={inputHandler} />
                            </div>
                            
                            
                            <div className="col col-12">
                                <label htmlFor="" className="form-label">CATEGORY</label>
                                <select name='' className="form-control" value={data.category} onChange={inputHandler}>
                                    <option value="">Select Category</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Clothing and Accessorie">Clothing and Accessories</option>
                                    <option value="Home and Kitchen">Home and Kitchen</option>
                                    <option value="Beauty and Health">Beauty and Health</option>
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="mob" className="form-label">PRICE</label>
                                <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler} />
                            </div>
                           
                            <div className="col col-12 col-sm-12">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProduct