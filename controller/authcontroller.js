const User = require('../model/user_schema');
const jwt = require('jsonwebtoken');
const { generateOTP, saveOTP, verifyOTP } = require('../utils/user_otp');

exports.sendOTP = async (req, res) => {
  const { phone } = req.body;

  if (!phone) return res.status(400).json({ error: 'Phone number required' });

  const otp = generateOTP();
  saveOTP(phone, otp);

  console.log(`OTP for ${phone}: ${otp}`); 

  res.json({ message: 'OTP sent successfully' });
};

exports.verifyOTP = async (req, res) => {
  const { phone, otp } = req.body;

  if (!phone || !otp) return res.status(400).json({ error: 'Phone and OTP required' });

  if (!verifyOTP(phone, otp)) {
    return res.status(401).json({ error: 'Invalid or expired OTP' });
  }


  let user = await User.findOne({ phone });
  if (!user) user = await User.create({ phone });

  // Generate JWT token
  const token = jwt.sign({ id: user._id, phone: user.phone }, 'jwt_token', { expiresIn: '1d' });

  res.json({ message: 'Login successful', token });
};
// insurance items
exports.getInsuranceItems = async (req, res) => {
  try {
      const items = await InsuranceItem.find();
      res.json(items);
  } catch (error) {
      res.status(500).json({ error: 'Server error' });
  }
};

// profile controller

exports.profileInfo = async (req, res) =>  {
  const requestTime = new Date();
  try {
  const responseData = {
    status: 200,
    message: "Success",
    cached: false,
    data: {
      firstName: "",
      lastName: "",
      gender: "",
      email: "",
      city: "",
      mobile: "",
      dob: "",
      isProfileData: 0
    },
    requestTime: requestTime.toISOString(),
    responseTime: new Date().toISOString(),
    timeTaken: "192ms" 
  };

  res.json({ data: responseData });
} catch (error) {
  res.status(500).json({ error: 'Server error' });
}}

 