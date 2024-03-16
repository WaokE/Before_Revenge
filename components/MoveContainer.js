import { View, Text, StyleSheet } from "react-native";

const sampleMove = {
    name: "Sample Move",
    command: "FF3",
    hitLevel: "M",
    damage: "20",
    startUpFrame: "23F",
    blockFrame: "0",
    hitFrame: "다운",
    counterHitFrame: "시동",
    feature: "HT / PC / TN",
    notes: "통칭 좌종 / 주력기",
};

const MoveContainer = (props) => {
    return (
        <View style={styles.moveContainer}>
            <View style={styles.mainInfoContainer}>
                <Text style={styles.commandName}>{props.name}</Text>
                <Text>{props.hitLevel}</Text>
                <Text>{props.command}</Text>
                <Text>{props.notes}</Text>
            </View>
            <View style={styles.detailInfoContainer}>
                <Text>{`발동 ${props.startUpFrame}`}</Text>
                <Text>{`가드 ${props.blockFrame}`}</Text>
                <Text>{`노말히트 ${props.hitFrame}`}</Text>
                <Text>{`카운터히트 ${props.counterHitFrame}`}</Text>
                <Text>{`${props.feature}`}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    moveContainer: {
        flexDirection: "row",
        backgroundColor: "lightgray",
        width: "100%",
        borderWidth: 1,
    },
    commandName: {
        fontSize: 14,
        fontWeight: "bold",
    },
    mainInfoContainer: {
        flex: 4,
        backgroundColor: "gray",
        justifyContent: "space-between",
    },
    detailInfoContainer: {
        flex: 2,
        backgroundColor: "darkgray",
        alignItems: "center",
    },
});

export default MoveContainer;
