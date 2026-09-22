import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>So you wanna</Text>
        <Text style={styles.boldTitle}>Eat Good?</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/onboarding/name" as any)}
      >
        <Text style={styles.buttonText}>Find your first recipe</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAF9",
    alignItems: "center",
    justifyContent: "center",
    gap: 50,
  },

  title: {
    fontSize: 22,
    color: "#0D9488",
    textAlign: "center",
  },

  boldTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#0D9488",
    textAlign: "center",
  },

  button: {
    backgroundColor: "#0D9488",
    paddingVertical: 14,
    paddingHorizontal: 34,
    borderRadius: 12,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});
