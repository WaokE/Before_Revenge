import { View, Text, StyleSheet } from "react-native";

import TextWithHighlight from "./TextWithHightlight";

// const sampleMove = {
//     name: "Sample Move",
//     command: "FF3",
//     hitLevel: "M",
//     damage: "20",
//     startUpFrame: "23F",
//     blockFrame: "0",
//     hitFrame: "다운",
//     counterHitFrame: "시동",
//     feature: "HT / PC / TN",
//     notes: "통칭 좌종 / 주력기",
// };

// 기술 하나의 정보들을 props로 전달받아, 렌더링하는 컴포넌트
const MoveContainer = (props) => {
    return (
        <View style={styles.moveContainer}>
            <View style={styles.mainInfoContainer}>
                <TextWithHighlight
                    text={props.name}
                    wantToHighlight={props.highlight}
                    style={styles.commandName}
                />
                <View style={{ flexDirection: "row", gap: 4 }}>
                    <Text style={styles.judgeInfoText}>{props.hitLevel}</Text>
                    <Text style={styles.judgeInfoText}>{props.damage}</Text>
                </View>
                <View>{props.command}</View>
                <TextWithHighlight
                    text={props.notes}
                    wantToHighlight={props.highlight}
                    style={styles.noteText}
                />
            </View>
            <View style={styles.detailInfoContainer}>
                <Text style={styles.frameDataText}>{`발동 ${props.startUpFrame}`}</Text>
                <Text style={styles.frameDataText}>
                    가드{" "}
                    <Text style={Number(props.blockFrame) >= 0 ? styles.greenText : styles.redText}>
                        {props.blockFrame}
                    </Text>
                </Text>
                <Text style={styles.frameDataText}>
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
                <Text style={styles.frameDataText}>
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
        borderWidth: 1,
        borderColor: "#999999",
        marginHorizontal: 4,
    },
    commandName: {
        color: "#e6e6e6",
        fontSize: 14,
        fontWeight: "bold",
    },
    judgeInfoText: {
        color: "white",
        fontSize: 11,
    },
    noteText: {
        fontSize: 10,
        fontWeight: "bold",
        color: "#e6e600",
    },
    frameDataText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    },
    mainInfoContainer: {
        flex: 5,
        backgroundColor: "transparent",
        justifyContent: "space-between",
        padding: 4,
    },
    detailInfoContainer: {
        flex: 2,
        backgroundColor: "transparent",
        alignItems: "center",
        borderLeftWidth: 1,
        borderColor: "#999999",
    },
    greenText: {
        color: "#00e600",
    },
    redText: {
        color: "#ff1a1a",
    },
});

export default MoveContainer;
