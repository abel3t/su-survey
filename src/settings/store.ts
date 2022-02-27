import { atom } from "jotai";
import { giftQuestions, loveLanguageQuestions } from '../constant';

export const giftQuestionsAtom = atom(giftQuestions);
export const loveLanguageQuestionsAtom = atom(loveLanguageQuestions);

export const updateGiftQuestionAtom = atom(null,  (get, set, { index, question }: any) => {
  const questions = get(giftQuestionsAtom);
  questions[index] = { ...questions[index], ...(question || {}) };

  return set(giftQuestionsAtom, questions);
});

export const updateLoveLanguageQuestionsAtom = atom(null,  (get, set, { index, question }: any) => {
  const questions = get(loveLanguageQuestionsAtom);
  questions[index] = { ...questions[index], ...(question || {}) };

  return set(loveLanguageQuestionsAtom, questions);
});