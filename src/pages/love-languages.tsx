import React, {useEffect, useState} from 'react';

import {Box, Button, CircularProgress, Dialog, DialogTitle} from '@mui/material';
import LoveLanguageQuestion from '../components/LoveLanguageQuestion';
import ErrorIcon from "@mui/icons-material/Error";
import { useAtom } from 'jotai';
import { loveLanguageQuestionsAtom } from '../settings/store';


const GiftAssessment: React.FC = () => {
  const [ showErrorDialog, setShowErrorDialog ] = useState(false);
  const [ isSubmit, setIsSubmit ] = useState(false);
  const [questions, setQuestions] = useAtom(loveLanguageQuestionsAtom);

  useEffect(() => {
    const defaultQuestions = JSON.parse(localStorage.getItem('loveLanguageQuestions') || 'null');

    if (defaultQuestions) {
      setQuestions(defaultQuestions);
    }
  }, []);

  const onClickSubmit = () => {
    setIsSubmit(true);
    let hasError = false;
    const result: any = {};

    questions.forEach((question: any) => {
      question.answers.forEach((answer: any) => {
        result[answer.type] = {
          type: answer.type,
          mark: (result[answer.type]?.mark || 0) + answer.mark || 0
        }
        if (answer.hasError || !answer.mark) {
          hasError = true;
        }
      });

      if (hasError) {
        // dispatch(updateLoveLanguageQuestion({
        //   id:  question.id,
        //   question: { ...question, hasError: true },
        // }));
      }
    });

    if (!hasError) {
      localStorage.setItem('loveLanguageQuestions', JSON.stringify(questions));
      localStorage.setItem('loveLanguageResultV2', JSON.stringify(result));

      window.open('/', '_self');
    } else {
      setIsSubmit(false);
      setShowErrorDialog(true);
    }
  }

  return (
    <div className="p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col items-center bg-blue-200" style={{ minHeight: '100vh' }}>
      <div className="w-full md:w-3/4 lg:w-2/3 mb-3 border-gray-400 rounded-lg bg-white">
        <Box
          className="text-2xl md:text-3xl text-center text-white rounded-t-lg border-green-100 py-3 w-full"
          sx={{ bgcolor: 'primary.main' }}
        >
          Ngôn ngữ yêu thương
        </Box>
        <div className="p-2 md:p-3 lg:p-4 text-md">
          Em cảm thấy mình được yêu nhất khi nào? Hay có khi nào em cố gắng diễn đạt tình yêu của mình với ai đó nhưng người kia lại không cảm nhận được? À, đó là vì mỗi người đều có một cách diễn đạt và cảm nhận tình yêu khác nhau, các nhà nghiên cứu tâm lý gọi đó là những “ngôn ngữ yêu thương.” Hãy khám phá ngôn ngữ yêu thương của em nhé. Nếu được, cũng hãy tìm hiểu xem các anh, chị, em của em có ngôn ngữ yêu thương nào nha.

          <p className="mt-1">
            <i className="text-sm">Mỗi câu dưới đây đều có hai lựa chọn, hãy chọn ý nào mà em thấy đúng với mình nhiều hơn, rồi khoanh tròn vào chữ cái in hoa ở cuối ý đó.</i>
          </p>
        </div>
      </div>

      {
        questions.map((question, index) =>
          <LoveLanguageQuestion key={`q${index+1}`} index={index + 1} question={question} />
        )
      }

      <Box>
        {
          isSubmit &&
          <Button variant="contained" style={{ marginLeft: 15, height: 35, minWidth: 90 }}>
            <CircularProgress sx={{ color: '#fff' }} size={25}/>
          </Button>
        }

        {
          !isSubmit &&
          <Button variant="contained" onClick={onClickSubmit}
                  style={{ marginLeft: 15, height: 35, minWidth: 90 }}>
            Submit
          </Button>
        }
      </Box>

      <Dialog onClose={() => setShowErrorDialog(false)} open={showErrorDialog} sx={{ top: -400 }}>
        <DialogTitle className="text-md text-red-600"><ErrorIcon
            className="mr-2"/><span>Hãy trả lời tất cả câu hỏi nào!</span></DialogTitle>
      </Dialog>
    </div>
  );
};

export default GiftAssessment;
