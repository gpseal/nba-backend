
import Record from "../models/records.js";
// import { records } from "../data.js";

// record => success: true, data:  array of objects from data.js
const getRecords = async (req, res) => {
  try {
    const records = await Record.find({});

    res.status(200).json({ success: true, data: records });  //once promise is fulfilled, return success message

  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while getting all records",  //show if promise not fulfilled
    });
  }
};


const getRecordsID = (req, res) => {
  const { id } = req.params;
  // /records/1      requests specific id to update

  const record = records.find(  //find section to send
    (record) => record.id === Number(id)
  );

  // Check if record does exist
  if (!record) {
    return res
      .status(404)
      .json({ success: false, msg: `No record with the id ${id}` });
  }

  res.status(200).json({success: true, data: record});

};


const createRecord = async (req, res) => {
  try {
    await Record.create(req.body);

    const newRecords = await Record.find({});

    res.status(201).json({ success: true, data: newRecords });
  } catch (err) {
    res.status(500).json({
      msg: err.message || "Something went wrong while creating an record",
    });
  }
};


  
  const updateRecord = async (req, res) => {
    try {
      const { id } = req.params;
      const record = await Record.findByIdAndUpdate(id, req.body); //find section to update
  
      // Check if record does exist, return fail message if not
      if (!record) {
        return res.status(404).json({
          success: false,
          msg: `No record with the id ${id}`,
        });
      }
  
      const newRecords = await Record.find({});
      res.status(200).json({ success: true, data: newRecords });

    } catch (err) {  //display error if something went wrong
      res.status(500).json({
        msg: err.message || "Something went wrong while updating an record",
      });
    }
  };

  
  const deleteRecord = async (req, res) => {
    try {
      const { id } = req.params;
      const record = await Record.findByIdAndRemove(id);
  
      if (!record) {
        return res.status(404).json({
          success: false,
          msg: `No record with the id ${id}`,
        });
      }
  
      const newRecords = await Record.find({});
      return res.status(200).json({ success: true, data: newRecords });
    } catch (err) {
      res.status(500).json({
        msg: err.message || "Something went wrong while deleting an record",
      });
    }
  };


  export {
    getRecords,
    getRecordsID,
    createRecord,
    updateRecord,
    deleteRecord,
  };