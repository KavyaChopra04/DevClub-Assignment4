console.log("Moodle+ successfully loaded!");
const login_element = document.getElementById('login'); // Fill the selector for the login element in ""
let login_text = login_element.innerText;
let arr=login_text.split('\n')
let question = arr[3]; // Use split and array operations on the login_text string to extract the question
let answer = "";
let arr1=question.split(' ')
if(question.includes('second'))
{
    let num2=parseInt(arr1[6]);
    answer=num2;
}
if(question.includes('first'))
{
    let num1=parseInt(arr1[4]);
    answer=num1;
}
if(question.includes('add'))
{
    let num1=parseInt(arr1[2]);
    let num2=parseInt(arr1[4]);
    answer=num1+num2;
}
if(question.includes('subtract'))
{
    let num1=parseInt(arr1[2]);
    let num2=parseInt(arr1[4]);
    answer=num1-num2;
}// Use if conditions to parse the question and calculate the answer. Make cases for all types of captcha asked
const captcha_input_element = document.getElementById('valuepkg3'); // Fill the selector for the captcha input element in ""
captcha_input_element.value = answer;
