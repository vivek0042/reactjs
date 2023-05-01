const fs=require('fs');
fs.writeFileSync('bio.txt','Hello my dear friends');

// add more data at the end of exsiting data.

fs.appendFileSync('bio.txt','this data i have to append')

// read data without buffer

const re= fs.readFileSync('bio.txt','utf-8')
console.log(re)

// rename the file
fs.renameSync('bio.txt','bio1.txt')

// delete file

fs.unlink('bio.txt')