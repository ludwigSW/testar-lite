import React from "react";
import { StyleSheet, View } from "react-native";
import Router from "./src/MainRouter";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Router />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
