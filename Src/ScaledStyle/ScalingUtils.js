import { Platform, Dimensions } from 'react-native';

const dimenMin = 300;
const dimenMax = 800;
const dimenInterval = 30;

const { width, height } = Dimensions.get('window');

const isIos = () => {
  return Platform.OS === 'ios';
};


const getSmallestWidthDimension = (isFontScale = false) => {
  var dimen = isIos() ? width : 0;
  if (isFontScale && width >= 1080) {
      dimen = 1080;
  } else {
    for (let i = dimenMin; i <= dimenMax; i = i + dimenInterval) {
      if (width >= i && width < i + dimenInterval) {
        dimen = i;
        break; // stop the loop
      }
    } 
  }
  return dimen;
};

const getAvailableWidthDimension = () => {
  var dimen = isIos() ? width : 0;
  for (let i = dimenMin; i <= dimenMax; i = i + dimenInterval) {
    if (width >= i && width < i + dimenInterval) {
      dimen = i;
      break; // stop the loop
    }
  }
  return dimen;
};

const getAvailableHeightDimension = () => {
  var dimen = isIos() ? height : 0;
  for (let i = dimenMin; i <= dimenMax; i = i + dimenInterval) {
    if (height >= i && height < i + dimenInterval) {
      dimen = i;
      break; // stop the loop
    }
  }
  return dimen;
};

const scale = size => {
  var scaleSize = size;
  var dimen = getSmallestWidthDimension();
  if (dimen !== 0) {
    var ratio = size / dimenMin;
    scaleSize = ratio * dimen;
  }
  return scaleSize;
};

const verticalScale = size => {
  var scaleSize = size;
  var dimen = getAvailableHeightDimension();
  if (dimen !== 0) {
    var ratio = size / dimenMin;
    scaleSize = ratio * dimen;
  }
  return scaleSize;
};

const horizontalScale = size => {
  var scaleSize = size;
  var dimen = getAvailableWidthDimension();
  if (dimen !== 0) {
    var ratio = size / dimenMin;
    scaleSize = ratio * dimen;
  }
  return scaleSize;
};

const moderateScale = (size) => {
  var scaleSize = size;
  var dimen = getSmallestWidthDimension(true);
  if (dimen !== 0) {
    var ratio = size / dimenMin;
    scaleSize = ratio * dimen;
  }
  return scaleSize;
};

export {
  scale,
  verticalScale,
  horizontalScale,
  moderateScale
};
