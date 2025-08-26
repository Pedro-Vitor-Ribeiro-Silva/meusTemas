import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Back-End</Text>
        <Text style={styles.text}>Java, Python</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Cybersecurity</Text>
        <Text style={styles.text}>Segurança digital, defesa contra ataques e boas práticas.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Inteligência Artificial (AI)</Text>
        <Text style={styles.text}>Chatbots e soluções inteligentes.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Front-End</Text>
        <Text style={styles.text}>React e a construção de interfaces modernas.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Mobile</Text>
        <Text style={styles.text}>React Native e o desenvolvimento para Android/iOS.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  section: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "#fff",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
  },
});
