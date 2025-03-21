import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const notifications = [
  {
    name: "Jason",
    text: "Ik luv het maatje! Lekker op die goede dingen. Siii!",
    image: require("../../../assets/images/jason.png"),
  },
  {
    name: "Bram",
    text: "Ai ik hoor je. Ik wist niet dat jij dat op dat grote geld was 😮",
    image: require("../../../assets/images/bram.png"),
  },
  {
    name: "Cristiano",
    text: "Muito bom primo. O trabalho duro finalmente valeu a pena",
    image: require("../../../assets/images/cristiano.png"),
  },
  {
    name: "Cloakje",
    text: "Ik weet waar je bed slaapt",
    image: require("../../../assets/images/cloakje.png"),
  },
  {
    name: "Bas",
    text: "Goedendag, ik zie dat u goed heeft kunnen genieten van uw verblijf. Geniet ervan...",
    image: require("../../../assets/images/bas.png"),
  },
  {
    name: "Strontvlieg",
    text: "Potje fortnite gisteren was craaazy! Die dub die we hebben gepakt was fenomenaal.",
    image: require("../../../assets/images/strontvlieg.png"),
  },
];

export default function NotificationScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>🔔 Notifications</Text>

      {notifications.map((item, index) => (
        <View key={index} style={styles.notificationCard}>
          <Image source={item.image} style={styles.avatar} />
          <View style={styles.textContent}>
            <Text style={styles.name}>{item.name} <Text style={styles.posted}>posted:</Text></Text>
            <Text style={styles.message}>{item.text}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
  },
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    alignItems: "flex-start",
  
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  
    elevation: 3,
  },
  
  avatar: {
    width: 65,
    height: 55,
    borderRadius: 22.5,
    marginRight: 10,
  },
  textContent: {
    flex: 1,
  },
  name: {
    fontWeight: "bold",
    fontSize: 14,
  },
  posted: {
    fontWeight: "bold",
    color: "black",
  },
  message: {
    fontSize: 14.1,
    marginTop: 2,
    color: "#333",
  },
});
