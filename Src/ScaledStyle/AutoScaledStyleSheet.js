import { StyleSheet } from 'react-native';
import deepMapStyleSheet from './DeepMapUtils';
import { scale, verticalScale, horizontalScale, moderateScale } from './ScalingUtils';

const validScaleSheetRegex = /^(\-?\d+(\.\d{1,2})?)@(ms(\d+(\.\d{1,2})?)?|s|vs|hs)$/;
const scaleRegex = /^(\-?\d+(\.\d{1,2})?)@s$/;
const verticalScaleRegex = /^(\-?\d+(\.\d{1,2})?)@vs$/;
const horizontalScaleRegex = /^(\-?\d+(\.\d{1,2})?)@hs$/;
const moderateScaleRegex = /^(\-?\d+(\.\d{1,2})?)@ms(\d+(\.\d{1,2})?)?$/;

const autoScaleByAnnotation = (scale, verticalScale, horizontalScale, moderateScale) => value => {
  if (!validScaleSheetRegex.test(value)) {
    return value;
  }
  const size = parseFloat(value.split('@')[0]);

  if (scaleRegex.test(value)) {
    return scale(size);
  }

  if (verticalScaleRegex.test(value)) {
    return verticalScale(size);
  }

  if (horizontalScaleRegex.test(value)) {
    return horizontalScale(size);
  }

  if (moderateScaleRegex.test(value)) {
    return moderateScale(size);
  }
};

const autoScaledSheetCreator = (scale, verticalScale, horizontalScale, moderateScale) => {
  const autoScaleFunc = autoScaleByAnnotation(
    scale,
    verticalScale,
    horizontalScale,
    moderateScale,
  );
  return {
    create: styleSheet =>
      StyleSheet.create(deepMapStyleSheet(styleSheet, autoScaleFunc)),
  };
};

const AutoScaledSheet = autoScaledSheetCreator(scale,verticalScale,horizontalScale,moderateScale);
export default AutoScaledSheet;
