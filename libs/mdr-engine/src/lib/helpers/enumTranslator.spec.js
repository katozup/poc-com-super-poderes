import enumTranslator from './enumTranslator';
const elementTests = [
  {
    enum: 'PAGE',
    string: 'page'
  },
  {
    enum: 'SECTION',
    string: 'section'
  },
  {
    enum: 'COMPONENT',
    string: 'component'
  }
];

const analyticsTests = [
  {
    enum: 'PAGE_LOAD',
    string: 'pageLoad'
  },
  {
    enum: 'CUSTOM_LINK',
    string: 'customLink'
  }
];

const functionTests = [
  {
    enum: 'ON_CLICK',
    string: 'onClick'
  },
  {
    enum: 'ON_HOVER',
    string: 'onHover'
  }
];

describe('enum translator', () => {
  it('should return string from elements ENUMs', () => {
    elementTests.forEach( test => {
      expect(enumTranslator(test.enum)).toEqual(test.string);
    })
  });

  it('should return string from analytics ENUMs', () => {
    analyticsTests.forEach( test => {
      expect(enumTranslator(test.enum)).toEqual(test.string);
    })
  });

  it('should return string from function ENUMs', () => {
    functionTests.forEach( test => {
      expect(enumTranslator(test.enum)).toEqual(test.string);
    })
  });
});
