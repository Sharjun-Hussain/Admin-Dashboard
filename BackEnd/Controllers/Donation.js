const SandhaModel = require("../Models/Sandha");
const DonationModel = require("../Models/Donations");
const AccountsModel = require("../Models/Accounts");

// Sandha/All
exports.FetchAllDonation = async (req, res, next) => {
  const Donations = await DonationModel.find();

  res.status(200).json({
    Success: true,
    Message: " Donation Details Fetching Succesfull",
    Donations,
  });
};

// Sandha/:Month
exports.FetchSpecicMonthDonationDetails = async (req, res, next) => {
  const MonthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { Month } = req.params;

  if (MonthList.includes(Month)) {
    try {
      const AllDonationDetails = await DonationModel.aggregate([
        {
          $match: { DonatedMonth: Month },
        },

        {
          $lookup: {
            from: "sandhamembers",
            localField: "MemberID",
            foreignField: "_id",
            as: "Data",
          },
        },
      ]);

      res.status(200).json({
        Success: true,
        Message: "Donation Details Fetching Successful",
        AllDonationDetails,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        Success: false,
        Message: "Internal Server Error",
      });
    }
  } else {
    res.status(400).json({
      Success: false,
      Message: "Bad Request",
    });
  }
};

// Sandha/:Month/Sum
exports.FetchSpecicMonthDonationSum = async (req, res, next) => {
  const MonthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { Month } = req.params;

  if (MonthList.includes(Month)) {
    try {
      const AllDonationDetails = await DonationModel.aggregate([
        {
          $match: { DonatedMonth: Month },
        },
        {
          $group: {
            _id: null, // Group all documents together
            TotalAmount: { $sum: "$Amount" }, // Sum the 'Amount' field
          },
        },
      ]);

      res.status(200).json({
        Success: true,
        Message: "Donation Sum  Successful",
        AllDonationDetails,
      });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({
        Success: false,
        Message: "Internal Server Error",
      });
    }
  } else {
    res.status(400).json({
      Success: false,
      Message: "Bad Request",
    });
  }
};

// Sandha/Add
exports.AddDonation = async (req, res, next) => {
  const { Name, MemberID, Amount, Category, Description } = req.body;

  if (Name && Amount && Description != null) {
    try {
      const Donation = await DonationModel.create({
        Name: Name,
        Amount: Amount,
        Description: Description,
      });

      await AccountsModel.findOneAndUpdate(
        { Name: "cash" },
        { $inc: { Balance: Amount } }
      );

      res.status(201).json({
        Success: true,
        Message: "Donation  Added Succefully",
        Donation,
      });
    } catch (err) {
      res.status(500).json({
        Success: false,
        Message: "Internal Server Error",
        err,
      });
    }
  } else {
    res.status(400).json({
      Success: false,
      Message: "Fill All The Details Correctly",
    });
  }
};

exports.DeleteDonation = async (req, res, next) => {
  try {
    const { id } = req.params;
    await DonationModel.deleteOne({ _id: id });
    res.status(200).json({
      Success: true,
      Message: `Donation of ${id} is  Deleted Succefully`,
    });
    return;
  } catch (err) {
    res.status(500).json({
      Success: false,
      Message: "Internal Server Error",
    });
  }
};

exports.UpdateDonation = async (req, res, next) => {
  const { id } = req.params;
  const { Name, Amount, Description } = req.body;

  const UpdatedDonation = await DonationModel.findByIdAndUpdate(id, {
    Name: Name,
    Amount: Amount,
    Description: Description,
  });

  res.status(200).json({
    Success: true,
    Message: "Donation Updated Succefully",
    UpdatedDonation,
  });
};
