import { StyleSheet, Text, View, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { Button } from "react-native-paper";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./../assets/images/react-logo.png")} />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.tagLineTop}>
          Learn <Text style={styles.redText}>CODE !!</Text>
        </Text>
        <Text style={styles.tagLineTop}>Come and check us out!</Text>
        <Text style={styles.tagLine}>
          We are located in the heart of the big city. This is where it all
          happens!
        </Text>
        <Button mode="contained" style={styles.btn}>
          <Text style={styles.whiteText}>Sign In</Text>
        </Button>
        <Button mode="contained" style={styles.btn}>
          <Text style={styles.whiteText}>Sign Up Today</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop: -50,
  },
  logo: {
    width: 250,
    height: 250,
  },
  subContainer: {
    padding: 20,
    marginTop: -20,
  },
  tagLine: {
    fontSize: 15,
    textAlign: "center",
    marginVertical: 15,
    color: Colors.gray,
  },
  tagLineTop: {
    fontSize: 30,
    textAlign: "center",
  },
  grayText: {
    color: Colors.gray,
  },
  redText: {
    color: Colors.Red5,
  },
  whiteText: {
    color: Colors.whiteSmoke,
  },
  btn: {
    padding: 10,
    borderRadius: 50,
    marginTop: 50,
    backgroundColor: Colors.darkSlateGray,
  },
  btnRed: {
    backgroundColor: Colors.Red5,
  },
  btnDarkGray: {
    backgroundColor: Colors.darkSlateGray,
  },
});
