const axios = require('axios');
require('dotenv').config();

const USER_SERVICE_URL = process.env.USER_SERVICE_URL;

exports.verifyUser = async (userId) => {
  try {
    const response = await axios.get(`${USER_SERVICE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('User Service unavailable');
  }
};
