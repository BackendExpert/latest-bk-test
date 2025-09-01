const success = (res, data, message = "Success", status = 200) => {
  return res.status(status).json({ message, data });
};

const error = (res, message = "Error", status = 400) => {
  return res.status(status).json({ message });
};

module.exports = { success, error };
