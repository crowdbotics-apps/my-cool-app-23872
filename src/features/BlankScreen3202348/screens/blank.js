import { connect } from "react-redux"
import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }

  render = () => (
    <ImageBackground>
      <View>
        <View style={styles.View_3}>
          <ImageBackground style={styles.ImageBackground_4}>
            <Text style={styles.Text_6}>My Photos</Text>
          </ImageBackground>
        </View>
        <View style={styles.View_7}>
          <View style={styles.View_8}>
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23872/d2c8f193-f305-40c3-bb1e-a8a0eff73d04.jpg"
              }}
              style={styles.Image_10}
            />
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23872/cb6cd462-831c-497a-b712-bf5293c91da3.jpg"
              }}
              style={styles.Image_11}
            />
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23872/82cdf786-252c-4830-8f23-47d756a22bc1.jpg"
              }}
              style={styles.Image_12}
            />
          </View>
        </View>
        <View style={styles.View_13}>
          <View style={styles.View_14}>
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23872/03e210f9-952c-44c9-b563-bb25bb9ed0da.jpg"
              }}
              style={styles.Image_15}
            />
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23872/c38c90fb-fc35-41b0-a6e8-8fb344083411.jpg"
              }}
              style={styles.Image_16}
            />
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23872/99031aa2-000e-42c5-acf5-6e1c53f14470.jpg"
              }}
              style={styles.Image_17}
            />
          </View>
        </View>
        <View>
          <View style={styles.View_19}>
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23872/8e8874bd-2135-4580-bae3-d4da17e74846.jpg"
              }}
              style={styles.Image_20}
            />
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23872/3111198a-2715-412a-826d-fb64d00f720a.jpg"
              }}
              style={styles.Image_21}
            />
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23872/fc6adb22-3be8-4569-a5cb-9b8d2530a867.jpg"
              }}
              style={styles.Image_22}
            />
          </View>
        </View>
        <View style={styles.View_24}>
          <View style={styles.View_25}>
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" style={styles.Icon_28} />
          </View>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ImageBackground_1: {},
  View_2: {},
  View_3: { fontSize: 30, color: "#330f77", fontFamily: "Lato-Regular" },
  ImageBackground_4: { width: 304, height: 38, alignItems: "center" },
  Text_6: {
    marginTop: 10,
    marginBottom: 0,
    paddingBottom: 4,
    fontSize: 14,
    color: "#330f77",
    fontFamily: "Lato-Bold",
    textAlign: "center"
  },
  View_7: {
    width: 304,
    height: 100,
    marginTop: 25,
    flexWrap: "nowrap",
    justifyContent: "center",
    alignContent: "flex-start"
  },
  View_8: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  Image_10: {
    width: 170,
    height: 77,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center"
  },
  Image_11: {
    width: 170,
    height: 77,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center"
  },
  Image_12: {
    width: 170,
    height: 77,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center"
  },
  View_13: { paddingTop: 15 },
  View_14: {
    width: "100%",
    height: 100,
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  Image_15: {
    width: 91,
    height: 77,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center"
  },
  Image_16: {
    width: 91,
    height: 77,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center"
  },
  Image_17: {
    width: 91,
    height: 77,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center"
  },
  View_18: {},
  View_19: { width: "100%", height: 100, marginTop: 15, flexDirection: "row" },
  Image_20: {
    width: 91,
    height: 77,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center"
  },
  Image_21: {
    width: 91,
    height: 77,
    marginLeft: 5,
    marginRight: 5,
    alignSelf: "center"
  },
  Image_22: { width: 91, height: 77, alignSelf: "center" },
  View_24: {
    width: "100%",
    height: 40,
    marginTop: 110,
    alignSelf: "flex-start",
    alignContent: "space-around"
  },
  View_25: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-between"
  },
  Icon_26: {},
  Icon_27: {},
  Icon_28: { alignSelf: "center" }
})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
