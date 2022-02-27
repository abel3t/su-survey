import { GiftType, LoveLanguageType } from './constant';

export interface IGiftQuestion {
  id: number;
  text: string;
  type: GiftType;
  answer?: number;
  hasError?: boolean;
}

export interface ILoveLanguageAnswer {
  type: LoveLanguageType;
  text: string;
}

export interface ILoveLanguageQuestion {
  id: number;
  text: string;
  answers: ILoveLanguageAnswer[];
  answer?: number;
  hasError?: boolean;
}

export interface ILoveLanguageResult {
  id: number;
  type: LoveLanguageType | number;
  value: number;
}

export interface IGiftResult {
  id: number;
  type: GiftType | number;
  value: number;
}