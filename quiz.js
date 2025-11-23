// Global Variables
let currentSection = 1;
let currentQuestionCount = 30;
let currentQuestionIndex = 0;
let questions = [];
let userAnswers = [];
let startTime = 0;
let timerInterval = null;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Quiz page initialized');
    initializeEventListeners();
});

// Initialize Event Listeners
function initializeEventListeners() {
    // Add event listeners to all subsection buttons
    const subsectionButtons = document.querySelectorAll('.subsection-btn');
    subsectionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const section = parseInt(this.getAttribute('data-section'));
            const count = parseInt(this.getAttribute('data-count'));
            startQuiz(section, count);
        });
    });
    
    // Quiz navigation buttons
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (prevBtn) prevBtn.addEventListener('click', previousQuestion);
    if (nextBtn) nextBtn.addEventListener('click', nextQuestion);
    if (submitBtn) submitBtn.addEventListener('click', submitQuiz);
    if (downloadBtn) downloadBtn.addEventListener('click', downloadReport);
}

// Start Quiz
function startQuiz(section, questionCount) {
    console.log(`Starting quiz - Section: ${section}, Questions: ${questionCount}`);
    
    currentSection = section;
    currentQuestionCount = questionCount;
    
    // Get questions for this section
    if (!quizData[section] || !quizData[section][questionCount] || quizData[section][questionCount].length === 0) {
        alert('Questions for this section are not yet available. Please choose Section 1 with 30 questions!');
        return;
    }
    
    questions = [...quizData[section][questionCount]];
    
    // Shuffle questions for variety
    questions = shuffleArray(questions);
    
    // Take only the requested number of questions
    questions = questions.slice(0, questionCount);
    
    // Initialize user answers
    userAnswers = new Array(questions.length).fill(null);
    currentQuestionIndex = 0;
    
    // Start timer
    startTime = Date.now();
    startTimer();
    
    // Show quiz screen
    document.getElementById('sectionScreen').classList.add('hidden');
    document.getElementById('quizScreen').classList.remove('hidden');
    document.getElementById('sectionInfo').textContent = `Section ${section}`;
    
    // Render question navigation
    renderQuestionNav();
    
    // Display first question
    displayQuestion();
}

// Timer Functions
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsed / 60);
    const seconds = elapsed % 60;
    document.getElementById('timer').textContent = 
        `Time: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
    }
}

// Question Display
function displayQuestion() {
    const question = questions[currentQuestionIndex];
    
    document.getElementById('questionCounter').textContent = 
        `Question ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('questionText').textContent = question.question;
    
    // Display options
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        
        // Check if this option was previously selected
        if (userAnswers[currentQuestionIndex] === index) {
            optionDiv.classList.add('selected');
        }
        
        optionDiv.addEventListener('click', function() {
            selectOption(index);
        });
        
        optionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    document.getElementById('prevBtn').disabled = currentQuestionIndex === 0;
    
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    document.getElementById('nextBtn').style.display = isLastQuestion ? 'none' : 'inline-block';
    document.getElementById('submitBtn').style.display = isLastQuestion ? 'inline-block' : 'none';
    
    // Update question navigation
    updateQuestionNav();
}

function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update UI
    const options = document.querySelectorAll('.option');
    options.forEach((opt, idx) => {
        opt.classList.remove('selected');
        if (idx === optionIndex) {
            // Small delay to retrigger animation if same option clicked again
            setTimeout(() => {
                opt.classList.add('selected');
            }, 10);
        }
    });
    
    updateQuestionNav();
}

// Navigation Functions
function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion();
    }
}

function jumpToQuestion(index) {
    currentQuestionIndex = index;
    displayQuestion();
}

// Question Navigation Rendering
function renderQuestionNav() {
    const navContainer = document.getElementById('questionNav');
    navContainer.innerHTML = '';
    
    questions.forEach((_, index) => {
        const btn = document.createElement('div');
        btn.className = 'question-num';
        btn.textContent = index + 1;
        btn.addEventListener('click', function() {
            jumpToQuestion(index);
        });
        navContainer.appendChild(btn);
    });
}

function updateQuestionNav() {
    const navButtons = document.querySelectorAll('.question-num');
    navButtons.forEach((btn, index) => {
        btn.classList.remove('answered', 'current');
        
        if (index === currentQuestionIndex) {
            btn.classList.add('current');
        } else if (userAnswers[index] !== null) {
            btn.classList.add('answered');
        }
    });
}

// Submit Quiz
function submitQuiz() {
    // Check if all questions are answered
    const unanswered = userAnswers.filter(a => a === null).length;
    
    if (unanswered > 0) {
        if (!confirm(`You have ${unanswered} unanswered question(s). Do you want to submit anyway?`)) {
            return;
        }
    }
    
    stopTimer();
    calculateScore();
}

// Calculate Score
function calculateScore() {
    let correct = 0;
    let wrong = 0;
    
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.correct) {
            correct++;
        } else if (userAnswers[index] !== null) {
            wrong++;
        }
    });
    
    const totalAttempted = correct + wrong;
    const percentage = totalAttempted > 0 ? Math.round((correct / questions.length) * 100) : 0;
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    
    displayScore(correct, wrong, percentage, timeTaken);
}

// Display Score
function displayScore(correct, wrong, percentage, timeTaken) {
    document.getElementById('quizScreen').classList.add('hidden');
    document.getElementById('scoreScreen').classList.remove('hidden');
    
    // Set score details
    document.getElementById('finalScore').textContent = `${correct}/${questions.length}`;
    document.getElementById('percentage').textContent = `${percentage}%`;
    document.getElementById('correctCount').textContent = correct;
    document.getElementById('wrongCount').textContent = wrong;
    
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    document.getElementById('timeTaken').textContent = 
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    // Celebration animation with different levels
    const celebDiv = document.getElementById('celebrationAnimation');
    let celebText = '';
    
    if (percentage >= 90) {
        celebText = '🎉🏆🎊 OUTSTANDING! 🎊🏆🎉';
        celebDiv.className = 'animate-mega';
        createFireworks(30);
        createConfetti(100);
    } else if (percentage >= 60) {
        celebText = '🎉✨ GREAT JOB! ✨🎉';
        celebDiv.className = 'animate-super';
        createConfetti(50);
    } else if (percentage >= 40) {
        celebText = '👍 GOOD EFFORT! 👍';
        celebDiv.className = 'animate-bounce';
        createConfetti(20);
    } else {
        celebText = '💪 KEEP TRYING! 💪';
        celebDiv.className = 'animate-bounce';
    }
    
    celebDiv.textContent = celebText;
    
    // Display review
    displayReview();
}

// Create Confetti Animation
function createConfetti(count) {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DFE6E9', '#A29BFE'];
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (2 + Math.random() * 3) + 's';
            confetti.style.animationDelay = Math.random() + 's';
            document.body.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 5000);
        }, i * 50);
    }
}

// Create Fireworks Animation for 90+ scores
function createFireworks(count) {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#FF1493', '#00FF00'];
    
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const x = 20 + Math.random() * 60; // Random position (20% to 80% of screen width)
            const y = 20 + Math.random() * 40; // Random position (20% to 60% of screen height)
            
            // Create explosion particles
            for (let j = 0; j < 30; j++) {
                const particle = document.createElement('div');
                particle.className = 'firework';
                particle.style.left = x + '%';
                particle.style.top = y + '%';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                const angle = (Math.PI * 2 * j) / 30;
                const distance = 100 + Math.random() * 150;
                const tx = Math.cos(angle) * distance;
                const ty = Math.sin(angle) * distance;
                
                particle.style.setProperty('--tx', tx + 'px');
                particle.style.setProperty('--ty', ty + 'px');
                particle.style.animation = `fireworkExplode ${1 + Math.random()}s ease-out forwards`;
                
                document.body.appendChild(particle);
                
                setTimeout(() => particle.remove(), 2000);
            }
        }, i * 200);
    }
}

// Display Review
function displayReview() {
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.innerHTML = '';
    
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        if (!isCorrect && userAnswer !== null) {
            const reviewDiv = document.createElement('div');
            reviewDiv.className = `review-item ${isCorrect ? 'correct' : 'wrong'}`;
            
            reviewDiv.innerHTML = `
                <strong>Question ${index + 1}:</strong>
                <p>${question.question}</p>
                <p style="color: #FF6B6B;"><strong>Your Answer:</strong> ${question.options[userAnswer] || 'Not Answered'}</p>
                <p style="color: #32CD32;"><strong>Correct Answer:</strong> ${question.options[question.correct]}</p>
                <p><strong>Explanation:</strong> ${question.explanation}</p>
            `;
            
            reviewContainer.appendChild(reviewDiv);
        }
    });
    
    if (reviewContainer.innerHTML === '') {
        reviewContainer.innerHTML = '<div class="review-item correct"><p style="text-align: center; font-size: 1.5em;">🎉 Perfect Score! No wrong answers to review! 🎉</p></div>';
    }
}

// Download Report as PDF
function downloadReport() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    let yPos = 20;
    const lineHeight = 7;
    const pageHeight = 280;
    const margin = 20;
    const maxWidth = 170;
    
    // Title
    doc.setFontSize(20);
    doc.setFont(undefined, 'bold');
    doc.text('SAP CPI QUIZ - SCORE REPORT', 105, yPos, { align: 'center' });
    yPos += 15;
    
    // Quiz Details
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('QUIZ DETAILS', margin, yPos);
    yPos += 10;
    
    doc.setFontSize(10);
    doc.setFont(undefined, 'normal');
    doc.text(`Section: ${currentSection}`, margin, yPos);
    yPos += lineHeight;
    doc.text(`Total Questions: ${questions.length}`, margin, yPos);
    yPos += lineHeight;
    doc.text(`Score: ${document.getElementById('finalScore').textContent}`, margin, yPos);
    yPos += lineHeight;
    doc.text(`Percentage: ${document.getElementById('percentage').textContent}`, margin, yPos);
    yPos += lineHeight;
    doc.text(`Time Taken: ${document.getElementById('timeTaken').textContent}`, margin, yPos);
    yPos += lineHeight;
    doc.text(`Correct Answers: ${document.getElementById('correctCount').textContent}`, margin, yPos);
    yPos += lineHeight;
    doc.text(`Wrong Answers: ${document.getElementById('wrongCount').textContent}`, margin, yPos);
    yPos += 15;
    
    // Detailed Review
    doc.setFontSize(12);
    doc.setFont(undefined, 'bold');
    doc.text('DETAILED QUESTION REVIEW', margin, yPos);
    yPos += 10;
    
    doc.setFontSize(9);
    
    questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        
        // Check if we need a new page
        if (yPos > pageHeight - 60) {
            doc.addPage();
            yPos = 20;
        }
        
        // Question number
        doc.setFont(undefined, 'bold');
        doc.text(`Question ${index + 1}:`, margin, yPos);
        yPos += lineHeight;
        
        // Question text
        doc.setFont(undefined, 'normal');
        const questionLines = doc.splitTextToSize(question.question, maxWidth);
        questionLines.forEach(line => {
            if (yPos > pageHeight - 20) {
                doc.addPage();
                yPos = 20;
            }
            doc.text(line, margin, yPos);
            yPos += lineHeight;
        });
        
        // Your Answer
        doc.setFont(undefined, 'bold');
        doc.text('Your Answer: ', margin, yPos);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(isCorrect ? 0 : 255, isCorrect ? 128 : 0, 0);
        const yourAns = userAnswer !== null ? question.options[userAnswer] : 'Not Answered';
        doc.text(yourAns, margin + 30, yPos);
        doc.setTextColor(0, 0, 0);
        yPos += lineHeight;
        
        // Correct Answer
        doc.setFont(undefined, 'bold');
        doc.text('Correct Answer: ', margin, yPos);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(0, 128, 0);
        doc.text(question.options[question.correct], margin + 35, yPos);
        doc.setTextColor(0, 0, 0);
        yPos += lineHeight;
        
        // Status
        doc.setFont(undefined, 'bold');
        doc.text('Status: ', margin, yPos);
        doc.setFont(undefined, 'normal');
        doc.setTextColor(isCorrect ? 0 : 255, isCorrect ? 128 : 0, 0);
        doc.text(isCorrect ? 'CORRECT' : 'WRONG', margin + 20, yPos);
        doc.setTextColor(0, 0, 0);
        yPos += lineHeight;
        
        // Difficulty
        doc.setFont(undefined, 'bold');
        doc.text('Difficulty: ', margin, yPos);
        doc.setFont(undefined, 'normal');
        doc.text(question.difficulty.toUpperCase(), margin + 25, yPos);
        yPos += lineHeight;
        
        // Explanation
        doc.setFont(undefined, 'bold');
        doc.text('Explanation:', margin, yPos);
        yPos += lineHeight;
        doc.setFont(undefined, 'normal');
        const explanationLines = doc.splitTextToSize(question.explanation, maxWidth);
        explanationLines.forEach(line => {
            if (yPos > pageHeight - 20) {
                doc.addPage();
                yPos = 20;
            }
            doc.text(line, margin + 5, yPos);
            yPos += lineHeight;
        });
        
        yPos += 5;
        doc.line(margin, yPos, 190, yPos);
        yPos += 8;
    });
    
    // Footer on last page
    const pageCount = doc.internal.getNumberOfPages();
    doc.setPage(pageCount);
    doc.setFontSize(8);
    doc.setFont(undefined, 'italic');
    doc.text(`Generated on: ${new Date().toLocaleString()}`, 105, pageHeight + 10, { align: 'center' });
    
    // Save the PDF
    const timestamp = new Date().toISOString().slice(0, 10);
    doc.save(`SAP_CPI_Quiz_Section${currentSection}_${timestamp}.pdf`);
}

// Utility Functions
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}