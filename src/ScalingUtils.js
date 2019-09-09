import {Dimensions, Platform, StatusBar} from 'react-native';

const dimenMin = 300;
const dimenMax = 800;
const dimenInterval = 30;

const {width, height} = Dimensions.get('window');

const getSmallestWidthDimension = (isFontScale = false) => {
  var dimen = 0;
  for (let i = dimenMin; i <= dimenMax; i = i + dimenInterval) {
    if (width >= i && width < i + dimenInterval) {
      dimen = i;
      break; // stop the loop
    }
  }
  if (isFontScale) {
    if (dimen === 0 && width >= 1080) {
      dimen = 1080;
    }
  } else if (isIphoneX()) {
    dimen = width;
  }
  return dimen;
};

const getAvailableWidthDimension = () => {
  var dimen = 0;
  for (let i = dimenMin; i <= dimenMax; i = i + dimenInterval) {
    if (width >= i && width < i + dimenInterval) {
      dimen = i;
      break; // stop the loop
    }
  }
  if (isIphoneX()) {
    dimen = width;
  }
  return dimen;
};

const getAvailableHeightDimension = () => {
  var dimen = 0;
  for (let i = dimenMin; i <= dimenMax; i = i + dimenInterval) {
    if (height >= i && height < i + dimenInterval) {
      dimen = i;
      break; // stop the loop
    }
  }
  if (isIphoneX()) {
    dimen = height;
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

const moderateScale = (size, factor = 0.0) => {
  var scaleSize = size;
  var dimen = getSmallestWidthDimension(true);
  if (dimen !== 0) {
    var ratio = size / dimenMin;
    scaleSize = ratio * dimen;
  }
  if (factor !== 0.0) {
    scaleSize = size + (scaleSize - size) * factor;
  }
  return scaleSize;
};

const isIphoneX = () => {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812 || (height === 896 || width === 896))
  );
};

const ifIphoneX = (iphoneXStyle, regularStyle) => {
  if (isIphoneX()) {
    return iphoneXStyle;
  }
  return regularStyle;
};

const getStatusBarHeight = safe => {
  return Platform.select({
    ios: ifIphoneX(safe ? 44 : 30, 20),
    android: StatusBar.currentHeight,
    default: 0,
  });
};

const getBottomSpace = () => {
  return isIphoneX() ? 34 : 0;
};

export {
  scale,
  verticalScale,
  horizontalScale,
  moderateScale,
  isIphoneX,
  ifIphoneX,
  getStatusBarHeight,
  getBottomSpace
};
