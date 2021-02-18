export type Maybe<T> = T | null;

export type Country = {
  name: string;
  dial_code: string;
  code: string;
  timezones: string[];
  latlng: number[];
  capital: Maybe<string>;
};
