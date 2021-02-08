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
    <ImageBackground
      source={{
        uri:
          "https://d3tklmlrp1a8c2.cloudfront.net/media/resources/project/23872/ca7eb669-ee08-494f-b30a-9b555089d49b.png"
      }}
    >
      <View style={styles.View_2}>
        <View style={styles.View_3}>
          <View style={styles.View_4}>
            <Text style={styles.Text_6}>My Photos</Text>
          </View>
        </View>
        <View>
          <View style={styles.View_8}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.Image_10}
            />
            <Image source={{ uri: "https://via.placeholder.com/150" }} />
            <Image source={{ uri: "https://via.placeholder.com/150" }} />
          </View>
          <View />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  ImageBackground_1: {},
  View_2: { backgroundColor: "#f0e2f8" },
  View_3: { fontSize: 30, color: "#330f77", fontFamily: "Lato-Regular" },
  View_4: { width: 304, height: 38, alignItems: "center" },
  Text_6: {
    marginTop: 10,
    marginBottom: 0,
    paddingBottom: 4,
    fontSize: 14,
    color: "#330f77",
    fontFamily: "Lato-Bold",
    textAlign: "center"
  },
  View_7: {},
  View_8: {
    width: 304,
    height: 100,
    marginTop: 25,
    flexDirection: "row",
    flexWrap: "nowrap"
  },
  Image_10: { height: "100%", marginLeft: 5, marginRight: 5 },
  Image_11: {},
  Image_12: {},
  View_9: {}
})
const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
