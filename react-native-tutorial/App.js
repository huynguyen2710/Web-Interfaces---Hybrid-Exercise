import React from "react";
import { StyleSheet, View } from "react-native";

import TabNavigationDemo from "./tutorials/step8-navigation/TabNavigation";


export default function App() {
  let output;

  output = (
    <View style={styles.container}>
      <TabNavigationDemo></TabNavigationDemo>
    </View>
  );
  return output;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 18,
  },
});
