import React from 'react';
import { useState } from "react";
import dataContext from './dataContext';

function DataState(props) {

    const host = 'http://localhost:3000';

    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)
   

    const [visible, setVisible] = useState(false)

    function handleVisible() {

        setVisible(!visible)

    }

    async function database() {

        //Making the API call to add note
        const response = await fetch(`${host}/api/hello`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },


        });
        
    }

    async function getNotes() {

        //Making the API call to add note
        const response = await fetch(`${host}/api/fetchnote`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',

            },


        });
        const jsonall = await response.json();
        console.log(jsonall);
        setNotes(jsonall)

    }


    async function addData(First_name, Last_name, Bank_Account_no, Bank_name, Address_1, Address_2, City, Country, Zip_code) {

        //Making the API call to add note
        const response = await fetch(`${host}/api/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ First_name, Last_name, Bank_Account_no, Bank_name, Address_1, Address_2, City, Country, Zip_code })

        });
        
        const note = await response.json();
        setNotes(notes.concat(note))

    }

    async function deleteNote(id) {

        //Making the API call to delete

        const response = await fetch(`${host}/api/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',

            },


        });
        const json = await response.json();
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)


    }

    //Edit a note
    async function editNote(First_name, Last_name, Bank_Account_no, Bank_name, Address_1, Address_2, City, Country, Zip_code, id) {

        //Making the API call to edit

        const response = await fetch(`${host}/api/editnote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ First_name, Last_name, Bank_Account_no, Bank_name, Address_1, Address_2, City, Country, Zip_code })

        });
        const json1 = await response.json();
        console.log(json1);


        // Logic to edit in the client
        let newNotes = JSON.parse(JSON.stringify(notes))
        // let newNotes = json1;

        newNotes.forEach((element) => {
            if (element._id === id) {

                element.First_name = First_name;
                element.Last_name = Last_name;
                element.Bank_Account_no = Bank_Account_no;
                element.Bank_name = Bank_name;
                element.Address_1 = Address_1;
                element.Address_2 = Address_2;
                element.City = City;
                element.Country = Country;
                element.Zip_code = Zip_code;

            }

        })
        console.log(notes);
        setNotes(newNotes)

    }

    



    return (
        <dataContext.Provider value={{ notes, addData, getNotes, deleteNote, editNote, handleVisible, visible, setVisible, setNotes, database }}>
            {props.children}
        </dataContext.Provider>

    )
}

export default DataState;
