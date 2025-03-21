import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function AddTripScreen() {
  const [location, setLocation] = useState("");
  const [duration, setDuration] = useState("");
  const [entry, setEntry] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📚 New diary entry</Text>

      <Text style={styles.label}>Location of vacation</Text>
      <TextInput
        style={styles.input}
        value={location}
        onChangeText={setLocation}
        placeholder=""
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Banner image</Text>
      <TouchableOpacity style={styles.bannerBox}>
        <Ionicons name="add" size={40} color="#aaa" />
      </TouchableOpacity>

      <Text style={styles.label}>Duration</Text>
      <TextInput
        style={styles.input}
        value={duration}
        onChangeText={setDuration}
        placeholder=""
        placeholderTextColor="#aaa"
      />

      <Text style={styles.label}>Diary entry</Text>
      <TextInput
        style={[styles.input, styles.diaryEntryBox]}
        value={entry}
        onChangeText={setEntry}
        multiline
        placeholder=""
        placeholderTextColor="#aaa"
      />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>SUBMIT</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: "white",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
  },
  input: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  bannerBox: {
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  diaryEntryBox: {
    height: 200,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "black",
    paddingVertical: 14,
    borderRadius: 8,
    marginTop: 10,
  },
  submitText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
