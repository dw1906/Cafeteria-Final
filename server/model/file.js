const mongoose = require('mongoose');

const fileSchema = mongoose.Schema(
  {
    FullName: {
      type: String,
      required: true,
      trim: true
    },
    OrganisationName: {
      type: String,
      required: true,
      trim: true
    },
    EmployeeID: {
      type: String,
      required: true,
      trim:true
    },
    MobileNo: {
        type: String,
        required: true,
        trim:true
    },
    Email: {
    type: String,
    required: true,
    trim:true
    },
    Password: {
        type: String,
        required: true,
        trim:true
    },
    file_path: {
        type: String,
        required: true
      },
    file_mimetype: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);


const File = mongoose.model('File', fileSchema);

module.exports = File;