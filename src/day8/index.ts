declare global {
    namespace NodeJS {
        interface ProcessEnv {
                MOOD_LIGHTS: "true";
                BATH_TEMPERATURE: "327.59";
                STRAWBERRIES: "chocolate";
        }
    }
}

const { MOOD_LIGHTS } = process.env;
export type t0_actual = typeof MOOD_LIGHTS;
export type t0_expected = 'true';


const { BATH_TEMPERATURE } = process.env;
export type t1_actual = typeof BATH_TEMPERATURE;
export type t1_expected = '327.59';

const { STRAWBERRIES } = process.env;
export type t2_actual = typeof STRAWBERRIES;
export type t2_expected = 'chocolate';
