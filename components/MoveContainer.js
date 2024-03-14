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

const MoveContainer = () => {
    return (
        <View style={styles.moveContainer}>
            <View style={styles.mainInfoContainer}>
                <Text>{sampleMove.name}</Text>
                <Text>{sampleMove.hitLevel}</Text>
                <Text>{sampleMove.command}</Text>
                <Text>{sampleMove.notes}</Text>
            </View>
            <View style={styles.detailInfoContainer}>
                <Text>{`발동 ${sampleMove.startUpFrame}`}</Text>
                <Text>{`가드 ${sampleMove.blockFrame}`}</Text>
                <Text>{`노말히트 ${sampleMove.hitFrame}`}</Text>
                <Text>{`카운터히트 ${sampleMove.counterHitFrame}`}</Text>
                <Text>{`${sampleMove.feature}`}</Text>
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
