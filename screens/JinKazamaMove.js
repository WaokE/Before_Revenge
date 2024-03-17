import { View, StyleSheet, ScrollView, Text } from "react-native";

import moveData from "../assets/moveData/jin_kazama_movelist.json";

import MoveContainer from "../components/MoveContainer";

import convertCommand from "../lib/convertCommand";
import convertFeature from "../lib/convertFeature";

const JinKazamaMove = () => {
    return (
        <View style={styles.moveScreen}>
            <ScrollView>
                {moveData.map((move, index) => {
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
                            feature={convertFeature(move.feature)}
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
