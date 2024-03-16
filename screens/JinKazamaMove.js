import { View, StyleSheet, ScrollView, Text } from "react-native";

import moveData from "../assets/moveData/jin-kazama_frame_data.json";

import MoveContainer from "../components/MoveContainer";

import convertCommand from "../lib/convertCommand";

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

const JinKazamaMove = () => {
    return (
        <View style={styles.moveScreen}>
            <ScrollView>
                {moveData.frameData.map((move, index) => {
                    return (
                        <MoveContainer
                            key={index}
                            name={move.name ? move.name : "이름 없음"}
                            command={convertCommand(move.command)}
                            hitLevel={move.hitLevel}
                            damage={move.damage}
                            startUpFrame={move.startUpFrame}
                            blockFrame={move.blockFrame}
                            hitFrame={move.hitFrame}
                            counterHitFrame={move.counterHitFrame}
                            feature={move.feature}
                            notes={move.notes}
                        />
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    moveScreen: {
        width: "100%",
        flex: 1,
        backgroundColor: "purple",
    },
});

export default JinKazamaMove;
