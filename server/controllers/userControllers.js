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
    .catch((err) =>
      res.status(400).json({
        success: false,
        message: `Failed to create user: ${err.message}`,
        error: err, // Optionally include the full error object for debugging
      })
    );
};
// // getAllUsers------------------------------------------------------------------
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

// updatePreviousPoints------------------------------------------------------------

export const updatePrePoints = (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  User.findByIdAndUpdate(id, {
    previousPoint: newData.prevPoint,
  })
    .then((updatedPrePoints) =>
      res.status(200).json({ success: true, data: updatedPrePoints })
    )
    .catch((err) => console.log(err.message));
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

// updateTotalPoints------------------------------------------------------------

export const updateTotalPoints = (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  User.findByIdAndUpdate(id, { totalPoints: newData.gkTotalPoints })
    .then((updatedTotalPoints) =>
      res.status(200).json({ success: true, data: updatedTotalPoints })
    )
    .catch((err) => console.log(err.message));
};

// get previousPoints----------------------------------------
export const getPreviousPoints = (req, res) => {
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

// get totalPoints----------------------------------------
export const getTotalPoints = (req, res) => {
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

// put updateEditedUserDat---------------------------------------
export const updateUserData = (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  User.findByIdAndUpdate(id, {
    username: newData.username,
    email: newData.email,
    password: newData.password,
    ph: newData.ph,
  })
    .then((updatedData) =>
      res.status(200).json({ success: true, data: updatedData })
    )
    .catch((err) =>
      res.status(400).json({
        success: false,
        message: `Failed to create user: ${err.message}`,
        error: err, // Optionally include the full error object for debugging
      })
    );
};

// Patch updatePassword data only-------------------------------
export const updatePassword = (req, res) => {
  const { id } = req.params;
  const newPassword = req.body;
  User.findByIdAndUpdate(id, { password: newPassword.password })
    .then((updatedPassword) => res.status(200).json({success : true , data : updatedPassword}))
    .catch((err) =>
    res.status(400).json({
      success: false,
      message: `Failed to create user: ${err.message}`,
      error: err, // Optionally include the full error object for debugging
    })
  );
};
