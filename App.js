// 프레임워크 API
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// 컴포넌트
import JinKazamaMove from "./screens/JinKazamaMove";

export default function App() {
    return (
        <LinearGradient colors={["#214C5C", "#000000"]} style={styles.appContainer}>
            <JinKazamaMove />
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
