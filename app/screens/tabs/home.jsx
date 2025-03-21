import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';

const trips = [
    {
        title: "Barcelona",
        image: require('../../../assets/images/barcelona.png'),
        duration: "maart 2024 - april 2024",
        flag: "🇪🇸"
    },
    {
        title: "New York",
        image: require("../../../assets/images/newyork.png"),
        duration: "januari 2024 - februari 2024",
        flag: "🇺🇸"
    },
    {
        title: "Tokyo",
        image: require("../../../assets/images/tokyo.png"),
        duration: "september 2023 - december 2023",
        flag: "🇯🇵"
    },
    {
        title: "Rome",
        image: require("../../../assets/images/rome.png"),
        duration: "januari 2023 - februari 2023",
        flag: "🇮🇹"
    },
    {
        title: "Chongqing",
        image: require("../../../assets/images/chongqing.png"),
        duration: "januari 2023 - februari 2023",
        flag: "🇨🇳"
    },
];


export default function HomeScreen() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>🏖️ My Trips</Text>
            {trips.map((trip, index) => (
                <Pressable key={index} style={styles.card}>
                    <Image source={trip.image} style={styles.image} />
                    <View style={styles.textOverlay}>
                        <Text style={styles.flag}>{trip.flag}</Text>
                        <Text style={styles.city}>{trip.title}</Text>
                    </View>
                    <Text style={styles.duration}>🗓 {trip.duration}</Text>
                </Pressable>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 15,
        backgroundColor: "#fff"
    },
    header: {
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 15
    },
    card: {
        marginBottom: 20,
        borderRadius: 12,
        overflow: "hidden",
        backgroundColor: "#f1f1f1",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5
    },
    image: {
        width: "100%",
        height: 180
    },
    textOverlay: {
        position: "absolute",
        bottom: 40,
        left: 10,
        backgroundColor: "white",
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingVertical: 4,
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    flag: {
        fontSize: 16
    },
    city: {
        fontSize: 16,
        fontWeight: "bold"
    },
    duration: {
        padding: 8,
        fontSize: 14,
        color: "gray"
    }
});
