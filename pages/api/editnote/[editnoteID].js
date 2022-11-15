import Notes from '../../../database/model';

export default async function handler  (req, res) {
    
    try{
        const {First_name,Last_name, Bank_Account_no, Bank_name, Address_1,Address_2, City, Country,Zip_code,id} =  req.body;

        const editnoteID =  req.query.editnoteID;
    
        // Create a new object
    
        const newNote = {};
        if(First_name){newNote.First_name=First_name};
        if(Last_name){newNote.Last_name=Last_name};
        if(Bank_Account_no){newNote.Bank_Account_no=Bank_Account_no};
        if(Bank_name){newNote.Bank_name=Bank_name};
        if(Address_1){newNote.Address_1=Address_1};
        if(Address_2){newNote.Address_2=Address_2};
        if(City){newNote.City=City};
        if(Country){newNote.Country=Country};
        if(Zip_code){newNote.Zip_code=Zip_code};
    
        // Find the note to be updated and update it
    
        let note = await Notes.findById(editnoteID);
        if(!note){return res.status(404).send("Not found")}
    
        
    
        note = await Notes.findByIdAndUpdate(editnoteID, {$set: newNote}, {new:true})
        res.json({note});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error: Some error occured");
    }
  }