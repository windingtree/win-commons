import { CurrencyMeta, Duplicates, WiseCurrency } from './types';

export const currencySymbols = {
  AED: 'د.إ',
  AFN: '؋',
  ALL: 'L',
  AMD: '֏',
  ANG: 'ƒ',
  AOA: 'Kz',
  ARS: '$',
  AUD: '$',
  AWG: 'ƒ',
  AZN: '₼',
  BAM: 'KM',
  BBD: '$',
  BDT: '৳',
  BGN: 'лв',
  BHD: '.د.ب',
  BIF: 'FBu',
  BMD: '$',
  BND: '$',
  BOB: '$b',
  BOV: 'BOV',
  BRL: 'R$',
  BSD: '$',
  BTC: '₿',
  BTN: 'Nu.',
  BWP: 'P',
  BYN: 'Br',
  BYR: 'Br',
  BZD: 'BZ$',
  CAD: '$',
  CDF: 'FC',
  CHE: 'CHE',
  CHF: 'CHF',
  CHW: 'CHW',
  CLF: 'CLF',
  CLP: '$',
  CNH: '¥',
  CNY: '¥',
  COP: '$',
  COU: 'COU',
  CRC: '₡',
  CUC: '$',
  CUP: '₱',
  CVE: '$',
  CZK: 'Kč',
  DJF: 'Fdj',
  DKK: 'kr',
  DOP: 'RD$',
  DZD: 'دج',
  EEK: 'kr',
  EGP: '£',
  ERN: 'Nfk',
  ETB: 'Br',
  ETH: 'Ξ',
  EUR: '€',
  FJD: '$',
  FKP: '£',
  GBP: '£',
  GEL: '₾',
  GGP: '£',
  GHC: '₵',
  GHS: 'GH₵',
  GIP: '£',
  GMD: 'D',
  GNF: 'FG',
  GTQ: 'Q',
  GYD: '$',
  HKD: '$',
  HNL: 'L',
  HRK: 'kn',
  HTG: 'G',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  IMP: '£',
  INR: '₹',
  IQD: 'ع.د',
  IRR: '﷼',
  ISK: 'kr',
  JEP: '£',
  JMD: 'J$',
  JOD: 'JD',
  JPY: '¥',
  KES: 'KSh',
  KGS: 'лв',
  KHR: '៛',
  KMF: 'CF',
  KPW: '₩',
  KRW: '₩',
  KWD: 'KD',
  KYD: '$',
  KZT: '₸',
  LAK: '₭',
  LBP: '£',
  LKR: '₨',
  LRD: '$',
  LSL: 'M',
  LTC: 'Ł',
  LTL: 'Lt',
  LVL: 'Ls',
  LYD: 'LD',
  MAD: 'MAD',
  MDL: 'lei',
  MGA: 'Ar',
  MKD: 'ден',
  MMK: 'K',
  MNT: '₮',
  MOP: 'MOP$',
  MRO: 'UM',
  MRU: 'UM',
  MUR: '₨',
  MVR: 'Rf',
  MWK: 'MK',
  MXN: '$',
  MXV: 'MXV',
  MYR: 'RM',
  MZN: 'MT',
  NAD: '$',
  NGN: '₦',
  NIO: 'C$',
  NOK: 'kr',
  NPR: '₨',
  NZD: '$',
  OMR: '﷼',
  PAB: 'B/.',
  PEN: 'S/.',
  PGK: 'K',
  PHP: '₱',
  PKR: '₨',
  PLN: 'zł',
  PYG: 'Gs',
  QAR: '﷼',
  RMB: '￥',
  RON: 'lei',
  RSD: 'Дин.',
  RUB: '₽',
  RWF: 'R₣',
  SAR: '﷼',
  SBD: '$',
  SCR: '₨',
  SDG: 'ج.س.',
  SEK: 'kr',
  SGD: 'S$',
  SHP: '£',
  SLL: 'Le',
  SOS: 'S',
  SRD: '$',
  SSP: '£',
  STD: 'Db',
  STN: 'Db',
  SVC: '$',
  SYP: '£',
  SZL: 'E',
  THB: '฿',
  TJS: 'SM',
  TMT: 'T',
  TND: 'د.ت',
  TOP: 'T$',
  TRL: '₤',
  TRY: '₺',
  TTD: 'TT$',
  TVD: '$',
  TWD: 'NT$',
  TZS: 'TSh',
  UAH: '₴',
  UGX: 'USh',
  USD: '$',
  UYI: 'UYI',
  UYU: '$U',
  UYW: 'UYW',
  UZS: 'лв',
  VEF: 'Bs',
  VES: 'Bs.S',
  VND: '₫',
  VUV: 'VT',
  WST: 'WS$',
  XAF: 'FCFA',
  XBT: 'Ƀ',
  XCD: '$',
  XOF: 'CFA',
  XPF: '₣',
  XSU: 'Sucre',
  XUA: 'XUA',
  YER: '﷼',
  ZAR: 'R',
  ZMW: 'ZK',
  ZWD: 'Z$',
  ZWL: '$'
};
export const preferredCurrencies: WiseCurrency[] = [
  { code: 'AED', name: 'Emirati Dirham', decimals: 2 },
  { code: 'AUD', name: 'Australian dollar', decimals: 2 },
  { code: 'BGN', name: 'Bulgarian lev', decimals: 2 },
  { code: 'BRL', name: 'Brazilian real', decimals: 2 },
  { code: 'CAD', name: 'Canadian dollar', decimals: 2 },
  { code: 'CHF', name: 'Swiss franc', decimals: 2 },
  { code: 'CZK', name: 'Czech koruna', decimals: 2 },
  { code: 'DKK', name: 'Danish krone', decimals: 2 },
  { code: 'EUR', name: 'Euro', decimals: 2 },
  { code: 'GBP', name: 'British pound', decimals: 2 },
  { code: 'HKD', name: 'Hong Kong dollar', decimals: 2 },
  { code: 'HRK', name: 'Croatian kuna', decimals: 2 },
  { code: 'HUF', name: 'Hungarian forint', decimals: 2 },
  { code: 'IDR', name: 'Indonesian rupiah', decimals: 2 },
  { code: 'INR', name: 'Indian rupee', decimals: 2 },
  { code: 'JPY', name: 'Japanese yen', decimals: 0 },
  { code: 'MYR', name: 'Malaysian ringgit', decimals: 2 },
  { code: 'NOK', name: 'Norwegian krone', decimals: 2 },
  { code: 'NZD', name: 'New Zealand dollar', decimals: 2 },
  { code: 'PLN', name: 'Polish złoty', decimals: 2 },
  { code: 'RON', name: 'Romanian leu', decimals: 2 },
  { code: 'TRY', name: 'Turkish lira', decimals: 2 },
  { code: 'SEK', name: 'Swedish krona', decimals: 2 },
  { code: 'SGD', name: 'Singapore dollar', decimals: 2 },
  { code: 'USD', name: 'US dollar', decimals: 2 },
  { code: 'ARS', name: 'Argentine peso', decimals: 2 },
  { code: 'BDT', name: 'Bangladeshi taka', decimals: 2 },
  { code: 'BWP', name: 'Botswana pula', decimals: 2 },
  { code: 'CLP', name: 'Chilean peso', decimals: 0 },
  { code: 'CNY', name: 'Chinese yuan', decimals: 2 },
  { code: 'COP', name: 'Colombian peso', decimals: 2 },
  { code: 'CRC', name: 'Costa Rica Colón', decimals: 2 },
  { code: 'EGP', name: 'Egyptian pound', decimals: 2 },
  { code: 'FJD', name: 'Fijian dollar', decimals: 2 },
  { code: 'GEL', name: 'Georgian lari', decimals: 2 },
  { code: 'GHS', name: 'Ghana Cedi', decimals: 2 },
  { code: 'ILS', name: 'Israeli shekels', decimals: 2 },
  { code: 'KES', name: 'Kenyan shillings', decimals: 2 },
  { code: 'KRW', name: 'South Korean won', decimals: 0 },
  { code: 'LKR', name: 'Sri Lankan rupee', decimals: 2 },
  { code: 'MAD', name: 'Moroccan dirham', decimals: 2 },
  { code: 'MXN', name: 'Mexican peso', decimals: 2 },
  { code: 'NPR', name: 'Nepalese Rupee', decimals: 2 },
  { code: 'PHP', name: 'Philippine peso', decimals: 2 },
  { code: 'PKR', name: 'Pakistani rupee', decimals: 2 },
  { code: 'THB', name: 'Thai baht', decimals: 2 },
  { code: 'UAH', name: 'Ukranian hryvna', decimals: 2 },
  { code: 'UGX', name: 'Ugandan shilling', decimals: 0 },
  { code: 'UYU', name: 'Uruguayan pesos', decimals: 2 },
  { code: 'VND', name: 'Vietnamese dong', decimals: 0 },
  { code: 'ZAR', name: 'South African Rand', decimals: 2 },
  { code: 'ZMW', name: 'Zambian kwacha', decimals: 2 }
];

export const dups: Duplicates = Object.entries(currencySymbols).reduce((result, [_, symbol]) => {
  if (result[symbol]) {
    result[symbol] = result[symbol] + 1;
  } else {
    result[symbol] = 1;
  }

  return result;
}, {});

export const currencySymbolMap: Record<string, string> = Object.entries(currencySymbols).reduce(
  (result, [key, symbol]) => {
    if (['GBP', 'USD', 'EUR'].includes(key)) {
      // special case for GBP, USD, EUR
      result[key] = symbol;
    } else {
      // using the 3-letter code as symbol
      result[key] = key;
    }

    return result;
  },
  {}
);

export const prefixedCurrencySymbolMap: Record<string, string> = Object.entries(currencySymbols).reduce(
  (result, [key, symbol]) => {
    if (['GBP', 'USD', 'EUR'].includes(key)) {
      // special case for GBP, USD, EUR
      result[key] = symbol;
    } else if (dups[symbol] > 1) {
      // return prefixed symbol for duplicates
      result[key] = key.slice(0, 2) + symbol;
    } else {
      // return unique symbols
      result[key] = symbol;
    }

    return result;
  },
  {}
);

export const getCurrenciesTemplate = (): CurrencyMeta => {
  const currencies: CurrencyMeta = {};
  for (const currency of preferredCurrencies) {
    const { code } = currency;
    currencies[code] = {
      name: currency.name,
      symbol: currencySymbolMap[code],
      decimals: currency.decimals
    };
  }

  return currencies;
};
