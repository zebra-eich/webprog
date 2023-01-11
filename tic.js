function myfunc() {

	var b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16;
	b1 = document.getElementById("b1").value;
	b2 = document.getElementById("b2").value;
	b3 = document.getElementById("b3").value;
	b4 = document.getElementById("b4").value;
	b5 = document.getElementById("b5").value;
	b6 = document.getElementById("b6").value;
	b7 = document.getElementById("b7").value;
	b8 = document.getElementById("b8").value;
	b9 = document.getElementById("b9").value;
    b10 = document.getElementById("b10").value;
	b11 = document.getElementById("b11").value;
	b12 = document.getElementById("b12").value;
	b13 = document.getElementById("b13").value;
	b14 = document.getElementById("b14").value;
	b15 = document.getElementById("b15").value;
	b16 = document.getElementById("b16").value;

	if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
		b2 == 'X') && (b3 == 'x' || b3 == 'X') && (b4 == 'x' || b4 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
		b5 == 'X') && (b9 == 'x' || b9 == 'X') && (b13 == 'x' || b13 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b10").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;


		window.alert('Player X won');
	}
	else if ((b13 == 'x' || b13 == 'X') && (b14 == 'x' ||
		b14 == 'X') && (b15 == 'x' || b15 == 'X') && (b16 == 'x' || b16 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b10").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;
		window.alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b8 == 'x' ||
		b8 == 'X') && (b12 == 'x' || b12 == 'X') && (b16 == 'x' || b16 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b10").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
		window.alert('Player X won');
	}
	else if ((b1 == 'x' || b1 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b11 == 'x' || b11 == 'X') && (b16 == 'x' || b16 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b10").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
		window.alert('Player X won');
	}
	else if ((b4 == 'x' || b4 == 'X') && (b7 == 'x' ||
		b7 == 'X') && (b10 == 'x' || b10 == 'X') && (b13 == 'x' || b13 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;
		window.alert('Player X won');
	}
	else if ((b2 == 'x' || b2 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b10 == 'x' || b10 == 'X') && (b14 == 'x' || b14 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;
		window.alert('Player X won');
	}
	else if ((b5 == 'x' || b5 == 'X') && (b6 == 'x' ||
		b6 == 'X') && (b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') ) {
		document.getElementById('print')
			.innerHTML = "Player X won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;
		window.alert('Player X won');
	}
    else if ((b9 == 'x' || b9 == 'X') && (b10 == 'x' ||
		b10 == 'X') && (b11 == 'x' || b11 == 'X') && (b12 == 'x' || b12 == 'X') ) {
		document.getElementById('print')
			.innerHTML = "Player X won";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b13").disabled = true;
            document.getElementById("b14").disabled = true;
            document.getElementById("b15").disabled = true;
            document.getElementById("b16").disabled = true;
            window.alert('Player X won');
        }
    else if ((b3 == 'x' || b3 == 'X') && (b7 == 'x' ||
		b7 == 'X') && (b11 == 'x' || b11 == 'X') && (b15 == 'x' || b15 == 'X')) {
		document.getElementById('print')
			.innerHTML = "Player X won";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("b10").disabled = true;
            document.getElementById("b12").disabled = true;
            document.getElementById("b13").disabled = true;
            document.getElementById("b14").disabled = true;
            document.getElementById("b16").disabled = true;
            window.alert('Player X won');
        }
    

	else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
		b2 == '0') && (b3 == '0' || b3 == '0') && (b4 == '0' || b4 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
		document.getElementById("b9").disabled = true;
        document.getElementById("b10").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b5 == '' ||
		b5 == '0') && (b9 == '0' || b9 == '0') && (b13 == '0' || b13 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b10").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;
        window.alert('Player 0 won');
    }
    else if ((b13 == '0' || b13 == '0') && (b14 == '0' ||
        b14 == '0') && (b15 == '0' || b15 == '0') && (b16 == '0' || b16 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b10").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;
        window.alert('Player 0 won');
    }
		else if ((b4 == '0' || b4 == '0') && (b8 == '0' ||
		b8 == '0') && (b12 == '0' || b12 == '0') && (b16 == '0' || b16 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b7").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b10").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b1 == '0' || b1 == '0') && (b6 == '0' ||
		b6 == '0') && (b11 == '0' || b11 == '0') && (b16 == '0' || b16 == '')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b10").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b4 == '0' || b4 == '0') && (b7 == '0' ||
		b7 == '0') && (b10 == '0' || b10 == '0') && (b13 == '0' || b13 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b6").disabled = true;
		document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b2 == '0' || b2 == '0') && (b6 == '0' ||
		b6 == '0') && (b10 == '0' || b10 == '0') && (b14 == '0' || b14 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b5").disabled = true;
		document.getElementById("b7").disabled = true;
		document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;
		window.alert('Player 0 won');
	}
	else if ((b5 == '0' || b5 == '0') && (b6 == '0' ||
		b6 == '0') && (b7 == '0' || b7 == '0') && (b8 == '0' || b8 == '0') ) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
		document.getElementById("b1").disabled = true;
		document.getElementById("b2").disabled = true;
		document.getElementById("b3").disabled = true;
		document.getElementById("b4").disabled = true;
		document.getElementById("b9").disabled = true;
		document.getElementById("b10").disabled = true;
        document.getElementById("b11").disabled = true;
        document.getElementById("b12").disabled = true;
        document.getElementById("b13").disabled = true;
        document.getElementById("b14").disabled = true;
        document.getElementById("b15").disabled = true;
        document.getElementById("b16").disabled = true;
		window.alert('Player 0 won');
	}
    else if ((b9 == '0' || b9 == '0') && (b10 == '0' ||
		b10 == '0') && (b11 == '0' || b11 == '0') && (b12 == '0' || b12 == '0') ) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b3").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b7").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b13").disabled = true;
            document.getElementById("b14").disabled = true;
            document.getElementById("b15").disabled = true;
            document.getElementById("b16").disabled = true;
            window.alert('Player 0 won');
    }
    else if ((b3 == '0' || b3 == '0') && (b7 == '0' ||
		b7 == '0') && (b11 == '0' || b11 == '0') && (b15 == '0' || b15 == '0')) {
		document.getElementById('print')
			.innerHTML = "Player 0 won";
            document.getElementById("b1").disabled = true;
            document.getElementById("b2").disabled = true;
            document.getElementById("b4").disabled = true;
            document.getElementById("b5").disabled = true;
            document.getElementById("b6").disabled = true;
            document.getElementById("b8").disabled = true;
            document.getElementById("b9").disabled = true;
            document.getElementById("b10").disabled = true;
            document.getElementById("b12").disabled = true;
            document.getElementById("b13").disabled = true;
            document.getElementById("b14").disabled = true;
            document.getElementById("b16").disabled = true;
            window.alert('Player 0 won');
    }

	// Checking of Player 0 finish
	// Here, Checking about Tie
	else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
		|| b2 == '0') && (b3 == 'X' || b3 == '0') 
        && (b4 == 'X' || b4 == '0') && (b5 == 'X' || b5 == '0') 
        && (b6 == 'X' || b6 == '0') && (b7 == 'X' || b7 == '0') 
        && (b8 == 'X' || b8 == '0') && (b9 == 'X' || b9 == '0')
        && (b10 == 'X' || b10 == '0') && (b11 == 'X' || b11 == '0')
        && (b12 == 'X' || b12 == '0') && (b13 == 'X' || b13 == '0')
        && (b14 == 'X' || b14 == '0') && (b15 == 'X' || b15 == '0')) {
			document.getElementById('print')
				.innerHTML = "Draw";
			window.alert('Draw');
	}
	else {

		// Here, Printing Result
		if (flag == 1) {
			document.getElementById('print')
				.innerHTML = "Player X Turn";
		}
		else {
			document.getElementById('print')
				.innerHTML = "Player 0 Turn";
		}
	}
}

// Function to reset game
function myfunc_2() {
	location.reload();
	document.getElementById('b1').value = '';
	document.getElementById("b2").value = '';
	document.getElementById("b3").value = '';
	document.getElementById("b4").value = '';
	document.getElementById("b5").value = '';
	document.getElementById("b6").value = '';
	document.getElementById("b7").value = '';
	document.getElementById("b8").value = '';
	document.getElementById("b9").value = '';
    document.getElementById("b10").value = '';
    document.getElementById("b11").value = '';
    document.getElementById("b12").value = '';
    document.getElementById("b13").value = '';
    document.getElementById("b14").value = '';
    document.getElementById("b15").value = '';
    document.getElementById("b16").value = '';

}

flag = 1;
function myfunc_3() {
	if (flag == 1) {
		document.getElementById("b1").value = "X";
		document.getElementById("b1").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b1").value = "0";
		document.getElementById("b1").disabled = true;
		flag = 1;
	}
}

function myfunc_4() {
	if (flag == 1) {
		document.getElementById("b2").value = "X";
		document.getElementById("b2").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b2").value = "0";
		document.getElementById("b2").disabled = true;
		flag = 1;
	}
}

function myfunc_5() {
	if (flag == 1) {
		document.getElementById("b3").value = "X";
		document.getElementById("b3").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b3").value = "0";
		document.getElementById("b3").disabled = true;
		flag = 1;
	}
}

function myfunc_6() {
	if (flag == 1) {
		document.getElementById("b4").value = "X";
		document.getElementById("b4").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b4").value = "0";
		document.getElementById("b4").disabled = true;
		flag = 1;
	}
}

function myfunc_7() {
	if (flag == 1) {
		document.getElementById("b5").value = "X";
		document.getElementById("b5").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b5").value = "0";
		document.getElementById("b5").disabled = true;
		flag = 1;
	}
}

function myfunc_8() {
	if (flag == 1) {
		document.getElementById("b6").value = "X";
		document.getElementById("b6").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b6").value = "0";
		document.getElementById("b6").disabled = true;
		flag = 1;
	}
}

function myfunc_9() {
	if (flag == 1) {
		document.getElementById("b7").value = "X";
		document.getElementById("b7").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b7").value = "0";
		document.getElementById("b7").disabled = true;
		flag = 1;
	}
}

function myfunc_10() {
	if (flag == 1) {
		document.getElementById("b8").value = "X";
		document.getElementById("b8").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b8").value = "0";
		document.getElementById("b8").disabled = true;
		flag = 1;
	}
}

function myfunc_11() {
	if (flag == 1) {
		document.getElementById("b9").value = "X";
		document.getElementById("b9").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b9").value = "0";
		document.getElementById("b9").disabled = true;
		flag = 1;
	}
}
function myfunc_12() {
	if (flag == 1) {
		document.getElementById("b10").value = "X";
		document.getElementById("b10").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b10").value = "0";
		document.getElementById("b10").disabled = true;
		flag = 1;
	}
}
function myfunc_13() {
	if (flag == 1) {
		document.getElementById("b11").value = "X";
		document.getElementById("b11").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b11").value = "0";
		document.getElementById("b11").disabled = true;
		flag = 1;
	}
}
function myfunc_14() {
	if (flag == 1) {
		document.getElementById("b12").value = "X";
		document.getElementById("b12").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b12").value = "0";
		document.getElementById("b12").disabled = true;
		flag = 1;
	}
}
function myfunc_15() {
	if (flag == 1) {
		document.getElementById("b13").value = "X";
		document.getElementById("b13").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b13").value = "0";
		document.getElementById("b13").disabled = true;
		flag = 1;
	}
}
function myfunc_16() {
	if (flag == 1) {
		document.getElementById("b14").value = "X";
		document.getElementById("b14").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b14").value = "0";
		document.getElementById("b14").disabled = true;
		flag = 1;
	}
}
function myfunc_17() {
	if (flag == 1) {
		document.getElementById("b15").value = "X";
		document.getElementById("b15").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b15").value = "0";
		document.getElementById("b15").disabled = true;
		flag = 1;
	}
}
function myfunc_18() {
	if (flag == 1) {
		document.getElementById("b16").value = "X";
		document.getElementById("b16").disabled = true;
		flag = 0;
	}
	else {
		document.getElementById("b16").value = "0";
		document.getElementById("b16").disabled = true;
		flag = 1;
	}
}