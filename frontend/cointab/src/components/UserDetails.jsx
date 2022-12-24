import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
const UserDetails = ({data}) => {
    const [page,setPage]=useState(data);
    const [pageno,setpageno]=useState(1)

    useEffect(()=>{
        setPage(data.slice((pageno-1) * 4,pageno*4));
    },[pageno])

    const filtercountrydata = (e)=>{
        console.log(e.target.value)
        let filterData = data.filter((elem)=>{
            elem.location.country ===  e.target.value
        })
        console.log(filterData)
        setPage(filterData)
    }
  return (
    <div>
      <label>Filter By Country</label>
      <select onChange={filtercountrydata}>
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="United State">United State</option>
        <option value="Mexio">Mexio</option>
        <option value="France">France</option>
        <option value="Canada">Canada</option>
        <option value="Norway">Norway</option>
        <option value="Australia">Australia</option>
        <option value="Spain">Spain</option>
        <option value="Ireland">Ireland</option>
        <option value="Finland">Finland</option>
      </select>
      <br></br>
      <br></br>

      <table className={styles.tablediv}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Image</th>
            <th className={styles.th}>Name</th>
            <th className={styles.th}>Gender</th>
            <th className={styles.th}>Email</th>
            <th className={styles.th}>Cell</th>
            <th className={styles.th}>City</th>
            <th className={styles.th}>country</th>
          </tr>
        </thead>

        <tbody>
          {!page ? (
            <h1>Loading...</h1>
          ) : (
            page.map((elem, index) => (
              <tr className={styles.tr} key={index}>
                <td className={styles.td}>
                  <img
                    style={{ borderRadius: "5px" }}
                    src={elem.picture.large}
                    alt={elem.name.first}
                  />
                </td>
                <td className={styles.td}>
                  {elem.name.title} {elem.name.first} {elem.name.last}
                </td>
                <td className={styles.td}>{elem.gender}</td>
                <td className={styles.td}>{elem.email}</td>
                <td className={styles.td}>{elem.cell}</td>
                <td className={styles.td}>{elem.location.city}</td>
                <td className={styles.td}>{elem.location.country}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <br></br>
      <br />

      <div className={styles.paginationdiv}>
        <button
          className={styles.pagination_btn}
          disabled={pageno == 1}
          onClick={() => setpageno(pageno - 1)}
        >
          Prev
        </button> 
        <span className={styles.span}> {pageno}</span>
        <button
          className={styles.pagination_btn}
          disabled={pageno * 5 == data.length}
          onClick={() => setpageno(pageno + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default UserDetails