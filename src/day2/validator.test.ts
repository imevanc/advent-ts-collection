import type {Equal, Expect} from "type-testing";
import {t0_actual, t0_expected} from "./index";

type t0 = Expect<Equal<t0_actual, t0_expected>>;
