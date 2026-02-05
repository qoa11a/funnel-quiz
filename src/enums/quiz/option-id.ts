export enum LanguageOptionId {
  English = 'english',
  French = 'french',
  German = 'german',
  Spanish = 'spanish',
}

export enum GenderOptionId {
  Female = 'female',
  Male = 'male',
  Other = 'other',
}

export enum AgeGroupOptionId {
  Age18to29 = 'age-18-29',
  Age30to39 = 'age-30-39',
  Age40to49 = 'age-40-49',
  Age50plus = 'age-50-plus',
}

export enum HateInBooksOptionId {
  LackOfLogic = 'lack-of-logic',
  SlowSpeed = 'slow-speed',
  LackOfHumor = 'lack-of-humor',
  GenericEnding = 'generic-ending',
}

export enum FavoriteTopicsOptionId {
  Werewolf = 'werewolf',
  Action = 'action',
  RoyalObsession = 'royal-obsession',
  Billionaire = 'billionaire',
  Romance = 'romance',
  YoungAdult = 'young-adult',
  BadBoy = 'bad-boy',
}

export type OptionId =
  | LanguageOptionId
  | GenderOptionId
  | AgeGroupOptionId
  | HateInBooksOptionId
  | FavoriteTopicsOptionId;
