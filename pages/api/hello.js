import connectDB from "../../database/db";

connectDB();


export default function handler(req, res) {
    res.status(200).json({ name: 'John Doe' })
  }