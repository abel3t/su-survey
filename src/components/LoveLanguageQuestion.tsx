import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { ILoveLanguageQuestion } from '../interfaces';
import { useDispatch } from 'react-redux';
import { updateLoveLanguageQuestion } from '../slices/love-language.slice';

interface LoveLanguageProps {
  index: number,
  question: ILoveLanguageQuestion;
  hasError?: boolean;
  onChange?: any;
}

const LoveLanguageQuestion: React.FC<LoveLanguageProps> = ({ index, question, hasError }) => {
  const dispatch = useDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateLoveLanguageQuestion({
      id: index,
      question: { answer: parseInt(event.target.value) || 0 }
    }))
    // onChange(index)
  };

  return (
    <div className={`w-full md:w-3/4 lg:w-2/3 p-2 md:p-3 lg:p-4 mb-3 border-gray-400 rounded-lg bg-white ${hasError &&
    'border border-red-500'}`}>
      <div className="text-lg mb-2">
        <strong>Câu {index}:</strong>
      </div>

      <RadioGroup
          aria-label="option"
          name="controlled-radio-buttons-group"
          value={question.answer}
          onChange={handleChange}
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
        hasError &&
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
