import AutoScaledSheet from '../ScaledStyle';
import {Colors, Fonts} from '../Themes';

const styles = AutoScaledSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  headerImage: {
    width: '100%',
    height: '100@vs',
    resizeMode: 'stretch',
  },
  posterView: {
    flexDirection: 'row',
    marginTop: '50@vs',
    marginHorizontal: '10@s',
    position: 'absolute',
    top: 0,
  },
  posterImage: {
    width: '120@s',
    height: '100@vs',
    resizeMode: 'stretch',
    borderRadius: '10@vs',
  },
  posterTitle: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  titleText: {
    fontSize: '25@ms',
    color: Colors.pink,
    marginHorizontal: '8@s',
    fontFamily: Fonts.title,
  },
  subTitleText: {
    fontSize: '10@ms',
    color: Colors.captionTextColor,
    marginHorizontal: '8@s',
    marginBottom: '5@vs',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '55@vs',
    marginHorizontal: '10@s',
  },
  button: {
    height: '16@vs',
    width: '135@s',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.colorPrimary,
  },
  buttonText: {
    fontSize: '10@ms',
    color: Colors.white,
  },
  line: {
    height: '1@vs',
    backgroundColor: Colors.lightGray,
    marginHorizontal: '10@s',
    marginVertical: '8@vs',
  },
  circleGroupRowView: {
    flexDirection: 'row',
    marginHorizontal: '10@s',
    justifyContent: 'center',
  },
  circleGroupView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleBasedText: {
    fontSize: '10@ms',
    color: Colors.captionTextColor,
  },
  circleImage: {
    height: '65@s',
    width: '65@s',
    margin: '5@s',
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    tintColor: Colors.colorAccent,
  },
  circleImageIcon: {
    height: '24@s',
    width: '24@s',
  },
  ratingText: {
    fontSize: '20@ms',
    color: Colors.white,
  },
  descText: {
    fontSize: '22@ms',
    marginHorizontal: '10@s',
    color: Colors.buttonBlue,
    fontFamily: Fonts.desc,
  },
});

export default styles;
