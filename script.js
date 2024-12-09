const questions = document.querySelectorAll(".question");

questions.forEach((ques) => {
    const plus = ques.querySelector(".question-plus");
    const minus = ques.querySelector(".question-minus");
    const answer = ques.querySelector(".answer");
    const answerText = ques.querySelector(".answer h5");


    plus.addEventListener("click", () => {
        gsap.to(answer, {
            duration: 0.5,
            height: "auto",
            onStart: () => {
                plus.style.display = "none"
                minus.style.display = "block"
                answer.style.display = "block"
            }
        })
        gsap.to(answerText, {
            duration: 0.8,
            opacity: 1
        })
    });

    minus.addEventListener("click", () => {
        gsap.to(answerText, {
            duration: 0.15,
            opacity: 0
        })
        gsap.to(answer, {
            duration: 0.5,
            height: 0,
            onComplete: () => {
                answer.style.display = "none"
                plus.style.display = "block"
                minus.style.display = "none"
            }
        })
    })
});