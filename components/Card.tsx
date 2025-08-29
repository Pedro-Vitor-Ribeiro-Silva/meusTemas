import { Text, View, StyleSheet } from "react-native";

type Props = {
  title: string;
  text: string;
};

export default function Card(props: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
