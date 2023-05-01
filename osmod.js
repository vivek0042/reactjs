const os=require('os');
const data = os.arch();
console.log(data);

// to see freememory in system.

const freememory = os.freemem();
console.log(`${freememory/1024/1024/1024}`);

// to see total memory

const totalmemory=os.totalmem();
console.log(`${totalmemory/1024/1024/1024}`)
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.type());