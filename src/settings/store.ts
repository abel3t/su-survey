import { atom } from "jotai";
import { giftQuestions, loveLanguageQuestions } from '../constant';

export const giftQuestionsAtom = atom(giftQuestions);
export const loveLanguageQuestionsAtom = atom(loveLanguageQuestions);
export const updateGiftQuestionAtom = atom(null,  (get, set, giftQuestionId: number) => {
  // const questionsMap = get(giftQuestionsAtom);
  // questionsMap[giftQuestionId] = { ...questionsMap[giftQuestionId], ...(newValue || {}) };
  //
  // return set(giftQuestionsAtom, questionsMap);
  console.log('aaaaaaaa', giftQuestionId);
});