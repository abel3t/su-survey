import React, { useEffect, useState } from 'react';

import { Box, Button, CircularProgress, Dialog, DialogTitle } from '@mui/material';
import LoveLanguageQuestion from '../components/LoveLanguageQuestion';
import ErrorIcon from '@mui/icons-material/Error';
import { ILoveLanguageQuestion } from '../interfaces';
import { LoveLanguageType } from '../constant';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLoveLanguageQuestions,
  updateLoveLanguageQuestion,
  updateLoveLanguageQuestions
} from '../slices/love-language.slice';

const GiftAssessment: React.FC = () => {
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const questions = useSelector(getLoveLanguageQuestions);
  const dispatch = useDispatch();

  useEffect(() => {
    const defaultQuestions = JSON.parse(localStorage.getItem('loveLanguageQuestions') || '[]');

    if (defaultQuestions.length) {
      console.log('defaultQuestions', defaultQuestions);
      dispatch(updateLoveLanguageQuestions(defaultQuestions));
    }
  }, []);

  const onClickSubmit = () => {
    setIsSubmit(true);
    let hasError = false;
    const result: Record<string, number> = {};

    questions.forEach((question: ILoveLanguageQuestion) => {
      if (!Number.isInteger(question.answer)) {
        hasError = true;
      } else {
        const type = question.answers[question?.answer || 0]?.type || LoveLanguageType.A;
        result[type] = (result[type] || 0) + 1;
      }
    });

    if (!hasError) {
      localStorage.setItem('loveLanguageQuestions', JSON.stringify(questions));
      localStorage.setItem('loveLanguageResult', JSON.stringify(result));

      window.open('/love-languages', '_self');
    } else {
      setIsSubmit(false);
      setShowErrorDialog(true);
    }
  };

  return (
      <div className="p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col items-center bg-blue-200" style={{ minHeight: '100vh' }}>
        <div className="w-full md:w-3/4 lg:w-2/3 mb-3 border-gray-400 rounded-lg bg-white">
          <Box
              className="text-2xl md:text-3xl text-center text-white rounded-t-lg border-green-100 py-3 w-full"
              sx={{ bgcolor: 'primary.main' }}
          >
            Ngôn Ngữ Yêu Thương
          </Box>
          <div className="p-2 md:p-3 lg:p-4 text-md">
            <p>Em cảm thấy mình được yêu nhất khi nào? Hay có khi nào em cố gắng diễn đạt tình yêu của mình với ai đó nhưng
            người kia lại không cảm nhận được? À, đó là vì mỗi người đều có một cách diễn đạt và cảm nhận tình yêu khác
            nhau, các nhà nghiên cứu tâm lý gọi đó là những “ngôn ngữ yêu thương.” Hãy khám phá ngôn ngữ yêu thương của
            em nhé. Nếu được, cũng hãy tìm hiểu xem các anh, chị, em của em có ngôn ngữ yêu thương nào nha.</p>

            <p className="mt-1">
              <i className="text-sm">Mỗi câu dưới đây đều có hai lựa chọn, hãy chọn ý nào mà em thấy đúng với mình nhiều
                hơn.</i>
            </p>
          </div>
        </div>

        {
          questions.map((question, index) =>
              <LoveLanguageQuestion key={`q${index + 1}`} question={question} />
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
                Xem Kết Quả
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
