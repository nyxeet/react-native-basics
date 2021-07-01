import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("./assets/image.jpeg")}
      >
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
            <TextInput textAlign={"center"} style={styles.input} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>PASSWORD</Text>
            <TextInput
              textAlign={"center"}
              style={styles.input}
              secureTextEntry={true}
            />
          </View>
          <Button title="SIGN IN" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    // alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "aliceblue",
    height: 40,
    width: 300,
    color: "white",
    borderRadius: 6,
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    color: "white",
    marginBottom: 10,
    fontSize: 18,
  },
});
