import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../settings/store';
import { giftQuestions } from '../constant';
import { IGiftQuestion } from '../interfaces';

export type GiftState = {
  questions: IGiftQuestion[]
};

const initialState: GiftState = {
  questions: giftQuestions
};

export const giftSlice = createSlice({
  name: 'gift',
  initialState,
  reducers: {
    updateGiftQuestions: (state, action: PayloadAction<any>) => {
      state.questions = action.payload;
    },
    updateGiftQuestion: (state, action: PayloadAction<any>) => {
      const { id, question } = action.payload;
      const index = id - 1;
      if (state.questions[index] && question) {
        state.questions[index] = { ...state.questions[index], ...question };
      }
    }
  }
});

export const {
  updateGiftQuestions,
  updateGiftQuestion
} = giftSlice.actions;

export const getGiftQuestions = (state: RootState) => state.gift.questions;

export default giftSlice.reducer;