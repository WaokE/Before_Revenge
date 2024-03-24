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
                <View style={{ flexDirection: "row", gap: 4 }}>
                    <Text>{props.hitLevel}</Text>
                    <Text>{props.damage}</Text>
                </View>
                <Text>{props.command}</Text>
                <Text style={{ fontSize: 10 }}>{props.notes}</Text>
            </View>
            <View style={styles.detailInfoContainer}>
                <Text>{`발동 ${props.startUpFrame}`}</Text>
                <Text>
                    가드{" "}
                    <Text style={Number(props.blockFrame) >= 0 ? styles.greenText : styles.redText}>
                        {props.blockFrame}
                    </Text>
                </Text>
                <Text>
                    노말히트{" "}
                    <Text
                        style={
                            Number(props.hitFrame) >= 0 ||
                            props.hitFrame === "D" ||
                            props.hitFrame === "A" ||
                            props.hitFrame.includes("(")
                                ? styles.greenText
                                : styles.redText
                        }
                    >
                        {props.hitFrame}
                    </Text>
                </Text>
                <Text>
                    카운터히트{" "}
                    <Text
                        style={
                            Number(props.counterHitFrame) >= 0 ||
                            props.counterHitFrame === "D" ||
                            props.counterHitFrame === "A" ||
                            props.counterHitFrame.includes("(")
                                ? styles.greenText
                                : styles.redText
                        }
                    >
                        {props.counterHitFrame}
                    </Text>
                </Text>
                {props.feature && props.feature}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    moveContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "lightgray",
        borderWidth: 1,
        // borderColor: "#F61276",
        borderColor: "white",
        marginHorizontal: 4,
    },
    commandName: {
        fontSize: 14,
        fontWeight: "bold",
    },
    mainInfoContainer: {
        flex: 5,
        backgroundColor: "gray",
        justifyContent: "space-between",
    },
    detailInfoContainer: {
        flex: 2,
        backgroundColor: "darkgray",
        alignItems: "center",
    },
    greenText: {
        color: "green",
    },
    redText: {
        color: "darkred",
    },
});

export default MoveContainer;
