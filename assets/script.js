//Variables 
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
var inputName = $('#name')
var highscore =$('#highscore')

//function that starts quiz
function StartQuiz(){
    countdown();
    timerEl.attr("hidden", false);
    startBtn.attr("hidden", true);
    highscore.attr("hidden", true);
    names.attr("hidden", true);
    question.text('what universe are the Z fighters from?')
    answersEl.empty()


    answersEl.append('<li> <button id="btn1">', '<li> <button id="btn2">', '<li> <button id="btn3">', '<li><button id="btn4">');
//wrong answer
    $('#btn1').text('Universe 12').on('click', function(){

        timeLeft--;
        popUp.text(`you lost time!`);
    });
//Wrong answer
    $('#btn2').text('Universe 1').on('click', function(){

        timeLeft--;
        popUp.text(`you lost time!`);

    });
//correct answer
    $('#btn3').text('Universe 7').on('click', function(){
        question.text('Correct');
        answersEl.empty();
        popUp.empty();
        correct();

    });
//Wrong answer
    $('#btn4').text('Universe 3').on('click', function(){

        timeLeft--;
        popUp.text(`you lost time!`);
    });
    //
    function correct(){

        answersEl.append('<li> <button id="btn1">', '<li> <button id="btn2">', '<li> <button id="btn3">', '<li><button id="btn4">');
        //
            //Changes question
            question.text(`What is Goku's father's Name?`)
            //changes answers
            //correct answer
            $('#btn1').text('Bardock').on('click', function(){
                answersEl.empty();
                popUp.empty();
                correct2();
            });
            //wrong answer
            $('#btn2').text('Rhubarb').on('click', function(){
        
                timeLeft--;
                popUp.text(`you lost time!`);
            });
            //wrong answer
            $('#btn3').text('Kakarot').on('click', function(){

                timeLeft--;
                popUp.text(`you lost time!`);
            });
            //wrong answer
            $('#btn4').text('Tarble').on('click', function(){

                timeLeft--;
                popUp.text(`you lost time!`);
            });
    };
    //answer correct, Next question
    function correct2(){
        answersEl.append('<li> <button id="btn1">', '<li> <button id="btn2">', '<li> <button id="btn3">', '<li><button id="btn4">');
        //
        console.log('correct')
                //Changes question
                question.text('What is the name of the dragon who grants wishes on earth?')
                //wrong answer
                $('#btn1').text('Super Shenron').on('click', function(){

                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
                //wrong answer
                $('#btn2').text('Mr. Poko Poko').on('click', function(){

                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
                //wrong answer
                $('#btn3').text('Porunga').on('click', function(){

                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
                //correct answer
                $('#btn4').text('Shenron').on('click', function(){
                    console.log("right3")
                    answersEl.empty();
                    popUp.empty();
                    correct3();
                });
    };
    //answer correct, Next question
    function correct3(){
        answersEl.append('<li> <button id="btn1">', '<li> <button id="btn2">', '<li> <button id="btn3">', '<li><button id="btn4">');
        //
        console.log('correct')
                //Changes question
                question.text(`What is the name of Vageta's wife?`)
                //wrong answer
                $('#btn1').text('Chi Chi').on('click', function(){
            
                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
                //correct answer
                $('#btn2').text('Bulma').on('click', function(){
                    answersEl.empty();
                    correct4();
                });
                //wrong answer
                $('#btn3').text('Launch').on('click', function(){
            
                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
                //wrong answer
                $('#btn4').text('Android 18').on('click', function(){
            
                    timeLeft--;
                    popUp.text(`you lost time!`);
                });
    };
    //win function
    function correct4(){
        console.log('you win')
        question.text('!Congratulations Z fighter!')
        answersEl.empty();
        popUp.empty(); 
        answersEl.append('<li><input id="name"><button id="btn1">');
        $('#btn1').text("log Highscore").on('click', highScore);
        clearTimeout(timeInterval);

    };
    //Record highscore
    function highScore(){
        startBtn.attr("hidden", false);
        highscore.attr("hidden", false);
        names.attr("hidden", false);
        names.append('<li>' + $('input[id="name"]').val() + " " + timeLeft + ' seconds remaining');
        answersEl.empty();
        question.text('');
        timerEl.empty();
    };
    //Timer function
    function countdown() {
        timeLeft = 15;
      
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
            timerEl.empty();
            answersEl.empty();
            popUp.empty();
            question.text('Time is up! You Lose 😢');
            highscore.attr("hidden", false);
            names.attr("hidden", false);
            answersEl.append(' "Try again?" <button id="btn1">');
            $('#btn1').text('Start Quiz').on('click', StartQuiz);
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
          }
          console.log(timeLeft);
        }, 1000);
      }
};


startBtn.on('click', StartQuiz);