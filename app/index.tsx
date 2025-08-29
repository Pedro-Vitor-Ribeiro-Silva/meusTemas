import { StyleSheet, ScrollView, View, Text } from "react-native";
import Card from "../components/Card";
import temas from "../temas.json";
import { useFonts } from "expo-font";

export default function Index() {

    const [fontsLoaded] = useFonts({
    Knewave: require("../assets/fonts/Knewave-Regular.ttf"), 
  });

  if (!fontsLoaded) {
    return <Text>Carregando...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>O QUE EU MAIS GOSTO DE CADA TEMA DE TECNOLOGIA:</Text>
      </View>
      {temas.map((item, index) => (
        <Card title={item.title} text={item.text} key={index} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flex: 1,
    alignItems: "center",
    justifyContent:"center",
    padding:30,
    backgroundColor: "black",
  },
  textHeader: {
    fontSize: 25,
    textAlign:"center",
    color:"white",
    fontFamily: "Knewave",
  }
});
