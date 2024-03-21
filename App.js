// 프레임워크 API
import { StyleSheet, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// 컴포넌트
import JinKazamaMove from "./screens/JinKazamaMove";
import SelectCharacterScreen from "./screens/SelectCharacterScreen";

export default function App() {
    return (
        <>
            <StatusBar />
            <LinearGradient colors={["#214C5C", "#000000"]} style={styles.appContainer}>
                {/* <JinKazamaMove /> */}
                <SelectCharacterScreen />
            </LinearGradient>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});
