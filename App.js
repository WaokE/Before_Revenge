// 프레임워크 API
import { StyleSheet, View, Text } from "react-native";

// 컴포넌트
import JinKazamaMove from "./screens/JinKazamaMove";

export default function App() {
    return (
        <View style={styles.appContainer}>
            <JinKazamaMove />
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 40,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
