const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true, "Correo Electronico es requerido"],
        unique: true,
    },
    password:{
        type:String,
        required:[true, "Contraseña es requerida"],
        unique: true,
    },
});

userSchema.pre("save", async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt)
    next();
})

userSchema.statics.login = async function (email, password){
    const user = await this.findOne({email});
    if(user){
        const auth = await bcrypt.compare(password, user.password);
        if(auth){
            return user;
        }
        throw Error("Contraseña Incorrecta");
    }
    throw Error("Correo Electronico Incorrecto");
};

module.exports = mongoose.model("Users", userSchema);