import zipObject from 'lodash/zipObject';

export default (frozen) => (...postfix) => {
  const notValidPostfixArguments = postfix.filter(item => typeof item !== 'string');
  if (notValidPostfixArguments.length) throw new Error('postfix must be string');
  return (...types) => {
    const notValidTypesArguments = types.filter(item => typeof item !== 'string');
    if (notValidTypesArguments.length) throw new Error('type must be string');
    const object = types.map(itemType => postfix.map( itemPostfix => `${itemType}_${itemPostfix}`));
    const result = {};
    types.forEach( (type, index) => {
      result[type] = zipObject(postfix, object[index]);
      result[type].SELF = type;
    });
    return frozen ? Object.freeze(result) : result;
  }
};