import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
import styles from "./style.module.css"

const HomePage = ({data,setData}) => {
    const [loading,setloading]=useState(false)
    const navigate = useNavigate()

    const getDatafrbac = async ()=>{
        let dadaArr = [];
        for(let i=0;i<60;i++){
            let result = await fetch(
              "https://backend-assignment-cointab.onrender.com/fetch"
            );

            let data = await result.json();
            dadaArr.push(data)
        }
        console.log(dadaArr)
    }
 const fetchData = async ()=>{
    setloading(true)
    let user = await getDatafrbac();
    console.log(user)
    setloading(false)
 };

 const userDetail = () =>{
    navigate("/details")
 };

 const deleteData = ()=>{
    setData([]);
    alert("data deleted ? ")
 };

  return (
    <div>
      <div className={styles.main}>
        <button className={styles.fetch} onClick={fetchData}>FETCH</button>
        <button className={styles.delete} onClick={deleteData}>DELETE</button>
        <button className={styles.fetch} onClick={userDetail} >DETAILS</button>
      </div>
      <h3>{loading && "Loding data....."}</h3>
    </div>
  );
}

export default HomePage