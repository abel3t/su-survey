import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../settings/store';
import { loveLanguageQuestions } from '../constant';
import { ILoveLanguageQuestion } from '../interfaces';

export type LoveLanguageState = {
  questions: ILoveLanguageQuestion[]
};

const initialState: LoveLanguageState = {
  questions: loveLanguageQuestions
};

export const loveLanguageSlice = createSlice({
  name: 'loveLanguage',
  initialState,
  reducers: {
    updateLoveLanguageQuestions: (state, action: PayloadAction<any>) => {
      state.questions = action.payload;
    },
    updateLoveLanguageQuestion: (state, action: PayloadAction<any>) => {
      const { id, question } = action.payload;
      const index = id - 1;
      if (state.questions[index] && question) {
        state.questions[index] = { ...state.questions[index], ...question };
      }
    }
  }
});

export const {
  updateLoveLanguageQuestions,
  updateLoveLanguageQuestion
} = loveLanguageSlice.actions;

export const getLoveLanguageQuestions = (state: RootState) => state.loveLanguage.questions;

export default loveLanguageSlice.reducer;