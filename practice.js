const fs=require('fs');
fs.writeFileSync('index.txt','hello my dear friends');
fs.renameSync('index.txt','practise.txt')