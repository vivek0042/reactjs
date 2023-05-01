// There are mainly two things 

// 1.encryption-decryption:-
// in this we simply encrypt any password an then hacker can decrypt it easily.
// It is two way approch.

// 2.hashing:-
// In hashing encrption and decryption is possible but it's decryption is difficult.
// it is one way approch.


// bcypt is one of the strongest approch for the secure our password it have round in which it is 
// encrption done one resarch said that  4 round encryption take approx 159 days to crack the password.

// wherase 12 round bcrpt take approx >3y to dcrypt it.


const bcrypt=require("bcryptjs");

const securepassword= async(password)=>{
    const passwordhash=await bcrypt.hash(password,12);
    console.log(passwordhash);

    const matchpashword=await bcrypt.compare("vivekjain20020",passwordhash);
    console.log(matchpashword);

}

securepassword("vivekjain2002");