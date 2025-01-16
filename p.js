function openNewTab(url) {
    window.open(url, '_blank');
  }

document.getElementById("takeQuizButton").addEventListener("click", function () {
    window.location.href = "quiz.html"; 
  });
  
  let score = 0;
let currentLevel = 1;
const totalLevels = 5;

function calculateScore(level) {
    score = 0;
    const questions = document.querySelectorAll(`#level-${level} .question`);
    questions.forEach(question => {
        const selectedOption = question.querySelector('input[type="radio"]:checked');
        if (selectedOption && selectedOption.value == "1") {
            score++;
        }
    });

    document.getElementById('score').textContent = `Your Score: ${score}`;
    document.getElementById('questions-container').style.display = 'none';
    document.getElementById('score-container').style.display = 'block';
}

function nextLevel(level) {
    if (level === 1) {
        calculateScore(1);
    } else {
        if (score >= 3) {
            alert("Congratulations! You passed the level!");
            if (level < totalLevels) {
                showNextLevel(level);
            } else {
                alert("You have completed the quiz!");
                document.getElementById('questions-container').style.display = 'none';
            }
        } else {
            alert("You need at least 3 correct answers to proceed to the next level.");
        }
    }
}

function showNextLevel(level) {
    currentLevel++;
    document.getElementById('level-title').textContent = `Level ${currentLevel}: Advanced Quiz`;
    document.getElementById('questions-container').style.display = 'block';
    document.getElementById('score-container').style.display = 'none';

    // Update the questions for the next level
    const newQuestions = getQuestionsForLevel(currentLevel);
    document.getElementById('questions-container').innerHTML = newQuestions;

    const nextLevelButton = document.createElement('button');
    nextLevelButton.textContent = 'Next Level';
    nextLevelButton.onclick = () => nextLevel(currentLevel);
    document.getElementById('questions-container').appendChild(nextLevelButton);
}

function getQuestionsForLevel(level) {
    // Add questions dynamically for each level
    if (level === 2)  {
        return `
            <div class="question" id="q1">
                <p>1. What is the date of birth of the Holy Prophet Sallallahu 'Alaihi Wa Sallam?</p>
                <label><input type="radio" name="q1" value="1"> 12 Rabi' ul Awwal</label><br>
                <label><input type="radio" name="q1" value="0"> 15 Shawwal</label><br>
                <label><input type="radio" name="q1" value="0"> 10 Rajab</label><br>
                <label><input type="radio" name="q1" value="0"> 1 Muharram</label><br>
            </div>
            <div class="question" id="q2">
                <p>2. What is the name of the Prophet's father?</p>
                <label><input type="radio" name="q2" value="1"> Hadhrat Abdullah</label><br>
                <label><input type="radio" name="q2" value="0"> Hadhrat Abu Talib</label><br>
                <label><input type="radio" name="q2" value="0"> Hadhrat Hamza</label><br>
                <label><input type="radio" name="q2" value="0"> Hadhrat Ibrahim</label><br>
            </div>
            <div class="question" id="q3">
                <p>3. Where was the Holy Prophet born?</p>
                <label><input type="radio" name="q3" value="1"> Makkah</label><br>
                <label><input type="radio" name="q3" value="0"> Madinah</label><br>
                <label><input type="radio" name="q3" value="0"> Jerusalem</label><br>
                <label><input type="radio" name="q3" value="0"> Ta'if</label><br>
            </div>
            <div class="question" id="q4">
                <p>4. What was the name of the Prophet's first wife?</p>
                <label><input type="radio" name="q4" value="1"> Sayyidatina Khadijah</label><br>
                <label><input type="radio" name="q4" value="0"> Sayyidatina Aisha</label><br>
                <label><input type="radio" name="q4" value="0"> Sayyidatina Hafsa</label><br>
                <label><input type="radio" name="q4" value="0"> Sayyidatina Zaynab</label><br>
            </div>
            <div class="question" id="q5">
                <p>5. How many sons did the Holy Prophet have?</p>
                <label><input type="radio" name="q5" value="1"> Three</label><br>
                <label><input type="radio" name="q5" value="0"> Five</label><br>
                <label><input type="radio" name="q5" value="0"> Two</label><br>
                <label><input type="radio" name="q5" value="0"> One</label><br>
            </div>
        `;
    }

    // Add more levels as needed
}
