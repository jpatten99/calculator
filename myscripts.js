let operand1 = '';
let operand2 = '';
let operatorClicked = false;
let operator = '';
let runningTotal = 0;
let equalClicked = false;
let cleared = true;
let op2Clearer = true;
let isBroken = false;
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
        if(cleared){
            switch(button.id){
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    if(!operatorClicked){
                        operand1+=button.id;
                        if(operand1 !== '0') operand1 = operand1.replace(/^0+/, '');
                        console.log(operand1);
                    }
                    else{
                        operand2 += button.id;
                        if(operand2 !== '0') operand2 = operand2.replace(/^0+/, '');
                        console.log(operand2);
                    }
                    if(operand1){
                        document.getElementById("+").disabled = false;
                        document.getElementById("-").disabled = false;
                        document.getElementById("*").disabled = false;
                        document.getElementById("/").disabled = false;
                    }
                    if(operand2){document.getElementById("=").disabled = false;}
                    
                    break;
                case '+':
                case '-':    
                case '*':
                case '/':
                    operatorClicked = true;
                    operator = button.id;
                    break;
                case '=':
                    if(operator === '/' && operand2 === '0'){
                        operand1 = '';
                        operand2 = '';
                        operatorClicked = false;
                        operator = '';
                        runningTotal = 0;
                        equalClicked = false;
                        document.getElementById("+").disabled = true;
                        document.getElementById("-").disabled = true;
                        document.getElementById("*").disabled = true;
                        document.getElementById("/").disabled = true;
                        document.getElementById("=").disabled = true;
                        cleared = true;
                        display.textContent ='%$#&%#&#%&%#&^#$&%$#%&%#$&%';
                        var img = document.createElement("img");
                        img.src = "https://i.kym-cdn.com/entries/icons/original/000/023/967/obiwan.jpg";
                        img.id = "img1";
                        var src = document.getElementById("header");
                        src.appendChild(img);
                        isBroken = true;
                        break;
                    } 
                    equalClicked = true;
                    runningTotal = operate(operator, operand1, operand2);
                    display.textContent = operate(operator, operand1, operand2);    
                    cleared = false;   
                    break;    
                case 'CLR':
                    operand1 = '';
                    operand2 = '';
                    operatorClicked = false;
                    operator = '';
                    runningTotal = 0;
                    equalClicked = false;
                    document.getElementById("+").disabled = true;
                    document.getElementById("-").disabled = true;
                    document.getElementById("*").disabled = true;
                    document.getElementById("/").disabled = true;
                    document.getElementById("=").disabled = true;
                    const list = document.getElementById("header");
                    list.removeChild(list.firstChild);
                    cleared = true;
                    break;
                    
            }
            if(!equalClicked && !isBroken){display.textContent = operand1 + operator + operand2;}
        }
        else{
            equalClicked = false;
            operand1 = runningTotal;
            if(op2Clearer)operand2 = '';
            
            console.log('op1:' + operand1);
            console.log('op2:' + operand2);
            switch(button.id){
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                        operand2 += button.id;
                        if(operand2 !== '0') operand2 = operand2.replace(/^0+/, '');
                        console.log(button.id);
                        op2Clearer=false;
                        break;
                case '+':
                case '-':    
                case '*':
                case '/':
                    operatorClicked = true;
                    operator = button.id;
                    break;
                case '=':
                    if(operator === '/' && operand2 === '0'){
                        operand1 = '';
                        operand2 = '';
                        operatorClicked = false;
                        operator = '';
                        runningTotal = 0;
                        equalClicked = false;
                        document.getElementById("+").disabled = true;
                        document.getElementById("-").disabled = true;
                        document.getElementById("*").disabled = true;
                        document.getElementById("/").disabled = true;
                        document.getElementById("=").disabled = true;
                        cleared = true;
                        display.textContent ='%$#&%#&#%&%#&^#$&%$#%&%#$&%';
                        var img = document.createElement("img");
                        img.src = "https://i.kym-cdn.com/entries/icons/original/000/023/967/obiwan.jpg";
                        img.id = "img1";
                        var src = document.getElementById("header");
                        src.appendChild(img);
                        isBroken = true;
                        break;
                    } 
                    equalClicked = true;
                    runningTotal = operate(operator, operand1, operand2);
                    display.textContent = operate(operator, operand1, operand2);  
                    op2Clearer = true;     
                    break;    
                case 'CLR':
                    operand1 = '';
                    operand2 = '';
                    operatorClicked = false;
                    operator = '';
                    runningTotal = 0;
                    equalClicked = false;
                    document.getElementById("+").disabled = true;
                    document.getElementById("-").disabled = true;
                    document.getElementById("*").disabled = true;
                    document.getElementById("/").disabled = true;
                    document.getElementById("=").disabled = true;
                    display.textContent = '';
                    const list = document.getElementById("header");
                    list.removeChild(list.firstChild);
                    cleared = true;
            }
            if(!equalClicked&& !isBroken){display.textContent = operand1 + operator + operand2;}
        }
        isBroken = false;

       /*
        //checks if any operator is clicked, if so set flag and assign it to operator variable
        if(button.id === '+' || button.id === '-' || button.id === '*' || button.id === '/'){
            operatorClicked = true;
            operator = button.id;
        }
        //if operator isn't clicked and not a bad button.id, we know we're still adding to op1
        if(!operatorClicked && button.id !== '+' && button.id !== '-' && button.id !== '*' && button.id !== '/' && button.id !== 'CLR'){
            operand1+=button.id;
            if(operand1 !== '0') operand1 = operand1.replace(/^0+/, '');
            
        }
        //if operator is clicked, don't add it to op2, but start adding number values to op2
        else if(operatorClicked && button.id !== '+' && button.id !== '-' && button.id !== '*' && button.id !== '/' && button.id !== '=' && button.id !== 'CLR'){
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

        if(button.id)

        //following if statement enables +, -, *, / if there's a first operand entered
        if(operand1!==''){
            document.getElementById("+").disabled = false;
            document.getElementById("-").disabled = false;
            document.getElementById("*").disabled = false;
            document.getElementById("/").disabled = false;
        }

       
        */


    });
    
});
