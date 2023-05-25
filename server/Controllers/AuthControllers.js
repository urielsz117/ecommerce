const UserModel = require("../Models/UserModel")
const jwt = require("jsonwebtoken");

const maxAge = 3*224*60*60;

const createToken = (id) =>{
    return jwt.sign({id},"SistemaEcommerce",{
        expiresIn: maxAge,
    })
};

const handleErrors = (err) => {
    let errors = {email:"", password: ""};

    if(err.message === "Correo Electronico Incorrecto") errors.email = "El correo no esta registrado";
    if(err.message === "Contraseña Incorrecta") errors.password = "La contraseña es incorrecta";

    if(err.code===11000){
        errors.email = "El correo electronico ya esta registrado";
        return errors;
    
    }

    if(err.message.includes("Validacion de ususarios fallida")){
        Object.values(err.errors).forEach(({properties}) => {
            errors[properties.path] = properties.message;
        });
    }
    return errors;
}

module.exports.register = async (req,res,next) => {
    try{
        const {email,password} = req.body;
        const user = await UserModel.create({email,password});
        const token = createToken(user._id);

        res.cookie("jwt",token,{
            withCrdentials: true,
            httpOnly: false,
            maxAge : maxAge*1000,
        });
        res.status(201).json({user:user._id,created:true})
    }catch(err){
        console.log(err);

        const errors = handleErrors(err);

        res.json({errors,created: false });
    }
};

module.exports.login = async (req,res,next) => {
    try{
        const {email,password} = req.body;
        const user = await UserModel.login(email,password);
        const token = createToken(user._id);

        res.cookie("jwt",token,{
            withCrdentials: true,
            httpOnly: false,
            maxAge : maxAge*1000,
        });
        res.status(200).json({user:user._id,created:true})
    }catch(err){
        console.log(err);

        const errors = handleErrors(err);

        res.json({errors,created: false });
    }
};