import { View, Text, TextInput, Pressable, ImageBackground, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
    const router = useRouter();

    return (
        <ImageBackground
            source={require("../../../assets/images/loginBackground.png")}
            style={styles.background}
        >
            <View style={styles.header}>
                <Text style={styles.logo}>⎈ OffTrack</Text>
            </View>

            <View style={{ flex: 1 }} />

            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Email Address" placeholderTextColor="#000" />
                <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#000" secureTextEntry />

                <Pressable style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>LOGIN</Text>
                </Pressable>

                <Text style={styles.signUpText}>
                    Don’t have an account? <Text style={styles.signUpLink} onPress={() => router.push("/screens/auth/register")}>Sign up</Text>
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        padding: 20
    },
    header: {
        alignItems: "flex-start",
        marginTop: 50
    },
    logo: {
        fontSize: 28,
        color: "black",
        fontWeight: "bold"
    },
    container: {
        alignItems: "center",
        marginBottom: 60
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 25,
        paddingHorizontal: 20,
        marginBottom: 15,
        fontSize: 16
    },
    loginButton: {
        width: "100%",
        backgroundColor: "black",
        borderRadius: 25,
        paddingVertical: 15,
        alignItems: "center",
        marginBottom: 20
    },
    loginButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    signUpText: {
        color: "white",
        fontSize: 14
    },
    signUpLink: {
        color: "white",
        textDecorationLine: "underline"
    }
});
