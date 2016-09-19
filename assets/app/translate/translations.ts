// app/translate/translation.ts

import { OpaqueToken, provide } from '@angular/core';

// import translations
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import {LANG_TH_NAME, LANG_TH_TRANS} from "./lnag-th";

// translation token
export const TRANSLATIONS = new OpaqueToken('translations');

// all traslations
const dictionary = {
    [LANG_EN_NAME]: LANG_EN_TRANS,
    [LANG_TH_NAME]: LANG_TH_TRANS
};

// providers
export const TRANSLATION_PROVIDERS = [
    provide(TRANSLATIONS, { useValue: dictionary }),
];
