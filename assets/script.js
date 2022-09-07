var question = $('#question');
var answersEl = $('#answers');
var startBtn = $('#start');
var button1 = $('#btn1');
var button2 = $('#btn2');
var button3 = $('#btn3');
var button4 = $('#btn4');
var timerEl = $('#timer')
var timeLeft = timeLeft;
var popUp = $('#popUp');
var timeInterval;
var names = $('#names');
var inputName = $('#name');

function StartQuiz(){
    var btn1 ="";
    var btn2 ="";
    var btn3 ="";
    var btn4 ="";

    countdown();

    question.text('??? question 1 ???')
    answersEl.empty()


    answersEl.append('<li> <button id="btn1">', '<li> <button id="btn2">', '<li> <button id="btn3">', '<li><button id="btn4">');
//wrong answer
    $('#btn1').text('test').on('click', function(){
        // console.log("wrong")
        timeLeft--;
        popUp.text(`you lost time!`);
    });
//Wrong answer
    $('#btn2').text('test').on('click', function(){
        // console.log("wrong")
        timeLeft--;
        popUp.text(`you lost time!`);

    });
//correct answer
    $('#btn3').text('correct').on('click', function(){
        // console.log("right");
        question.text('Correct');
        answersEl.empty();
        popUp.empty();
        correct();

    });
//Wrong answer
    $('#btn4').text('test').on('click', function(){
        // console.log("wrong")
        timeLeft--;
        popUp.text(`you lost time!`);
    });
    //
    function correct(){

        answersEl.append('<li> <button id="btn1">', '<li> <button id="btn2">', '<li> <button id="btn3">', '<li><button id="btn4">');
        //
        question.text('??? question 2 ???')
            //Changes question
            question.text('??? question 2 ???')
            //changes answers
            $('#btn1').text('correct').on('click', function(){
                // console.log("right");
                answersEl.empty();
                popUp.empty();
                correct2();
            });
            $('#btn2').text('test').on('click', function(){
                // console.log("wrong")
                timeLeft--;
                popUp.text(`you lost time!`);
            });
            $('#btn3').text('test').on('click', function(){
                // console.log("wrong")
                timeLeft--;
                popUp.text(`you lost time!`);
            });
            $('#btn4').text('test').on('click', function(){
                // console.log("wrong")
                timeLeft--;
                popUp.text(`you lost time!`);
            });
    };
    //
    function correct2(){
        answersEl.append('<li> <button id="btn1">', '<li> <button id="btn2">', '<li> <button id="btn3">', '<li><button id="btn4">');
        //
        console.log('correct')
                //Changes question
                question.text('??? question 3 ???')
    
                $('#btn1').text('test').on('click', function(){
                    // console.log("wrong")
                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
                $('#btn2').text('test').on('click', function(){
                    // console.log("wrong")
                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
                $('#btn3').text('test').on('click', function(){
                    // console.log("wrong")
                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
                $('#btn4').text('correct').on('click', function(){
                    console.log("right3")
                    answersEl.empty();
                    popUp.empty();
                    correct3();
                });
    };
    //
    function correct3(){
        answersEl.append('<li> <button id="btn1">', '<li> <button id="btn2">', '<li> <button id="btn3">', '<li><button id="btn4">');
        //
        console.log('correct')
                //Changes question
                question.text('??? question 4 ???')
    
                $('#btn1').text('test').on('click', function(){
                    // console.log("wrong")
                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
                $('#btn2').text('correct').on('click', function(){
                    // console.log("rigth3")
                    answersEl.empty();
                    correct4();
                });
                $('#btn3').text('test').on('click', function(){
                    // console.log("wrong")
                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
                $('#btn4').text('test').on('click', function(){
                    // console.log("wrong")
                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
    };
    //win function
    function correct4(){
        console.log('you win')
        question.text('!You Win!')
        answersEl.empty();
        popUp.empty(); 
        answersEl.append('<li><input id="name"><button id="btn1">');
        $('#btn1').text("log Highscore").on('click', highScore);
        clearTimeout(timeInterval);

    };
    //Record highscore
    function highScore(){
        names.attr("hidden", false);
        //Use Json to record score/////////////
        names.append('<li>', $('input[id="name"]').val());
        answersEl.empty();
        answersEl.append('<li><button id="btn1">');
        $('#btn1').text('Start Quiz').on('click', StartQuiz);
    };
    //
    function countdown() {
        timeLeft = 10;
      
        // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
        timeInterval = setInterval(function () {        
          // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.text(timeLeft + ' seconds remaining');
            // Decrement `timeLeft` by 1
            timeLeft--;  
        } else if (timeLeft === 1) {
            // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
            timerEl.text(timeLeft + ' second remaining');
            timeLeft--;         
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.text('Time is up!');
            answersEl.empty();
            question.text('You Lose 😢');
            answersEl.append('<li> "Try again?" <button id="btn1">');
            $('#btn1').text('Start Quiz').on('click', StartQuiz);
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
          }
          console.log(timeLeft);
        }, 1000);
      }
};







// function incorrect(){
//     //lose time 
//     countdown.timeLeft =-2;
//     console.log("hello")
//     //display mesg every time you lose
// }



startBtn.on('click', StartQuiz);