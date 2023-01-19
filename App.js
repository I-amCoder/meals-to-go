import { StyleSheet, Text, SafeAreaView, View } from "react-native";
import Constants from "expo-constants";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ padding: 20, backgroundColor: "red" }}>Open</Text>
      <View style={{ padding: 20, backgroundColor: "blue", flex: 1 }}>
        <Text>BOdy</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
