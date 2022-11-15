import Notes from '../../../database/model';

export default async function handler  (req, res) {
    
    try{
        const deletenoteID =  req.query.deletenoteID;
       
    
        // Find the note to be deleteded and delete it
    
        let note = await Notes.findById(deletenoteID);
        if(!note){return res.status(404).send("Not found")}
    
        
        note = await Notes.findByIdAndDelete(deletenoteID)
        res.json("Success note has been deleted");
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error: Some error occured");
    }

  }