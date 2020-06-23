function challengeLabel(a) {
    console.log( "######### Challenge " + a + " #########")
}

function challenge1 () {
    let num = 1
    while (num <= 5) {
        console.log(num)
        num = num + 1
    }
}

function challenge2 (a) {
    let num = 1
    while (num <= a) {
        console.log(num)
        num = num + 1
    }
}

function challenge3 (a,b) {
    while (a <= b) {
        console.log(a)
        a = a + 1
    }
}

function challenge4(a) {
    let num = 1
    while (num <= a) {
        if (num % 2 === 0){
            console.log(num + ' Even')
        }
        if (num % 2 !== 0){
            console.log(num + ' Odd')
        }
        num = num + 1;
    }
}

function challenge5(a) {
    let num = 1
    while (num <= a) {
        if (num % 2 === 0) {
            console.log(num)
        }
        num = num + 1
    }
}

function challenge6() {
    let num = 10
    while (num >= 1) {
        console.log(num)
        num = num - 1
    }
}

function challenge7() {
    let num = 10
    while (num >= 1) {
        console.log(num)
        num = num - 1
    }
    console.log('Blast off!')
}


function challenge8(num){
    while (1 < num) {
        console.log(num)
        num = num - 3
    }
}

function challenge9() {
    let num = 7 
    while (1 <= num) {
        console.log(num + '. Hello!')
        num = num - 1
    }
    
}

function challenge10(str) {
    let num = 7
    while (1 <= num) {
        console.log(num + '. ' + str)
        num = num -1
    }

}

function challenge11(str, num) {
    while (num >= 1) {
        console.log(str)
        num = num - 1
    }
}

function challenge12(str) {
    let index = 0
    while (index < str.length) {
        console.log(str[index])
        index = index + 1 
    }
}

function challenge13(str) {
    let firstIndex = 1
    while (firstIndex < str.length) {
        console.log(str[firstIndex])
        firstIndex = firstIndex + 2
    }
}

function challenge14(str) {
    let lastIndex = str.length-1
    while (lastIndex >= 0) {
        console.log(str[lastIndex])
        lastIndex = lastIndex - 1
    }
}


function challenge15(n) {
    let num = 1
    while (num <= n) {
        if (num % 15 === 0) {
            console.log('FizzBizz') 
            num = num + 1
        }
        else if (num % 3 === 0) {
            console.log('Fizz') 
            num = num + 1
        }
        else if (num % 5 === 0) {
            console.log('Buzz') 
            num = num + 1
        } else {
            console.log(num) 
            num = num + 1
        }    
    }  
}

function challenge16(num){
    let n1 = 1
    let n2 = 1
    let n = n1 + n2;
    console.log(n1) 
    console.log(n2) 
    while (n <= num) {
        console.log(n) 
        n1 = n2
        n2 = n
        n = n1 + n2ls
    }
}

challengeLabel(1);
challenge1();
challengeLabel(2);
challenge2 (6);
challengeLabel(3);
challenge3(5, 10);
challengeLabel(4);
challenge4(5);
challengeLabel(5);
challenge5(11);
challengeLabel(6);
challenge6();
challengeLabel(7);
challenge7();
challengeLabel(8);
challenge8(20);
challengeLabel(9);
challenge9();
challengeLabel(10);
challenge10('Hi There!');
challengeLabel(11);
challenge11('Good-bye...', 4);
challenge11('Get out!', 6);
challengeLabel(12);
challenge12('think');
challengeLabel(13);
challenge13('Nobody');
challengeLabel(14);
challenge14('backward');
challengeLabel(15);
challenge15(15);
challengeLabel(16)
challenge16(144);



