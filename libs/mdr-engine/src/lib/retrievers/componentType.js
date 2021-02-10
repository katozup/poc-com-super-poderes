import enumTranslator from '../helpers/enumTranslator';

export default function (componentStructure) {
  const { type } = componentStructure;

  if (type) {
    return enumTranslator(type);
  }
  return '';
}
