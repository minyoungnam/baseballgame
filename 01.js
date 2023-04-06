var readline = require('readline');
var r = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});


let random_number1 = Math.floor(Math.random() * 10);
let random_number2 = Math.floor(Math.random() * 10);
let random_number3 = Math.floor(Math.random() * 10);

while(random_number1 === random_number2) {
  random_number2 = Math.floor(Math.random() * 10);
};
while(random_number1 === random_number3 || random_number2 === random_number3) {
  random_number3 = Math.floor(Math.random() * 10);
};

 
let tries = 1;
let strikes = 0;
let balls = 0;


function figureinput(user_input) {
    let user_number1 = parseInt(user_input.charAt(0));
    let user_number2 = parseInt(user_input.charAt(1));
    let user_number3 = parseInt(user_input.charAt(2));

    strikes = 0;
    balls = 0;

    // console.log('user_number1 :: ',user_number1);
    // console.log('user_number2 :: ',user_number2);
    // console.log('user_number3 :: ',user_number3);

    if((user_input.length > 3 || user_input.length < 3)) {
      console.log('3자리의 숫자를 입력하세요')
      r.question(`${tries}번째 시도:`, figureinput);
    
    } else {
    if(user_number1 === random_number1) {
        strikes ++; 
    } else if((user_number1 === random_number2) || (user_number1 === random_number3)) {
        balls ++;
    }

    if(user_number2 === random_number2) {
      strikes ++; 
    } else if((user_number2 === random_number1) || (user_number2 === random_number3)) {
      balls ++;
    }

    
    if(user_number3 === random_number3) {
      strikes ++; 
    } else if((user_number3 === random_number1) || (user_number3 === random_number2)) {
      balls ++;
    }
        
    console.log(`${balls}B${strikes}S `);
    tries ++;
        
    if(strikes === 3) {
      console.log(`${tries}번째만에 맞히셨습니다.`);
      console.log('게임을 종료합니다.')
      r.close();
    } else {
      r.question(`${tries}번째 시도 : `, figureinput);
    }
  }
}
r.question(`${tries}번째 시도 : `, figureinput);