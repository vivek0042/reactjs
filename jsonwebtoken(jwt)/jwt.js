// jwt:-json web token

// jwt is a standard used to create acess token for application.

// the server genrate token that certifies the user identity and send its to client.\


// main use of jwt is simply that once we have login with correct id and password then it simply 
// save by client and then whenever we go to next webpage or return to same web page then also 
// we don't have to give id and password each time it give access automatically.


// 1.install jwt
const jwt = require("jsonwebtoken");

const createtoken = async()=>{
    const token =await jwt.sign({id:"any id"},"any 32 bit secreate key.");
    console.log(token);

    const userver=await jwt.verify(token,"any 32 bit secreate key.");
    console.log(userver);
}
createtoken();


// now there is one another term that is "dotenv" that is use for secure small entity.for ex.in secreate key project if
// we share in github then it known by other people also but if we don't want to know then then we use dotenv.
// env is one type of file in which we have to only write variable name and assign value to it
// without inverted comma or anything else.
// and inplace of our secreate code we use that variable name with "process.env.name of variable"