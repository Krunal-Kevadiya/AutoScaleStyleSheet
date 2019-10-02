const deepMapStyleSheet = (obj, fun) => {
  const deepMapper = val =>
    isObject(val) ? deepMapStyleSheet(val, fun) : fun(val);
  if (Array.isArray(obj)) {
    return obj.map(deepMapper);
  }
  if (isObject(obj)) {
    return deepMapObject(obj, deepMapper);
  }
  return obj;
};

const deepMapObject = (obj, fun) =>
  Object.keys(obj).reduce((res, key) => {
    res[key] = fun(obj[key]);
    return res;
  }, {});

const isObject = myVar => myVar && typeof myVar === 'object';

export default deepMapStyleSheet;
