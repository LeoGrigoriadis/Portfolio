import es from './es.json';
import en from './en.json';

const translations: Record<string, typeof es> = { es, en };

export type Lang = 'es' | 'en';

export function useTranslations(lang: Lang) {
  return translations[lang] ?? translations.es;
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === 'es' ? 'en' : 'es';
}
