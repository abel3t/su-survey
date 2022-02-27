import React, { useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import ErrorIcon from '@mui/icons-material/Error';
import { styled } from '@mui/material';
import { useAtom } from 'jotai';
import { updateGiftQuestionAtom } from '../settings/store';
import { IGiftQuestion } from '../interfaces';

interface IRatingQuestionProps {
  question: IGiftQuestion;
}

const GiftQuestion: React.FC<IRatingQuestionProps> = ({ question: giftQuestion }) => {
  const [, updateQuestions] = useAtom(updateGiftQuestionAtom);
  const [question, setQuestion] = useState(giftQuestion);


  const { id, text, hasError } = giftQuestion;
  const isRequired = true;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newAnswer = parseInt(event.target.value) || 0;
    updateQuestions({
      index: id - 1,
      question: { answer: newAnswer }
    });

    setQuestion({ ...question, answer: newAnswer });
  };
  return (
      <div className={`w-full md:w-3/4 lg:w-2/3 p-2 md:p-3 lg:p-4 mb-3 border-gray-400 rounded-lg bg-white ${isRequired && hasError &&
      'border border-red-500'}`}>
        <div className="text-lg mb-2">
          {id}. {text} {isRequired && <span className="text-red-600">*</span>}
        </div>

        <div className="flex items-end justify-around">
          <div className="pb-2 w-1/12 md:w-1/6 text-xs md:text-sm lg:text-md">Không giống con</div>
          <RadioGroup
              aria-label="option"
              name="controlled-radio-buttons-group"
              value={question.answer ?? -1}
              onChange={handleChange}
              sx={{ flexDirection: 'row', justifyContent: 'space-around' }}
              className="w-2/3 md:w-1/2"
          >
            {
              Options(5)
            }
          </RadioGroup>
          <div className="pb-2 w-1/12 md:w-1/6 text-xs md:text-sm lg:text-md">
            Rất giống con
          </div>
        </div>

        {
            isRequired && hasError &&
            (
                <div>
                  <p className="mt-2 text-xs text-red-600"><ErrorIcon className="mr-2"/>Câu hỏi này là bắt buộc</p>
                </div>
            )
        }
      </div>
  );
};

function Options(n: number) {
  const options = [];
  const StyledRadio = styled(Radio)(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
      }
    },
    [theme.breakpoints.up('md')]: {
      '& .MuiSvgIcon-root': {
        fontSize: 22,
      }
    },
    [theme.breakpoints.up('lg')]: {
      '& .MuiSvgIcon-root': {
        fontSize: 25,
      }
    },
  }));

  for (let i = 0; i <= n; i++) {
    options.push(
        <FormControlLabel
            style={{ margin: 0, padding: 0 }}
            labelPlacement="top" value={i} control={
          <StyledRadio sx={{
            '& .MuiButtonBase-root-MuiRadio-root': {
              padding: 0
            },
          }} />} label={i} key={`key-${i}`}
        />
    );
  }

  return options;
}

export default GiftQuestion;