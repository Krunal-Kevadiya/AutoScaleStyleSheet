import React from 'react';
import {View, Image, ImageBackground} from 'react-native';
import {Button, Text} from 'native-base';
import {Images, Colors, Icons} from '../Themes';
import styles from './AppStyle';

const App = () => {
  return (
    <View style={styles.screen}>
      <Image style={styles.headerImage} source={Images.header} />
      <View style={styles.posterView}>
        <Image style={styles.posterImage} source={Images.poster} />
        <View style={styles.posterTitle}>
          <Text style={styles.subTitleText}>March 2017 PG 129 minutes</Text>
          <Text style={styles.titleText}>Beauty and the Beast</Text>
        </View>
      </View>
      <View style={styles.buttonView}>
        <Button style={styles.button}>
          <Text style={styles.buttonText}>Rent from R29.99</Text>
        </Button>
        <Button style={styles.button}>
          <Text style={styles.buttonText}>Buy from R129.99</Text>
        </Button>
      </View>
      <View style={styles.line} />
      <View style={styles.circleGroupRowView}>
        <View style={styles.circleGroupView}>
          <ImageBackground
            source={Icons.icPolygon}
            style={styles.circleImage}
            imageStyle={styles.imageStyle}>
            <Text style={styles.ratingText}>1.2</Text>
          </ImageBackground>
          <Text style={styles.circleBasedText}>242 ratings</Text>
        </View>

        <View style={styles.circleGroupView}>
          <ImageBackground
            source={Icons.icCircle}
            style={styles.circleImage}
            imageStyle={styles.imageStyle}>
            <Image source={Icons.icFamily} style={styles.circleImageIcon} />
          </ImageBackground>
          <Text style={styles.circleBasedText}>Family</Text>
        </View>

        <View style={styles.circleGroupView}>
          <ImageBackground
            source={Icons.icCircle}
            style={styles.circleImage}
            imageStyle={styles.imageStyle}>
            <Image source={Icons.icTomato} style={styles.circleImageIcon} />
          </ImageBackground>
          <Text style={styles.circleBasedText}>71%</Text>
        </View>

        <View style={styles.circleGroupView}>
          <ImageBackground
            source={Icons.icCircle}
            style={styles.circleImage}
            imageStyle={styles.imageStyle}>
            <Image source={Icons.icSimilar} style={styles.circleImageIcon} />
          </ImageBackground>
          <Text style={styles.circleBasedText}>Similar</Text>
        </View>
      </View>
      <View style={styles.line} />
      <Text style={styles.descText}>
        The story and characters you know and love come to spectacular life in
        the live-action adaption of Disney's animated classic Beauty and the
        Beast.
      </Text>
    </View>
  );
};

export default App;
