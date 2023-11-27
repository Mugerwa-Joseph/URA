const mongoose = require('mongoose');

// Define the schema for Asset model
const assetSchema = new mongoose.Schema({
  assetName: String,
  estimatedCost: Number,
  ownersTIN: String,
  assetType: String,
  assetNumber: String,
});

// Create the Asset model
const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;

// taxpayer model
const mongoose = require('mongoose');

const taxpayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
    validate: {
      validator: function (value) {
        // Validate that the date is not in the future
        return value <= new Date();
      },
      message: 'Date of Birth cannot be in the future',
    },
  },
  occupation: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  income: {
    type: Number,
    required: true,
  },
  tin: {
    type: String,
    required: true,
  },
});

const Taxpayer = mongoose.model('Taxpayer', taxpayerSchema);

module.exports = Taxpayer;


//income model
// IncomeTax.js

const mongoose = require('mongoose');

// Define the schema for IncomeTax model
const incomeTaxSchema = new mongoose.Schema({
  tin: {
    type: String,
    required: true,
  },
  profits: {
    type: Number,
    required: true,
  },
  taxPayable: {
    type: Number,
    required: true,
  },
});

// Create the IncomeTax model
const IncomeTax = mongoose.model('IncomeTax', incomeTaxSchema);

module.exports = IncomeTax;


//transfer model
// Transfer.js

const mongoose = require('mongoose');

// Define the schema for AssetTransfer model
const assetTransferSchema = new mongoose.Schema({
  assetNumber: String,
  assetName: String,
  currentOwner: String,
  newOwnerTIN: String,
  transferDate: { type: Date, default: Date.now },
});

// Create the AssetTransfer model
const AssetTransfer = mongoose.model('AssetTransfer', assetTransferSchema);

module.exports = AssetTransfer;

