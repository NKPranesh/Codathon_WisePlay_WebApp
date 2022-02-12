import React from "react";
import "../stylesheets/question.css";

const question = () => {
    let questions = [
        "Father Elephant is aged three times more than his son. After 8 years, he would be two and a half times of his son’s age. After further 8 years, how many times would he be of his son’s age?",
      ];
    return (
        <div className="QNQuestion">
            {questions[0]}
        </div>
    )
}

export default question;