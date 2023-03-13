const mongoose = require('mongoose');

const memberLoginSchema = new mongoose.Schema({
  Date: { type: Date, required: true },
  school_name: { type: String, required: true },
  Users: { type: Number, required: true },
});

const MemberLogin = mongoose.model('memberlogins', memberLoginSchema);

module.exports = MemberLogin;
