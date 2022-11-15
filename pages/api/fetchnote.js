import Notes from '../../database/model';

export default async function handler  (req, res) {
    
    try {
        const notes = await Notes.find()
        res.json(notes)
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server error: Some error occured");
    }
  }