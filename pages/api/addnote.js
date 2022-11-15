import Notes from '../../database/model';
const { body, validationResult } = require('express-validator');

export default async function handler(req, res) {


    try {
        
        const { First_name, Last_name, Bank_Account_no, Bank_name, Address_1, Address_2, City, Country, Zip_code } = req.body;

        // If there are errors return bad request and errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Notes({
            First_name,
            Last_name,
            Bank_Account_no,
            Bank_name,
            Address_1,
            Address_2,
            City,
            Country,
            Zip_code,


        })
        const savedNote = await note.save()

        res.json(savedNote)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error: Some error occured");
    }
}