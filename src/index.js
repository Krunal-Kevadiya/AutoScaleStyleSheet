import autoScaledSheetCreator from './AutoScaledStyleSheet';
import { scale, verticalScale, horizontalScale, moderateScale } from './ScalingUtils';

export default AutoScaledSheet = autoScaledSheetCreator(scale, verticalScale, horizontalScale, moderateScale);
export * from './ScalingUtils';