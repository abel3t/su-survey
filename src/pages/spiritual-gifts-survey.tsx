import React, { useEffect, useState } from 'react';

import { Box, Button, CircularProgress, Dialog, DialogTitle } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';

import { IGiftQuestion } from '../interfaces';
import GiftQuestion from '../components/GiftQuestion';
import { useDispatch, useSelector } from 'react-redux';
import { getGiftQuestions, updateGiftQuestion, updateGiftQuestions } from '../slices/gift.slice';
import Router from 'next/router';

const SpiritualGiftsSurvey: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const giftQuestions = useSelector(getGiftQuestions);
  const dispatch = useDispatch();

  const MAX_PAGE = Math.ceil(giftQuestions.length / 10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    const defaultQuestions = JSON.parse(localStorage.getItem('giftQuestions') || 'null');

    if (defaultQuestions) {
      dispatch(updateGiftQuestions(defaultQuestions.map((question: IGiftQuestion, index: number) => {
        return {
          ...question,
          text: giftQuestions[index].text
        }
      })));
    }
  }, []);

  const onClickPrev = () => {
    setCurrentPage(currentPage - 1);
  };

  const onClickNext = () => {
    setIsSubmit(false);

    let hasError = false;
    const newErrorMap: Record<string, boolean> = {};
    const result: Record<string, number> = {};
    giftQuestions
        .slice((currentPage - 1) * 10, currentPage * 10)
        .forEach((question: IGiftQuestion) => {
          if (!Number.isInteger(question.answer)) {
            hasError = true;
            newErrorMap[question.id] = true;
            dispatch(updateGiftQuestion({
              id: question.id,
              question: { hasError: true }
            }));
          } else {
            result[question.type] = (result[question.type] || 0) + (question.answer || 0);
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
    const result: Record<string, number> = {};
    giftQuestions.forEach((question: IGiftQuestion) => {
      if (question.answer === undefined) {
        hasError = true;
        dispatch(updateGiftQuestion({
          id: question.id,
          question: { hasError: true }
        }));
      } else {
        result[question.type] = (result[question.type] || 0) + question.answer;
      }
    });

    if (!hasError) {
      localStorage.setItem('giftQuestions', JSON.stringify(giftQuestions));
      localStorage.setItem('giftResult', JSON.stringify(result));

      Router.push('/spiritual-gifts').then(() => window.scrollTo(0, 0));
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
            Kh???o S??t ??n T???
          </Box>
          <div className="p-2 md:p-3 lg:p-4 text-md">
            <p>????? gi??p thi???u nhi c?? c??i nh??n bao qu??t h??n v??? ??n t??? c???a m??nh, kh???o s??t n??y c?? th??? ???????c th???c hi???n b???i thi???u
            nhi, ph??? huynh v?? gi??o vi??n c???a em ????.
            </p>
            <p className="mt-1">
              <i className="text-sm">V???i m???i c??u d?????i ????y, h??y ch???n s??? ??i???m t????ng ???ng v???i kh??? n??ng c???a con trong vi???c m??
                c??u ????? c???p. 5 ??i???m l?? ??i???m s??? cao nh???t, 0 ??i???m l?? ??i???m s??? th???p nh???t.</i>
            </p>
          </div>
        </div>

        {
          giftQuestions
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((question) =>
                  <GiftQuestion
                      key={question.id}
                      question={question}
                  />
              )
        }

        <div className="w-full md:w-3/4 lg:w-2/3 mb-3 border-gray-400 rounded-lg">
          {
              currentPage === 1 &&
              <Button variant="contained" onClick={onClickNext}>
                Ti???p theo
              </Button>
          }

          {
              currentPage > 1 && currentPage < MAX_PAGE &&
              <Box>
                <Button variant="contained" onClick={onClickPrev} sx={{ height: 35, minWidth: 60 }}>
                  Tr??? l???i
                </Button>
                <Button variant="contained" onClick={onClickNext} style={{ marginLeft: 10, height: 35, minWidth: 60 }}>
                  Ti???p theo
                </Button>
              </Box>
          }

          {
              currentPage === MAX_PAGE &&
              <Box>
                <Button variant="contained" onClick={onClickPrev} sx={{ height: 35, minWidth: 60 }}>
                  Tr??? l???i
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
                        G???i k???t qu???
                      </Button>
                  }
                </>
              </Box>
          }
        </div>

        <Dialog onClose={() => setShowErrorDialog(false)} open={showErrorDialog} sx={{ top: -400 }}>
          <DialogTitle className="text-md text-red-600"><ErrorIcon
              className="mr-2"/><span>H??y tr??? l???i t???t c??? c??u h???i n??o!</span></DialogTitle>
        </Dialog>
      </div>
  );
};

export default SpiritualGiftsSurvey;
