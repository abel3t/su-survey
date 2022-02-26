import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import RatingQuestion from './RatingQuestion';

interface GiftQuestionProps {
  index: number,
  question: any;
}

const GiftQuestion: React.FC<GiftQuestionProps> = ({ index, question }) => {
  const handleChange = (event: any) => {
    // dispatch(
    //   updateGiftQuestion({ id: question.id, question: { value: parseInt(event.target.value), hasError: false } }));
  };

  return (
    <div className={`w-full md:w-3/4 lg:w-2/3 p-2 md:p-3 lg:p-3 mb-3 border-gray-400 rounded-lg bg-white ${
      question.hasError &&
      'border border-red-500'}`}>

      <RatingQuestion index={index} id={index} title={question.text}/>

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

export default GiftQuestion;
