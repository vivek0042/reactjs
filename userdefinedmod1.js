console.log("this is checking");

function avg(arr)
{
    let sum =0;
    arr.forEach(element => {
        sum+=element;
        
    });
    return sum/arr.length;

}

console.log(avg([8,9,10]));

module.exports = avg;