import React, { ChangeEvent } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ILoveLanguageQuestion } from '../interfaces';
interface LoveLanguageProps {
  index: number,
  question: ILoveLanguageQuestion;
}

const LoveLanguageQuestion: React.FC<LoveLanguageProps> = ({ index, question }) => {
  const handleChange = (aIndex: number, event: React.ChangeEvent<HTMLInputElement>) => {
    const answers: any = JSON.parse(JSON.stringify(question.answers));
    const value = parseInt(event.target.value);
    answers[aIndex].mark = value;

    const answerMarks = answers.map((answer: any) => answer.mark);

    for (let i = 0; i < answers.length; i++) {
      const idx = answerMarks.indexOf(answers[i].mark);
      answers[i].hasError = answers[i].mark && idx >= 0 && idx !== i;
    }

    answers[aIndex].hasError = answers[aIndex].hasError || value <= 0 || value > 5;

    // dispatch(updateLoveLanguageQuestion({
    //   id: question.id,
    //   question: { ...question, answers, hasError: false },
    // }));
  };

  return (
    <div className={`w-full md:w-3/4 lg:w-2/3 p-2 md:p-3 lg:p-4 mb-3 border-gray-400 rounded-lg bg-white ${question.hasError &&
    'border border-red-500'}`}>
      <div className="text-lg mb-2">
        <strong>Câu {index}:</strong>
      </div>

      <RadioGroup
          aria-label="option"
          name="controlled-radio-buttons-group"
          value={0}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(0, event)}
          sx={{ justifyContent: 'start' }}
          className=""
      >
        {
          question.answers.map((answer: any, index: number) => {
            return <FormControlLabel
                style={{ margin: 0, padding: 0 }}
                value={index} control={<Radio/>} label={answer.text} key={`key-${index}`}/>
          })
        }
      </RadioGroup>

      {
        question.hasError &&
        (
          <div>
            <p className="mt-2 text-xs text-red-600"><ErrorIcon className="mr-2"/>Câu hỏi này là bắt buộc</p>
          </div>
        )
      }
    </div>
  );
};


export default LoveLanguageQuestion;
