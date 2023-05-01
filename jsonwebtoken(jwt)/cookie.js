// we use cookie to store data.
// with the help of cookie we can simply store data
// as well as expire time and which type of request can be set.
// this is also easy to use but i cannot write code for that if anytime you want code for
// that then we can easily get from thapa video number 81.

// this is simple code written here.

re.cookie("jwt",token,{
    expires:new Date(Date.now()+50000),
    httpOnly:true,     
})



// we also use cookie-parser to check the coojie is proper or not.
// means accurate or not. 