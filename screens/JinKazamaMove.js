import { View, StyleSheet, ScrollView, Button, FlatList } from "react-native";
import { useState } from "react";

import moveData from "../assets/moveData/jin_kazama_movelist.json";

import MoveContainer from "../components/MoveContainer";
import MoveListFilterKeyboard from "../components/MoveListFilterKeyboard";

import convertCommand from "../lib/convertCommand";
import convertFeature from "../lib/convertFeature";

const JinKazamaMove = () => {
    const [filterInput, setFilterInput] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <View style={styles.moveScreen}>
            {/* 필터 키보드  */}
            <MoveListFilterKeyboard
                onChangeFilterInput={setFilterInput}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <View style={{ flexDirection: "row" }}>
                {filterInput.map((item, index) => (
                    <View
                        key={index}
                        style={{
                            padding: 5,
                            margin: 5,
                            backgroundColor: "lightgray",
                            borderRadius: 10,
                        }}
                    >
                        {item}
                    </View>
                ))}
            </View>
            <Button title="Open filter" onPress={() => setIsModalOpen((prev) => !prev)} />
            {/* <ScrollView>
                {moveData.map((move, index) => {
                    if (
                        // move.name.includes(filterInput) ||
                        // move.command.join("").includes(filterInput.toUpperCase())
                        true
                    )
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
            </ScrollView> */}
            <FlatList
                data={moveData}
                renderItem={({ item }) => (
                    <MoveContainer
                        name={item.name ? item.name : "이름 없음"}
                        command={convertCommand(item.command)}
                        hitLevel={item.hitLevel}
                        damage={item.damage}
                        startUpFrame={item.startUpFrame}
                        blockFrame={item.blockFrame}
                        hitFrame={item.hitFrame}
                        counterHitFrame={item.counterHitFrame}
                        feature={convertFeature(item.feature)}
                        notes={item.notes}
                    />
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    moveScreen: {
        width: "100%",
        flex: 1,
    },
});

export default JinKazamaMove;
