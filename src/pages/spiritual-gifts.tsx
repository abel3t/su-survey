import React, {useEffect, useState} from 'react';
import { useAtom } from "jotai";

import { Box, Button, CircularProgress, Dialog, DialogTitle } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

import GiftQuestion from '../components/GiftQuestion';
import { giftQuestionsAtom, updateGiftQuestionAtom } from 'settings/store';

const SpiritualGifts: React.FC = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ showErrorDialog, setShowErrorDialog ] = useState(false);
  const [ isSubmit, setIsSubmit ] = useState(false);
  const [giftQuestions, setGiftQuestions] = useAtom(giftQuestionsAtom);
  const [, updateGiftQuestion] = useAtom(updateGiftQuestionAtom);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [ currentPage ]);

  useEffect(() => {
    const defaultQuestions = JSON.parse(localStorage.getItem('giftQuestions') || 'null');

    if (defaultQuestions) {
      setGiftQuestions(defaultQuestions);
    }
  }, []);

  const onClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const onClickNext = () => {
    setIsSubmit(false);

    let hasError = false;
    const result: Record<string, any> = {};
    giftQuestions
      .slice((currentPage - 1) * 10, currentPage * 10)
      .forEach((question: any) => {
        if (!question.value) {
          hasError = true;
          updateGiftQuestion(1);
          result[question.id] = { type: question.type, mark: 0 };
        } else {
          result[question.id] = { type: question.type, mark: question.value };
        }
      });

    if (!hasError) {
      setCurrentPage(currentPage + 1);
    } else {
      setShowErrorDialog(true);
    }
  };

  const onClickSubmit = () => {
    setIsSubmit(true);

    let hasError = false;
    const result: Record<string, any> = {};
    Object.values(giftQuestions).forEach((question: any) => {
      if (!question.value) {
        hasError = true;
        // dispatch(updateGiftQuestion({ id: question.id, question: { hasError: true } }));
        result[question.id] = { type: question.type, mark: 0 };
      } else {
        result[question.id] = { type: question.type, mark: question.value };
      }
    });

    if (!hasError) {
      localStorage.setItem('giftQuestions', JSON.stringify(giftQuestions));
      localStorage.setItem('giftResultV2', JSON.stringify(result));

      window.open('/', '_self');
    } else {
      setShowErrorDialog(true);
      setIsSubmit(false);
    }
  };

  return (
    <div className="p-2 sm:p-3 md:p-4 lg:p-5 flex flex-col items-center bg-blue-200" style={{ minHeight: '100vh' }}>
      <div className="w-full md:w-3/4 lg:w-2/3 mb-3 border-gray-400 rounded-lg bg-white">
        <Box
          className="text-2xl md:text-3xl text-center text-white rounded-t-lg border-green-100 py-3 w-full"
          sx={{ bgcolor: 'primary.main' }}
        >
          Ân tứ thuộc linh
        </Box>
        <div className="p-2 md:p-3 lg:p-4 text-md">
          Để giúp thiếu nhi có cái nhìn bao quát hơn về ân tứ của mình, khảo sát này có thể được thực hiện bởi thiếu nhi, phụ huynh và giáo viên của em đó.
        </div>
      </div>

      {
        Object.values(giftQuestions)
          .slice((currentPage - 1) * 10, currentPage * 10)
          .map((question) =>
            <GiftQuestion
              index={question.id}
              key={question.id}
              question={question}
            />
          )
      }

      <div className="w-full md:w-3/4 lg:w-2/3 mb-3 border-gray-400 rounded-lg">
        {
          currentPage === 1 &&
          <Button variant="contained" onClick={onClickNext}>
            Next
          </Button>
        }

        {
          currentPage > 1 && currentPage < 14 &&
          <Box>
            <Button variant="contained" onClick={onClickPrev} sx={{ height: 35, minWidth: 60 }}>
              Prev
            </Button>
            <Button variant="contained" onClick={onClickNext} style={{ marginLeft: 10, height: 35, minWidth: 60 }}>
              Next
            </Button>
          </Box>
        }

        {
          currentPage === 14 &&
          <Box>
            <Button variant="contained" onClick={onClickPrev} sx={{ height: 35, minWidth: 60 }}>
              Prev
            </Button>
            <>
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
            </>
          </Box>
        }
      </div>

      <Dialog onClose={() => setShowErrorDialog(false)} open={showErrorDialog} sx={{ top: -400 }}>
        <DialogTitle className="text-md text-red-600"><ErrorIcon
          className="mr-2"/><span>Hãy trả lời tất cả câu hỏi nào!</span></DialogTitle>
      </Dialog>
    </div>
  );
};

export default SpiritualGifts;
