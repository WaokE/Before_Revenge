import { View, Text, StyleSheet, Dimensions } from "react-native";

import convertCommand from "../../lib/convertDataToImage/convertCommand";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MoveContainer = ({ move }) => {
    return (
        <View style={styles.moveContainer}>
            <View style={styles.moveContainerMainColumn}>
                <Text style={styles.moveContainerName}>{move.name}</Text>
                <View style={{ flexDirection: "row" }}>
                    <Text style={styles.moveListContainerjudge}>{move.hitLevel}</Text>
                    <Text style={styles.moveListContainerjudge}>{move.damage}</Text>
                </View>
                {convertCommand(move.command)}
            </View>
            <Text style={styles.moveContainerActivateColumn}>{move.startUpFrame}</Text>
            <Text style={styles.moveContainerGuardColumn}>{move.blockFrame}</Text>
            <Text style={styles.moveContainerHitColumn}>{move.hitFrame}</Text>
            <Text style={styles.moveContainerCounterColumn}>{move.counterHitFrame}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    moveContainer: {
        width: windowWidth,
        height: windowHeight * 0.12,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#8B8B8B",
    },
    moveContainerMainColumn: {
        flex: 3,
        flexDirection: "column",
    },
    moveContainerName: {
        fontFamily: "Pretendard-Medium",
        color: "white",
    },
    moveListContainerjudge: {
        fontFamily: "Pretendard-Medium",
        color: "#8B8B8B",
    },
    moveContainerActivateColumn: {
        fontFamily: "Pretendard-Bold",
        color: "white",
        flex: 1,
        textAlign: "center",
    },
    moveContainerGuardColumn: {
        fontFamily: "Pretendard-Bold",
        color: "white",
        flex: 1,
        textAlign: "center",
    },
    moveContainerHitColumn: {
        fontFamily: "Pretendard-Bold",
        color: "white",
        flex: 1,
        textAlign: "center",
    },
    moveContainerCounterColumn: {
        fontFamily: "Pretendard-Bold",
        color: "white",
        flex: 1,
        textAlign: "center",
    },
});

export default MoveContainer;
