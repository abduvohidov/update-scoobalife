let submit = document.querySelector('#btnSubmit');
// let form = document.querySelectorAll('.input-form');
let fname = document.querySelector('#fname'),
    lname = document.querySelector('#lname'),
    number = document.querySelector('#number');

submit.addEventListener('click', () => {
    if(!fname.value + !lname.value + !number.value == '') {
        alert('Request sent successfully!');
    }else{
        alert('Please fill out the form!');
    }
})

console.log(submit);