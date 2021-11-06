//combining text.js and model
//creating a text service class here. Without constructor
const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');


module.exports = class OrderService {
  static async createOrder(name, status, date) {
    await sendSms(

    );
  }
};
