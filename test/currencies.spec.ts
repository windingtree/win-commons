import { expect } from 'chai';
import { currencySymbolMap, prefixedCurrencySymbolMap } from '../src/currencies';

describe('Currencies', () => {
  describe('currencySymbolMap', () => {
    it('EUR, USD, GBP should return proper symbols', () => {
      expect(currencySymbolMap['USD']).eq('$');
      expect(currencySymbolMap['EUR']).eq(String.fromCharCode(0x20ac));
      expect(currencySymbolMap['GBP']).eq(String.fromCharCode(0xa3));
    });

    it('AUD, JPY and other currencies should return 3-letter codes', () => {
      expect(currencySymbolMap['AUD']).eq('AUD');
      expect(currencySymbolMap['JPY']).eq('JPY');
    });

    it('Invalid currencies should return undefined', () => {
      expect(currencySymbolMap['XXX']).to.be.undefined;
      expect(currencySymbolMap['213']).to.be.undefined;
    });
  });

  describe('prefixedCurrencySymbolMap', () => {
    it('EUR, USD, GBP should return proper symbols', () => {
      expect(prefixedCurrencySymbolMap['USD']).eq('$');
      expect(prefixedCurrencySymbolMap['EUR']).eq('€');
      expect(prefixedCurrencySymbolMap['GBP']).eq('£');
    });

    it('should return unique symbols for GHS, CRC', () => {
      expect(prefixedCurrencySymbolMap['GHS']).eq('GH₵');
      expect(prefixedCurrencySymbolMap['CRC']).eq('₡');
    });

    it('AUD, JPY and other duplicate currency symbols should return prefixed symbols', () => {
      expect(prefixedCurrencySymbolMap['AUD']).eq('AU$');
      expect(prefixedCurrencySymbolMap['JPY']).eq('JP¥');
    });

    it('Invalid currencies should return undefined', () => {
      expect(prefixedCurrencySymbolMap['XXX']).to.be.undefined;
      expect(prefixedCurrencySymbolMap['213']).to.be.undefined;
    });
  });
});
