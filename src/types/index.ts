export interface RootState {
  selectedLang?: string;
  defaultLang: string;
}

export enum ActionType {
  UPDATE_LANGUAGE = 'UPDATE_LANGUAGE',
  REMOVE_LANGUAGE = 'REMOVE_LANGUAGE'
}

export interface ActionAddLanguage {
  type: ActionType.UPDATE_LANGUAGE
  payload: string;
}

export type Action = ActionAddLanguage;

interface TranslationObject {
  [key: string]: string
}

export interface TranslationMessages {
  [language: string]: TranslationObject,
}

export interface FormValues {
  name: string;
  email: string;
  content: string;
}

export interface FormErrors {
  email?: string;
  name?: string;
}