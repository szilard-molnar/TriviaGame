// trivia game

// displaying a title page with a start button.

// on click the game page displays

// all the questions will show below each other as separate divs, the answers will be radio buttons

// there will be a counter that will give a certain amount of time for the player to pick the answers. when the counter hits 0: --> it will check if all the answers were clicked. if yes, it will check if they are correct, if yes, winning page displays. if any of these conditions won't match. the losing page comes up.

// after the last question there will be a "DONE" button. pressing the "DONE" button will use the same function that the the counter does when it hits 0.

// restart button that starts over again.

// Bonus for me: if there is time, create the game in Hungarian too. Have a radio button that gives tha player the chance to pick another language option besides english.

$(document).ready(function () 
{
    var timeLeft = 120;
    var good = 0;
    var bad = 0;
    var answerArray = [];

    function countdown()
    {
        setTimeout(countdown, 1000);
        if(timeLeft == -1)
        {
            clearTimeout;
            $("#game").hide();
            $("#losingPicture").show();
            return;
        }
        else
        {
            $("#timer").html("<p>You have "+timeLeft+" seconds left.");
            timeLeft--;
        }
    }

    
    $("#start").click(function()
    {
        $("#heading").hide();
        countdown();

        $("#game").show();
    })

    $("#submitButton").click(function()
    {   
        $("#submitButton").hide();
        $("#restartButton").show();

        if($("input[class='answer1']:checked").val())
            {
                answerArray.push($(".answer1").val());
                good++;
            }
        else{
            bad++;
        }

        if($("input[class='answer2']:checked").val())
            {
                answerArray.push($(".answer2").val());
                good++;
            }
        else{
            bad++;
        }

        if($("input[class='answer3']:checked").val())
            {
                answerArray.push($(".answer3").val());
                good++;
            }
        else{
            bad++;
        }

        if($("input[class='answer4']:checked").val())
            {
                answerArray.push($(".answer4").val());
                good++;
            }
        else{
            bad++;
        }

        if($("input[class='answer5']:checked").val())
        {
            answerArray.push($(".answer5").val());
            good++;
        }
        else{
            bad++;
        }

        if($("input[class='answer6']:checked").val())
        {
            answerArray.push($(".answer6").val());
            good++;
        }
        else{
            bad++;
        }

        if($("input[class='answer7']:checked").val())
        {
            answerArray.push($(".answer7").val());
            good++;
        }
        else{
            bad++;
        }

        if($("input[class='answer8']:checked").val())
        {
            answerArray.push($(".answer8").val());
            good++;
        }
        else{
            bad++;
        }

            console.log(answerArray);

        $("#goodAnswerNumber").html("<p>Correct answers: "+ good + "</p>");
        $("#badAnswerNumber").html("<p>Incorrect answers: "+ bad + "</p>");

        for(var i = 0; i < answerArray.length; i++)
        {
            if(answerArray.length === 8 || answerArray.length === 7)
            {
                $("#game").hide();
                $("#winningPicture").show();
                $("#youAreAnExpert").show();
            }
            else if(answerArray.length === 6 || answerArray.length === 5)
            {
                $("#game").hide();
                $("#almostWinning").show();
                $("#almostParagraph").show();
            }
            else if(answerArray.length <= 4)
            {
                $("#game").hide();
                $("#losingPicture").show();
                $("#youNeedToPractice").show();
            }
        }

        $("#resultPage").show();
    })

})
