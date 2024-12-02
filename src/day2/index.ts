type FormatNumber<T extends string> = T extends `${infer N extends number}` ? N : never;

type Demand = FormatNumber<'900000'>;

export type t0_actual = Demand;
export type t0_expected = 900_000;

