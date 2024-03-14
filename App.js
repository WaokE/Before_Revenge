// 프레임워크 API
import { StyleSheet, View } from "react-native";

// 컴포넌트

export default function App() {
    return <View style={styles.appContainer}></View>;
}

const styles = StyleSheet.create({
    appContainer: {
        paddingTop: 20,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
