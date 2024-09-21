/* import correctImage from "/images/icon-correct.svg";
import incorrectImage from "/images/icon-incorrect.svg";
 */
function Option({ option, dispatch, question, answer, userAnswer }) {
  const hasAnswered = answer !== null;

  let correctAnswerBackgroundColor = "";
  let incorrectAnswerBackgroundColor = "";

  if (hasAnswered) {
    if (option === question.answer) {
      correctAnswerBackgroundColor = "bg-green-200";
    } else if (option !== userAnswer) {
      incorrectAnswerBackgroundColor = "bg-red-200";
    }
  }

  return (
    <button
      className={`option flex items-center justify-between gap-[5px] hover:text-blue-500 ${
        hasAnswered && "cursor-not-allowed" 
      } ${option === question.answer ? correctAnswerBackgroundColor : option === userAnswer ? incorrectAnswerBackgroundColor : ""}`}
      onClick={() => dispatch({ type: "newAnswer", payload: option })}
      disabled={hasAnswered}
    >
      <h3>{option}</h3>

     {/*  {answer && (
        <img
          src={option === question.answer ? correctImage : incorrectImage}
          alt=""
          className="w-[20px]"
        />
      )} */}
    </button>
  );
}

export default Option;