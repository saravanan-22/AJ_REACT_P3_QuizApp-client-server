import User from "../models/User.js";
// createUser-----------------------------------------------------------------
export const createUser = (req, res) => {
  new User(req.body)
    .save()
    .then((user) =>
      res.status(201).json({
        success: true,
        message: "User created successfully",
        data: user,
      })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

// getAllUsers------------------------------------------------------------------
export const getAllUsers = (req, res) => {
  User.find()
    .then((users) =>
      res.status(200).json({
        success: true,
        message: "get request process successfully",
        data: users,
      })
    )
    .catch((err) => res.status(400).json({ success: false, message: err }));
};

// updateGkQuizPoints------------------------------------------------------------

export const updateCurrentPoints = (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  User.findByIdAndUpdate(id, {
    currentPoints: newData.currentPoints,
  })
    .then((updatedCurrentPoints) =>
      res.status(200).json({ success: true, data: updatedCurrentPoints })
    )
    .catch((err) => console.log(err));
};

// getSingleUserCurrentPoints----------------------------------------------------

export const getSingleUserCurrentPoints = (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then((user) =>
      res.status(200).json({
        success: true,
        message: "get request process successfully",
        data: user,
      })
    )
    .catch((err) => console.log(err));
};
