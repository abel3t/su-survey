import React, { useEffect, useState } from 'react';
import Router from 'next/router'

import { Box, Button, CircularProgress, Dialog, DialogTitle } from '@mui/material';
import LoveLanguageQuestion from '../components/LoveLanguageQuestion';
import ErrorIcon from '@mui/icons-material/Error';
import { ILoveLanguageQuestion } from '../interfaces';
import { LoveLanguageType } from '../constant';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLoveLanguageQuestions,
  updateLoveLanguageQuestions
} from '../slices/love-language.slice';

const GiftAssessment: React.FC = () => {
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const questions = useSelector(getLoveLanguageQuestions);
  const dispatch = useDispatch();

  useEffect(() => {
    const defaultQuestions = JSON.parse(localStorage.getItem('loveLanguageQuestions') || '[]');

    if (defaultQuestions.length) {
      dispatch(updateLoveLanguageQuestions(defaultQuestions.map((question: ILoveLanguageQuestion, index: number) => {
        return {
          ...question,
          text: questions[index].text,
        }
      })));
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

      Router.push('/love-languages').then(() => window.scrollTo(0, 0));
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
            Ng??n Ng??? Y??u Th????ng
          </Box>
          <div className="p-2 md:p-3 lg:p-4 text-md">
            <p>Em c???m th???y m??nh ???????c y??u nh???t khi n??o? Hay c?? khi n??o em c??? g???ng di???n ?????t t??nh y??u c???a m??nh v???i ai ???? nh??ng
            ng?????i kia l???i kh??ng c???m nh???n ???????c? ??, ???? l?? v?? m???i ng?????i ?????u c?? m???t c??ch di???n ?????t v?? c???m nh???n t??nh y??u kh??c
            nhau, c??c nh?? nghi??n c???u t??m l?? g???i ???? l?? nh???ng ???ng??n ng??? y??u th????ng.??? H??y kh??m ph?? ng??n ng??? y??u th????ng c???a
            em nh??. N???u ???????c, c??ng h??y t??m hi???u xem c??c anh, ch???, em c???a em c?? ng??n ng??? y??u th????ng n??o nha.</p>

            <p className="mt-1">
              <i className="text-sm">M???i c??u d?????i ????y ?????u c?? hai l???a ch???n, h??y ch???n ?? n??o m?? em th???y ????ng v???i m??nh nhi???u
                h??n.</i>
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
              <Button variant="contained" style={{ marginLeft: 15, height: 35, minWidth: 100 }}>
                <CircularProgress sx={{ color: '#fff' }} size={25}/>
              </Button>
          }

          {
              !isSubmit &&
              <Button variant="contained" onClick={onClickSubmit}
                      style={{ marginLeft: 15, height: 35, minWidth: 90 }}>
                Xem K???t Qu???
              </Button>
          }
        </Box>

        <Dialog onClose={() => setShowErrorDialog(false)} open={showErrorDialog} sx={{ top: -400 }}>
          <DialogTitle className="text-md text-red-600"><ErrorIcon
              className="mr-2"/><span>H??y tr??? l???i t???t c??? c??u h???i n??o!</span></DialogTitle>
        </Dialog>
      </div>
  );
};

export default GiftAssessment;
