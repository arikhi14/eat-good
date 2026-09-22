import { router } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useOnboarding } from "../../context/OnboardingContext";

export default function NameScreen() {
  const { data, updateData } = useOnboarding();

  const canContinue = data.name.trim().length > 0;

  function handleNext() {
    if (!canContinue) return;

    router.push("./details");
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View>
        <Text style={styles.label}>What's your name?</Text>

        <TextInput
          style={styles.input}
          value={data.name}
          onChangeText={(name) => updateData({ name })}
          placeholder="Your name"
          placeholderTextColor="#999999"
          autoCapitalize="words"
          autoCorrect={false}
          returnKeyType="next"
          onSubmitEditing={handleNext}
          accessibilityLabel="Your name"
        />
      </View>

      <Pressable
        style={styles.next}
        onPress={handleNext}
        disabled={!canContinue}
        accessibilityRole="button"
        accessibilityLabel="Continue to the next step"
      >
        <Text
          style={[styles.nextText, !canContinue && styles.nextTextDisabled]}
        >
          Next →
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFAF9",
    paddingHorizontal: 28,
    paddingTop: 80,
    paddingBottom: 40,
    justifyContent: "space-between",
  },

  label: {
    fontSize: 22,
    color: "#0D9488",
    marginBottom: 16,
  },

  input: {
    backgroundColor: "#E5E5E5",
    borderRadius: 10,
    minHeight: 48,
    paddingHorizontal: 15,
    fontSize: 16,
    color: "#1F2937",
  },

  next: {
    alignSelf: "flex-end",
    paddingVertical: 10,
    paddingLeft: 20,
  },

  nextText: {
    color: "#0D9488",
    fontSize: 18,
  },

  nextTextDisabled: {
    opacity: 0.35,
  },
});
