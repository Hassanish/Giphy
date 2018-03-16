	
	

var queries=[
{question: "1. Economic progress comes primarily through?",
answers:{
a: 'central planning',
b: 'imposition of trade barriers',
c: 'government investment in heavy industry',
d: 'entrepreneurial action directed by competitive markets',
},
answer: 'b'},

{question: "2. If you want to earn a high income you should figure out what others value because?",
answers:{
a: 'others will be willing to pay you for what they value',
b: 'you will be able to gain at the expense of others',
c: 'you will not have to compete in the job market',
d: 'you will then be able to charge higher prices than alternative suppliers',
},
answer: 'a'},

{question: "3. Losses and business failures?",
answers:{
a: 'illustrate why government subsidies are necessary if resources are going to be allocated efficiently',
b: 'will help redirect resources away from  unproductive projects',
c: 'reflect that buyers value the product highly relative to costs',
d: 'indicate that sellers are producing the commodity at the lowest possible cost',
},
answer: 'b'},

{question:"4. Specialization in goods and services one can produce at a low cost makes it possible for trading partners to produce a larger joint output.  This is called?",
answers:{
a: 'the law of comparative advantage',
b: 'the law of absolute advantage',
c: 'the law of production possibilities',
d: 'the law of demand',
},
answer: 'a'},

{question:"5. The income and living standards of a nation will increase when?",
answers:{
a: 'jobs are protected and total employment expands',
b: 'the prices of goods and services increase',
c: 'the imports of goods and services fall',
d: 'the availability of goods and services that people value increases',
},
answer:'d'},

{question:"6. When the government funds a project that will create jobs, the funds for the project?",
answers:{
a: 'are essentially free, because the project originated in the government sector',
b: 'will leave private sector output and employment unchanged',
c: 'will generate additional tax revenues that will pay for the project',
d: 'will have to be either taxed or borrowed from the private sector',
},
answer:'d'},

{question:"7. Adam Smith's invisible hand principle stresses the tendency of?",
answers:{
a: 'compassion to encourage productive economic activity',
b: 'the competitive market process to direct self-interested individuals into activities that enhance the economic welfare of society',
c: 'government regulation to bring the self interest of individuals into harmony with the economic welfare of society',
d: 'self-interested individuals to pursue activities that benefit themselves, but harm the overall economic welfare of society',
},
answer:'b'},

{question: "8. Which of the following is a predictable, secondary effect of a sharp increase in gasoline prices?",
answers:{
a: 'Producers will increase the production of gas guzzling vehicles',
b: 'Producers will increase the production of fuel-efficient cars',
c: 'the termination of research on the cost-effectiveness of alternative fuels to power automobiles',
d: 'The federal government will place a quota on the number of fuel-efficient cars for sale, thus “forcing” consumers to purchase the gas guzzling vehicles',
},
answer: 'b'},

{question:"9. In a free market economy, consumption and investment decisions?",
answers:{
a: 'are controlled largely by the government',
b: 'shape the future course of the national economy',
c: 'are necessarily controlled by big businesses',
d: 'require protection from foreign forces if individuals desire wealth accumulation',
},
answer:'b'},
];

$(document).ready(function(){
    $("#startz").click(function(){
  
    var number = 45;
    alert("Start!");
      $("#startz").on("click", start);  // starts quiz 
      $("#submit").on("click", done);  // submits answers 
      $("#restart").on("click", restart);  // retake quiz
  
      function start(){
          counter = setInterval(timer, 1000);
          shows(".question");
          shows(".answers");
          shows("#submit");
          hides("#startz");
          hides(".rules");
          hides("#restart");
          hides("#results");
      }
      function timer(){
        number-- // decrements the timer by 1
        $("#clock").html("<h2>" + number + "</h2>" );
        if (number === 0) {
        alert("Times Up!")
        stop(); 
       }
      }
      function stop(){
          clearInterval(counter); // stops the timer
          $("#results").show();
          $("#restart").show();
          $(".question").hide();
          $(".answers").hide();
          $("#submit").hide();
      }
      function done(){
          clearInterval(counter); // stops the timer
          $("#results").show();
          $("#restart").show();
          $(".question").hide();
          $(".answers").hide();
          $("#submit").hide();
          timer();  
          alert("Thank you!")      
      }
      function restart(){
          number = 45;
          start();
      }
      function hides(event) {
         $(event).hide();
      }
      function shows(event) {
         $(event).show();
     }
        start(); 
    });
  });
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
generateQuiz(queries, quizContainer, resultsContainer, submitButton);
function generateQuiz(questions, quizContainer, resultsContainer, submitButton){
    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;
        for(var i=0; i<questions.length; i++){ 
            answers = [];
            for(letter in questions[i].answers){
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }
        quizContainer.innerHTML = output.join('');
    }
    function feedback(questions, quizContainer, resultsContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;
      
         for(var i=0; i<questions.length; i++){

          
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
           
            if(userAnswer===questions[i].correctAnswer){
              
                numCorrect++;
                
                answerContainers[i].style.color = 'lightgreen';
                
                
            }
            
            else{
              
                answerContainers[i].style.color = 'red';
               
            }
        }

        resultsContainer.innerHTML = 'Correct answers= '+ numCorrect + ' out of ' + questions.length;
    }

   
    showQuestions(questions, quizContainer);
    
   
    submitButton.onclick = function(){
        feedback(questions, quizContainer, resultsContainer);
    }


}
