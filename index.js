const value=document.getElementById('counter');

function increment(){
    let value2=parseInt(value.innerText);
    value2=value2+1;
    value.innerText=value2;
};

function decrement(){
    let value2=parseInt(value.innerText);
    value2=value2-1;
    value.innerText=value2;
};
/*
const countValue = document.getElementById('counter');

function increment(){
    // get the vlue from UI
    let value = parseInt(countValue.innerText);
    //Update the value
    value = value + 1;
    //set the value onto UI
    countValue.innerText = value;
};


function decrement(){
        // get the vlue from UI
        let value = parseInt(countValue.innerText);
        //Update the value
        value = value - 1;
        //set the value onto UI
        countValue.innerText = value;
};
*/