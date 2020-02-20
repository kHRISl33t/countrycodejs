export type Country = {
  name: string;
  dial_code: string;
  code: string;
  timezones: string[];
  latlng: number[];
  capital: string;
};

export type Maybe<T> = T | null;
