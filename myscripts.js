let operand1 = '';
let operand2 = '';
let operatorClicked = false;
let operator = '';
let runningTotal = 0;
const display = document.getElementById('display');
if(operand1===''){
    document.getElementById("+").disabled = true;
    document.getElementById("-").disabled = true;
    document.getElementById("*").disabled = true;
    document.getElementById("/").disabled = true;
    document.getElementById("=").disabled = true;
}

function operate(operator, op1, op2){
    switch (operator) {
    case '+':
        return (Number(op1) + Number(op2));
        break;
    case '-':
        return (Number(op1) - Number(op2));
        break;
    case '*':
        return (Number(op1) * Number(op2));
        break;
    case '/':
        return (Number(op1) / Number(op2));
        break;
    
    default:
        break;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        //checks if any operator is clicked, if so set flag and assign it to operator variable
        if(button.id === '+' || button.id === '-' || button.id === '*' || button.id === '/'){
            operatorClicked = true;
            operator = button.id;
        }
        //if operator isn't clicked and not a bad button.id, we know we're still adding to op1
        if(!operatorClicked && button.id !== '+' && button.id !== '-' && button.id !== '*' && button.id !== '/'){
            operand1+=button.id;
            if(operand1 !== '0') operand1 = operand1.replace(/^0+/, '');
            
        }
        //if operator is clicked, don't add it to op2, but start adding number values to op2
        else if(operatorClicked && button.id !== '+' && button.id !== '-' && button.id !== '*' && button.id !== '/' && button.id !== '='){
            operand2 += button.id;
            if(operand2 !== '0') operand2 = operand2.replace(/^0+/, '');
            

        }
        //if op2 isn't null anymore enable the = button
        if(operand2 !== ''){
            document.getElementById("=").disabled = false;
        }
        //if = is clicked, put content into display
        if(button.id === '='){
            display.textContent = operate(operator, operand1, operand2);

        }
        else{display.textContent=operand1 + operator + operand2;}

        //following if statement enables +, -, *, / if there's a first operand entered
        if(operand1!==''){
            document.getElementById("+").disabled = false;
            document.getElementById("-").disabled = false;
            document.getElementById("*").disabled = false;
            document.getElementById("/").disabled = false;
        }

       
        
    });
    
});

function test(){

}