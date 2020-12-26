const correctAnswers = ["C", "B", "A", "D", "B", "C", "A", "A", "B", "D"];
const form = document.querySelector('form');
const formOpt = document.querySelector('.form-option');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();

    // declaring user answers...

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, 
        form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value,
        form.q10.value];

    userAnswers.forEach((answer, index) => {

        // checking user answers...
        if (answer === correctAnswers[index]) {
            score += 10;
        }
    });

    // displaying the results...
    scrollTo(0, 0);
    result.style.display = 'flex';

    // animating the score...
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `${output}%`;
        
        if(output === score) {
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);


    if (score === 100 ) {
    
        const timeInt = setInterval(heartRain, 500);

        setTimeout(() => {
            clearInterval(timeInt);
        }, 5000);

    } else {
        alert("You didn't answer all questions correctly. Please try again")
    }
    
});

function heartRain() {

    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = `🎄`;
    document.body.appendChild(heart);

    // heart.style.display = 'flex';
    heart.style.left = Math.random() * 100 + `vw`;
    heart.style.animationDuration = Math.random() * 2 + 3 + `s`;
    
    setTimeout(() => {
        heart.remove();
    }, 4000);

    // setTimeout(() => {
    //     heart.style.display = 'none';
    // }, 1000);
    // setInterval(heartRain, 1000);
}
