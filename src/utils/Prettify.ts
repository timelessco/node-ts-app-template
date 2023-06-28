// https://twitter.com/mattpocockuk/status/1622730173446557697
export type Prettify<T> = {
	[P in keyof T]: T[P];
} & {};
