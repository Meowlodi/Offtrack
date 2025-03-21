import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const cityImages = {
  barcelona: require("../../../assets/images/barcelona.png"),
  newyork: require("../../../assets/images/newyork.png"),
  tokyo: require("../../../assets/images/tokyo.png"),
  rome: require("../../../assets/images/rome.png"),
  chongqing: require("../../../assets/images/chongqing.png"),
};

export default function ProfileScreen() {
  const favorites = ["barcelona", "newyork", "tokyo", "rome", "chongqing"];

  return (
    <ScrollView style={styles.container}>
      <Image
        source={require("../../../assets/images/plane-banner.png")}
        style={styles.banner}
      />

      <View style={styles.profilePicWrapper}>
        <Image
          source={require("../../../assets/images/profile-pic.png")}
          style={styles.profilePic}
        />
      </View>

      <View style={styles.nameRow}>
        <Text style={styles.name}>Jason van Schaik</Text>
        <TouchableOpacity>
          <Ionicons name="pencil-outline" size={16} color="black" style={{ marginLeft: 4 }} />
        </TouchableOpacity>
      </View>

      <Text style={styles.pronouns}>he/him</Text>

      <View style={styles.bioCard}>
        <Text style={styles.bio}>
          Jason is a travel enthusiast with a deep passion for planes and aviation. Whether he’s
          exploring new destinations or watching aircraft take off, he’s always captivated by the
          thrill of the journey. From planning his next trip to learning about different airlines
          and airports, Jason finds joy in every aspect of travel. For him, the sky is not the
          limit—it’s just the beginning!
        </Text>
      </View>

      <Text style={styles.favoritesTitle}>❤️ My favorites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.favoritesScroll}>
        {favorites.map((city) => (
          <Image
            key={city}
            source={cityImages[city]}
            style={styles.favoriteImage}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    width: "100%",
    height: 270,
    resizeMode: "cover",
  },
  profilePicWrapper: {
    position: "absolute",
    top: 220,
    left: 20,
    borderRadius: 100,
    // borderWidth: 3,
    borderColor: "#fff",
    overflow: "hidden",
  },
  profilePic: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 60,
    marginLeft: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  pronouns: {
    marginLeft: 20,
    color: "gray",
    fontSize: 13,
    marginBottom: 10,
  },
  bioCard: {
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 15,
    borderRadius: 10,
  
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  
    elevation: 4,
  },
  bio: {
    fontSize: 13,
    color: "#333",
  },
  favoritesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
  },
  favoritesScroll: {
    marginTop: 10,
    paddingLeft: 20,
  },
  favoriteImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
});
