document.addEventListener("DOMContentLoaded", () => {

    
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }

            questions.forEach(q => {
                if (q !== question) {
                    const a = q.nextElementSibling;
                    a.style.maxHeight = null;
                }
            });
        });
    });
});
