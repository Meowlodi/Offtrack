import { View, Text, TextInput, Pressable, ImageBackground, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
    const router = useRouter();

    return (
        <ImageBackground
            source={require("../../../assets/images/registerBackground.png")}
            style={styles.background}
        >
            <View style={styles.header}>
                <Text style={styles.logo}>⎈ OffTrack</Text>
            </View>

            <View style={{ flex: 1 }} />

            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#000" />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#000" secureTextEntry />
                <TextInput style={styles.input} placeholder="Confirm Password" placeholderTextColor="#000" secureTextEntry />

                <Pressable style={styles.registerButton}>
                    <Text style={styles.registerButtonText}>CREATE ACCOUNT</Text>
                </Pressable>

                <Text style={styles.signInText}>
                    Already have an account? <Text style={styles.signInLink} onPress={() => router.push("/screens/auth/login")}>Sign in</Text>
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover"
    },
    header: {
        marginTop: 60,
        marginLeft: 20
    },
    logo: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold"
    },
    container: {
        padding: 20,
        marginBottom: 40
    },
    input: {
        backgroundColor: "white",
        borderRadius: 20,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 5
    },
    registerButton: {
        backgroundColor: 'black',
        paddingVertical: 12,
        borderRadius: 20,
        marginTop: 10
    },
    registerButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    signInText: {
        color: "black",
        textAlign: "center",
        marginTop: 20
    },
    signInLink: {
        color: "blue",
        fontWeight: "bold"
    }
});
