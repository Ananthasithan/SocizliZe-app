const userSchema = {
    userName:{
        type:String,
        require: true
    },
    emailId:{
        type:String,
        require:true,
        match: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    },
    password:{
        type:String,
        required:true,
        min:8
    },
    profilePic:{
        type:String,
        default:""
    },
    coverPic:{
        type:String,
        default:""
    },
    followers:{
        type:[String],
        default:[]
    },
    following:{
        type:[String],
        default:[]
    },
    admin:{
        type:Boolean,
        default:false
    }
}

module.exports = userSchema;


