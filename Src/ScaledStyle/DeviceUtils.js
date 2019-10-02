import { Platform, StatusBar } from 'react-native';

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
    isIphoneX,
    ifIphoneX,
    getStatusBarHeight,
    getBottomSpace
};
