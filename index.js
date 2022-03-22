
$("#pass").on("input", function (event) {
    var passwordArray = Array.from($(this).val());
    var passwordScore = 0;
    $(".chars").text(passwordArray.length);
    
    checkCharacters(passwordArray, passwordScore, $(this).val());
});

$("#cb").on("click", function () {
    if ($(this).is(":checked")) {
        $("#pass").attr("type","text");
    } else {
        $("#pass").attr("type","password");
    }
});

function checkCharacters(passwordArray, passwordScore, password) {
    if (password.match(/[a-z]/g)) {
        $(".low").css("color", "rgb(0, 226, 38)");
        passwordScore += 2;
    } else {
        $(".low").css("color", "gray");
    }

    if (password.match(/[A-Z]/g)) {
        $(".up").css("color", "rgb(0, 226, 38)");
        passwordScore += 2;
    } else {
        $(".up").css("color", "gray");
    }

    if (password.match(/[0-9]/g)) {
        $(".num").css("color", "rgb(0, 226, 38)");
        passwordScore += 2;
    } else {
        $(".num").css("color", "gray");
    }

    if (password.match(/[^0-9a-zA-Z\s]/g)) {
        $(".sym").css("color", "rgb(0, 226, 38)");
        passwordScore += 2;
    } else {
        $(".sym").css("color", "gray");
    }

    if (password.match(/(.)\1/g)) {
        passwordScore -= 6;
    }

    passwordScoreResult(passwordScore, passwordArray.length);
}

function passwordScoreResult(passwordScore, length) {

    if (length >= 10) {
        if (passwordScore >= 8) {
            $(".res").css("background-color","rgb(0, 226, 38)");
            $("#pass").css("border-color","rgb(0, 226, 38)");
            $(".result").text("Very Strong");
        } else if (passwordScore >= 6) {
            $(".res").css("background-color","rgb(0, 226, 38)");
            $("#pass").css("border-color","rgb(0, 226, 38)");
            $(".result").text("Strong");
        } else if (passwordScore >= 4) {
            $(".res").css("background-color","rgb(218, 218, 0)");
            $("#pass").css("border-color","rgb(218, 218, 0)");
            $(".result").text("Medium");
        } else if (passwordScore >= 2) {
            $(".res").css("background-color","red");
            $("#pass").css("border-color","red");
            $(".result").text("Weak");
        }
    } else if (length >= 8) {
        if (passwordScore >= 8) {
            $(".res").css("background-color","rgb(0, 226, 38)");
            $("#pass").css("border-color","rgb(0, 226, 38)");
            $(".result").text("Strong");
        } else if (passwordScore >= 6) {
            $(".res").css("background-color","rgb(218, 218, 0)");
            $("#pass").css("border-color","rgb(218, 218, 0)");
            $(".result").text("Medium");
        } else if (passwordScore >= 4 || passwordScore >= 2) {
            $(".res").css("background-color","red");
            $("#pass").css("border-color","red");
            $(".result").text("Weak");
        }
    } else if (length >= 6) {
        if (passwordScore >= 8) {
            $(".res").css("background-color","rgb(218, 218, 0)");
            $("#pass").css("border-color","rgb(218, 218, 0)");
            $(".result").text("Medium");
        } else if (passwordScore >= 6) {
            $(".res").css("background-color","red");
            $("#pass").css("border-color","red");
            $(".result").text("Weak");
        } else if (passwordScore >= 4 || passwordScore >= 2) {
            $(".res").css("background-color","red");
            $("#pass").css("border-color","red");
            $(".result").text("Very Weak");
        }
    } else if (length > 0) {
        if (passwordScore >= 8 || passwordScore >= 6) {
            $(".res").css("background-color","red");
            $("#pass").css("border-color","red");
            $(".result").text("Weak");
        } else if (passwordScore >= 4 || passwordScore >= 2) {
            $(".res").css("background-color","red");
            $("#pass").css("border-color","red");
            $(".result").text("Very Weak");
        }
    } else {
        $(".res").css("background-color","rgb(192, 192, 192)");
        $("#pass").css("border-color","rgb(192, 192, 192)");
        $(".result").text("No Password");
    }
}

// function checkSymbolInPassword(passwordArray) {
    
//     if (
//         passwordArray.includes('!') ||
//         passwordArray.includes('"') ||
//         passwordArray.includes('#') ||
//         passwordArray.includes('$') ||
//         passwordArray.includes('&') ||
//         passwordArray.includes('%') ||
//         // used double quotes because we cant keep a single quote between 2 single quotes in JavaScript
//         passwordArray.includes("'") ||
//         passwordArray.includes('(') ||
//         passwordArray.includes(')') ||
//         passwordArray.includes('*') ||
//         passwordArray.includes('+') ||
//         passwordArray.includes(',') ||
//         passwordArray.includes('-') ||
//         passwordArray.includes('.') ||
//         passwordArray.includes('/') ||
//         passwordArray.includes(':') ||
//         passwordArray.includes(';') ||
//         passwordArray.includes('<') ||
//         passwordArray.includes('>') ||
//         passwordArray.includes('=') ||
//         passwordArray.includes('?') ||
//         passwordArray.includes('@') ||
//         passwordArray.includes('[') ||
//         passwordArray.includes(']') ||
//         // \ give a escape character so to get a single backslash we use \\
//         passwordArray.includes("\\") ||
//         passwordArray.includes('^') ||
//         passwordArray.includes('_') ||
//         passwordArray.includes('`') ||
//         passwordArray.includes('|') ||
//         passwordArray.includes('{') ||
//         passwordArray.includes('}') ||
//         passwordArray.includes('~') ||
//         passwordArray.includes('"')
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkNumberInPassword(passwordArray) {
//     if (
//         passwordArray.includes('0') ||
//         passwordArray.includes('1') ||
//         passwordArray.includes('2') ||
//         passwordArray.includes('3') ||
//         passwordArray.includes('4') ||
//         passwordArray.includes('5') ||
//         passwordArray.includes('6') ||
//         passwordArray.includes('7') ||
//         passwordArray.includes('8') ||
//         passwordArray.includes('9')
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkLowerCaseInPassword(passwordArray) {
//     if (
//         passwordArray.includes('a') ||
//         passwordArray.includes('b') ||
//         passwordArray.includes('c') ||
//         passwordArray.includes('d') ||
//         passwordArray.includes('e') ||
//         passwordArray.includes('f') ||
//         passwordArray.includes('g') ||
//         passwordArray.includes('h') ||
//         passwordArray.includes('i') ||
//         passwordArray.includes('j') ||
//         passwordArray.includes('k') ||
//         passwordArray.includes('l') ||
//         passwordArray.includes('m') ||
//         passwordArray.includes('n') ||
//         passwordArray.includes('o') ||
//         passwordArray.includes('p') ||
//         passwordArray.includes('q') ||
//         passwordArray.includes('r') ||
//         passwordArray.includes('s') ||
//         passwordArray.includes('t') ||
//         passwordArray.includes('u') ||
//         passwordArray.includes('v') ||
//         passwordArray.includes('w') ||
//         passwordArray.includes('x') ||
//         passwordArray.includes('y') ||
//         passwordArray.includes('z')
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function checkUpperCaseInPassword(passwordArray) {
//     if (
//         passwordArray.includes('A') ||
//         passwordArray.includes('B') ||
//         passwordArray.includes('C') ||
//         passwordArray.includes('D') ||
//         passwordArray.includes('E') ||
//         passwordArray.includes('F') ||
//         passwordArray.includes('G') ||
//         passwordArray.includes('H') ||
//         passwordArray.includes('I') ||
//         passwordArray.includes('J') ||
//         passwordArray.includes('K') ||
//         passwordArray.includes('L') ||
//         passwordArray.includes('M') ||
//         passwordArray.includes('N') ||
//         passwordArray.includes('O') ||
//         passwordArray.includes('P') ||
//         passwordArray.includes('Q') ||
//         passwordArray.includes('R') ||
//         passwordArray.includes('S') ||
//         passwordArray.includes('T') ||
//         passwordArray.includes('U') ||
//         passwordArray.includes('V') ||
//         passwordArray.includes('W') ||
//         passwordArray.includes('X') ||
//         passwordArray.includes('Y') ||
//         passwordArray.includes('Z')
//     ) {
//         return true;
//     } else {
//         return false;
//     }
// }
