import React, { useEffect } from 'react'
import styles from '../styles/AddData.module.css';
import { useState } from 'react';
import dataContext from '../Context/dataContext';
import { useContext } from 'react';
import Alert from './Alert';


export default function AddData() {

    const context = useContext(dataContext);
    const { addData, handleVisible } = context;
    const [alert, setAlert] = useState(null);

    const [note, setNote] = useState({ fname: "", lname: "", AccountNo: "", BankName: "", address1: "", address2: "", city: "", country: "", code: "" })



    function handleClick(e) {
        e.preventDefault();
        if (note.fname.length == 0 || note.lname.length == 0 || note.AccountNo.length == 0 || note.BankName.length == 0 || note.address1.length == 0 || note.city.length == 0 || note.country.length == 0 || note.code.length == 0) {

            showAlert("Enter values in the required fields", 'warning', 'Sorry')
        }
        else {

            addData(note.fname, note.lname, note.AccountNo, note.BankName, note.address1, note.address2, note.city, note.country, note.code)

            showAlert("Data has been updated successfully", 'success', 'Great')

            setNote({ fname: "", lname: "", AccountNo: "", BankName: "", address1: "", address2: "", city: "", country: "", code: "" })
        }
    }

    function onChange(e) {

        setNote({ ...note, [e.target.name]: e.target.value })
    }

    function showAlert(message, type, header) {
        setAlert({
            msg: message,
            type: type,
            header: header,
        })
        setTimeout(() => {
            setAlert(null)

        }, 5000);
    }



    return (
        <div className={styles.container}>
            <div className="container-fluid px-1 mx-auto">
                <div className="row d-flex justify-content-center">
                    <div className="col-xl-7 col-lg-8 col-md-9 col-11 ">


                        <div className={styles.card}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <div>
                                    <h5 className="text-center mb-4">Enter your Bank Details</h5>


                                </div>


                                <div><i className="fa-sharp fa-solid fa-xmark" onClick={() => { handleVisible() }} style={{ cursor: "pointer", }}></i></div>


                            </div>
                            <Alert alert={alert} />


                            <form className="form-card pt-3">
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className={`${styles.form} `}>First name
                                            <span className="text-danger"> *</span></label>
                                        <input className={styles.inputClass} type="text" id="fname" name="fname" placeholder="Enter your first name" onChange={onChange}  value={note?.fname}/>
                                    </div>
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label">Last name
                                            <span className="text-danger"> *</span></label>
                                        <input className={styles.inputClass} type="text" id="lname" name="lname" placeholder="Enter your last name" onChange={onChange} value={note?.lname}/>
                                    </div>
                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label ">Bank Account No.<span className="text-danger"> *</span></label>
                                        <input className={styles.inputClass} type="text" id="AccountNo" name="AccountNo" placeholder="Enter your Account Number" onChange={onChange} value={note?.AccountNo}/>
                                    </div>
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label ">Bank Name<span className="text-danger"> *</span></label>
                                        <input className={styles.inputClass} type="text" id="BankName" name="BankName" placeholder="Enter your Bank Name" onChange={onChange} value={note?.BankName}/>
                                    </div>
                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label ">Address Line 1<span className="text-danger"> *</span></label>
                                        <input className={styles.inputClass} type="text" id="address1" name="address1" placeholder="Your address" onChange={onChange} value={note?.address1}/>
                                    </div>

                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-6 flex-column d-flex">
                                        <label className="form-control-label ">Address Line 2<span className="text-danger"></span></label>
                                        <input className={styles.inputClass} type="text" id="address2" name="address2" placeholder="" onChange={onChange} value={note?.address2}/>
                                    </div>


                                </div>
                                <div className="row justify-content-between text-left">
                                    <div className="form-group col-sm-4 flex-column d-flex">
                                        <label className="form-control-label ">City<span className="text-danger"> *</span></label>
                                        <input className={styles.inputClass} type="text" id="city" name="city" placeholder="Enter city name" onChange={onChange} value={note?.city}/>
                                    </div>
                                    <div className="form-group col-sm-4 flex-column d-flex">
                                        <label className="form-control-label ">Country<span className="text-danger"> *</span></label>
                                        <input className={styles.inputClass} type="text" id="country" name="country" placeholder="Enter country name" onChange={onChange} value={note?.country}/>
                                    </div>
                                    <div className="form-group col-sm-4 flex-column d-flex">
                                        <label className="form-control-label ">Zip Code<span className="text-danger"> *</span></label>
                                        <input className={styles.inputClass} type="text" id="code" name="code" placeholder="Enter zip code" onChange={onChange} value={note?.code}/>
                                    </div>
                                </div>

                                <div className="row justify-content-end">
                                    <div className="form-group ">
                                        <button type="submit" className={`btn-block btn-primary ${styles.btnClick}`} onClick={(e) => { handleClick(e)}} >Submit </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
