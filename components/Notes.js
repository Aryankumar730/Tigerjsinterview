import React, { useState, useEffect } from 'react';
import dataContext from '../Context/dataContext';
import { useContext } from 'react';
import Alert from './Alert';


export default function Notes() {

    const context = useContext(dataContext);
    const { notes, deleteNote, editNote, getNotes } = context;

    const [alert, setAlert] = useState(null);
    const [deleteID,setDeleteID] = useState(" ")
   

    const [note, setNote] = useState({
        id: "",
        fname: "",
        lname: "",
        AccountNo: "",
        BankName: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        code: ""
    })

    useEffect(() => {

        getNotes();
        

    }, [])

    function inputNote(element) {
        setNote({
            id: element._id,
            fname: element.First_name,
            lname: element.Last_name,
            AccountNo: element.Bank_Account_no,
            BankName: element.Bank_name,
            address1: element.Address_1,
            address2: element.Address_2,
            city: element.City,
            country: element.Country,
            code: element.Zip_code
        })
    }

    function handleClick(e) {
        e.preventDefault();
        if (note.fname.length == 0 || note.lname.length == 0 || note.AccountNo.length == 0 || note.BankName.length == 0 || note.address1.length == 0 || note.city.length == 0 || note.country.length == 0 || note.code.length == 0) {

            showAlert("Enter values in the required fields", 'warning', 'Sorry')

        }
        else {

            editNote(note.fname, note.lname, note.AccountNo, note.BankName, note.address1, note.address2, note.city, note.country, note.code, note.id)

            showAlert("Data has been updated successfully", 'success', 'Great')
            setNote({ id: "", fname: "", lname: "", AccountNo: "", BankName: "", address1: "", address2: "", city: "", country: "", code: "" })

        }
    }
    function onChange(e) {

        setNote({ ...note, [e.target.name]: e.target.value })
    }

    function deleteEntry(){

        deleteNote(deleteID);

        


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
        <>
            <button type="button" style={{ display: "none" }} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Enter values to be changed </h5>
                            <i type="button" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </i>
                        </div>

                        <Alert alert={alert} />

                        <div className="modal-body">
                            <form className=''>
                                <div className="mb-3" style={{ display: "flex" }}>
                                    <div className="">
                                        <label htmlFor="fname" className="form-label">First Name</label>
                                        <span className="text-danger"> *</span>
                                        <input type="text" className="form-control" id="fname" name="fname" aria-describedby="emailHelp" value={note?.fname} onChange={onChange} />
                                    </div>
                                    <div className=" px-4">
                                        <label htmlFor="lname" className="form-label">Last Name</label>
                                        <span className="text-danger"> *</span>
                                        <input type="text" className="form-control" id="lname" name="lname" value={note?.lname} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="mb-3" style={{ display: "flex" }}>
                                    <div>
                                        <label htmlFor="AccountNo" className="form-label">Account No.</label>
                                        <span className="text-danger"> *</span>
                                        <input type="text" className="form-control" id="AccountNo" name="AccountNo" aria-describedby="emailHelp" value={note?.AccountNo
                                        } onChange={onChange} />
                                    </div>
                                    <div className="px-4">
                                        <label htmlFor="BankName" className="form-label">Bank Name</label>
                                        <span className="text-danger"> *</span>
                                        <input type="text" className="form-control" id="BankName" name="BankName" value={note?.BankName} onChange={onChange} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div>
                                        <label htmlFor="address1" className="form-label">Address Line 1</label>
                                        <span className="text-danger"> *</span>
                                        <input type="text" className="form-control" id="address1" name="address1" aria-describedby="emailHelp" value={note?.address1} onChange={onChange} />
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="address2" className="form-label">Address Line 2</label>

                                        <input type="text" className="form-control" id="address2" name="address2" aria-describedby="emailHelp" value={note?.address2} onChange={onChange} />
                                    </div>

                                </div>
                                <div className="mb-3" style={{ display: "flex" }}>
                                    <div>
                                        <label htmlFor="city" className="form-label">City</label>
                                        <span className="text-danger"> *</span>
                                        <input type="text" className="form-control" id="city" name="city" aria-describedby="emailHelp" value={note?.city} onChange={onChange} />
                                    </div>
                                    <div className="px-4">
                                        <label htmlFor="country" className="form-label">Country</label>
                                        <span className="text-danger"> *</span>
                                        <input type="text" className="form-control" id="country" name="country" value={note?.country} onChange={onChange} />
                                    </div>
                                    <div className="px-1">
                                        <label htmlFor="code" className="form-label">Zip-code</label>
                                        <span className="text-danger"> *</span>
                                        <input type="text" className="form-control" id="code" name="code" value={note?.code} onChange={onChange} />
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div className="modal-footer">


                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" style={{ marginRight: "5px" }}>Close</button>
                            <button type="button" className="btn btn-primary btn-sm" onClick={handleClick}>Save changes</button>


                        </div>
                    </div>
                </div>
            </div>


            <button type="button" style={{ display: "none" }} className="btn btn-primary" data-toggle="modal" data-target="#exampleModal1">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Are you sure want to delete </h5>
                            <i type="button" data-bs-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </i>
                        </div>

                        
                        
                        <div className="modal-footer">

                            <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal" style={{ marginRight: "5px" }}>Close</button>
                            <button type="button" className="btn btn-primary btn-sm" data-bs-dismiss="modal" onClick={deleteEntry}>Delete</button>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{display: "block", margin: "auto", paddingTop: "2rem", paddingBottom:"2rem" }}>
            
                <table className="table table-striped shorttable" style={{ width:"100%",backgroundColor: "white" }}>
                    <thead>
                        <tr style={{ backgroundColor: "black", color: "white" }}>

                            <td style={{ scope: "col" }}>Name</td>
                            <td style={{ scope: "col" }}>Account No.</td>
                            <td style={{ scope: "col" }}>Bank Name</td>
                            <td style={{ scope: "col" }}>Address</td>
                            <td style={{ scope: "col" }}>Edit/Remove</td>
                        </tr>
                    </thead>
                    <tbody>

                        {notes?.map((element) => (

                            <tr key={element._id}>

                                <td style={{ padding: "15px" }}>{element.First_name
                                } {element.Last_name} </td>
                                <td style={{ padding: "15px" }}>{element.Bank_Account_no
                                }</td>
                                <td style={{ padding: "15px" }}>{element.Bank_name}</td>
                                <td style={{ padding: "15px" }}>{element.Address_1},{element.Address_2},{element.City},{element.Zip_code},{element.Country}</td>

                                <td style={{ padding: "15px" }}>
                                    <i style={{ paddingRight: "10px", cursor: "pointer" }} className="fa-sharp fa-solid fa-pen-to-square mx-2" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { inputNote(element); }}></i>

                                    <i style={{ paddingRight: "10px", cursor: "pointer" }} className="fa-solid fa-trash" onClick={() => { setDeleteID(element._id); }} data-bs-toggle="modal" data-bs-target="#exampleModal1"></i>

                                </td>

                            </tr>

                        ))}
                    </tbody>
                </table>

            </div>
        </>
    )
}
