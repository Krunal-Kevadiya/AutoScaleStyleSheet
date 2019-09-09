import autoScaledSheetCreator from './AutoScaledStyleSheet';
import {
  scale,
  verticalScale,
  horizontalScale,
  moderateScale,
} from './ScalingUtils';

// eslint-disable-next-line no-undef
export default (AutoScaledSheet = autoScaledSheetCreator(
  scale,
  verticalScale,
  horizontalScale,
  moderateScale,
));
export * from './ScalingUtils';
