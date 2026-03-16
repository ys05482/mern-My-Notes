import express from "express";
import {
  getAllNotes,
  createNote,
  updateNote,
  deleteNote,
  getNoteById,
} from "../Controller/notesControllers.js";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

// router.get("/", (req,res) =>{
//     res.status(200).json({message: "Notes are 10 here!"});
// });

// router.post("/", (req, res) =>{
//     res.status(201).json({message: "Note created successfully!"});
// });

// router.put("/:id", (req, res) => {
//     res.status(200).json({message: "Note updated successfully!"});
// });

// router.delete("/:id", (req, res) =>{
//     res.status(200).json({message: "Note deleted successfully!"});
// });
export default router;
