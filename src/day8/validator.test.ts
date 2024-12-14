import type {Equal, Expect} from 'type-testing';
import {t0_actual, t0_expected, t1_actual, t1_expected, t2_actual, t2_expected} from "./index";

type t0 = Expect<Equal<t0_actual, t0_expected>>;
type t1 = Expect<Equal<t1_actual, t1_expected>>;
type t2 = Expect<Equal<t2_actual, t2_expected>>;