import { GiftType, LoveLanguageType } from './constant';

export interface IGiftQuestion {
  id: number;
  text: string;
  type: GiftType
}

export interface ILoveLanguageAnswer {
  type: LoveLanguageType,
  text: string;
}

export interface ILoveLanguageQuestion {
  id: number;
  answers: ILoveLanguageAnswer[],
  hasError?: boolean
}