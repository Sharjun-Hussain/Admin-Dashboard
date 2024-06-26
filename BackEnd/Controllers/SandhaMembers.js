const SandhaMembers = require("../Models/SandhaMembers");
const Sandha = require("../Models/Sandha");

exports.FetchAllSandhaMembers = async (req, res, next) => {
  const Members = await SandhaMembers.find();
  const TotalMembers = Members.length;

  res.status(200).json({
    Success: true,
    Message: "Members Fetching Succesfull",
    Members,
    TotalMembers,
  });
};

exports.SearchSandhaMembers = async (req, res, next) => {
  var SearchValue = req.query.user;
  const Members = await SandhaMembers.find({
    $text: { $search: SearchValue, $caseSensitive: true },
  });
  console.log(req.query.user);
  res.status(200).json({
    Success: true,
    Message: "Fetching Succesfull",
    Members,
  });
};

exports.AddSandhaMembers = async (req, res, next) => {
  const { Name, Address, Phone, Amount, Email } = req.body;

  if (Name && Address && Phone && Amount != "") {
    try {
      const Member = await SandhaMembers.create({
        Name,
        Address,
        Phone,
        Amount,
        Email,
      });

      res.status(201).json({
        Success: true,
        Message: "Member Created Succefully",
        Member,
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

exports.DeleteSandhaMembers = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Member = await SandhaMembers.findById(id);
    if (!Member) {
      res.status(400).json({
        Success: false,
        Message: "Member Not Found",
      });
      return;
    }
    await Sandha.find({ MemberID: id }).deleteMany({ MemberID: id });

    await SandhaMembers.deleteOne({ _id: id });

    res.status(200).json({
      Success: true,
      Message: "Member Deleted Succefully",
    });
    return;
  } catch (err) {
    res.status(500).json({
      Success: false,
      Message: "Internal Server Error",
    });
  }
};

exports.UpdateSandhaMembers = async (req, res, next) => {
  const { id } = req.params;
  const { Name, Address, Phone, Amount, Email } = req.body;

  const Member = await SandhaMembers.findById(id);

  if (!Member) {
    res.status(404).json({
      Success: false,
      Message: "Member Not Found",
    });
  }
  const UpdatedMember = await SandhaMembers.findByIdAndUpdate(id, {
    Name: Name,
    Address: Address,
    Phone: Phone,
    Email: Email,
  });

  res.status(200).json({
    Success: true,
    Message: "Member Details are Updated Succefully",
    UpdatedMember,
  });
};
