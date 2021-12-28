const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        type: {
            type: Number,
            required: true,
            default: 1
        },
        password: {
            type: String,
            required: true
        }
    },{
        timestamps: true
    }
);

userSchema.pre('save', async function(next){
    try {
        if(!this.isModified('password')) {
          return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    } catch (err) {
        return next(err);
   }
})

module.exports = mongoose.model("Users", userSchema);