// 프레임워크 API
import {
    View,
    StyleSheet,
    Image,
    Button,
    SectionList,
    Text,
    TextInput,
    SafeAreaView,
} from "react-native";
import { useState, memo } from "react";

// 컴포넌트
import MoveContainer from "../components/MoveContainer";
import MoveListFilterKeyboard from "../components/MoveListFilterKeyboard";

// 라이브러리
import convertCommand from "../lib/convertCommand";
import convertFeature from "../lib/convertFeature";
import importCharacterMoveData from "../lib/importCharacterMoveData";

const CharacterMoveScreen = ({ route }) => {
    const { characterName } = route.params;
    const moveData = importCharacterMoveData[characterName];
    const [filterInput, setFilterInput] = useState({
        feature: {
            HM: false,
            HT: false,
            PC: false,
            TN: false,
        },
        command: [],
        text: "",
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <SafeAreaView style={styles.moveScreen}>
            {/* 필터 키보드  */}
            <MoveListFilterKeyboard
                onChangeFilterInput={setFilterInput}
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
            />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    backgroundColor: "white",
                    borderRadius: 5,
                }}
            >
                <TextInput
                    onChangeText={(text) => setFilterInput((prev) => ({ ...prev, text }))}
                    style={{ flex: 1 }}
                />
                <Button title="Open filter" onPress={() => setIsModalOpen((prev) => !prev)} />
            </View>
            <View style={{ flexDirection: "row" }}>
                {filterInput.feature.HM && (
                    <Image
                        source={require("../assets/FeatureIcon/HMicon.png")}
                        style={{ width: 20, height: 20 }}
                    />
                )}
                {filterInput.feature.HT && (
                    <Image
                        source={require("../assets/FeatureIcon/HTicon.png")}
                        style={{ width: 20, height: 20 }}
                    />
                )}
                {filterInput.feature.PC && (
                    <Image
                        source={require("../assets/FeatureIcon/PCicon.png")}
                        style={{ width: 20, height: 20 }}
                    />
                )}
                {filterInput.feature.TN && (
                    <Image
                        source={require("../assets/FeatureIcon/TNicon.png")}
                        style={{ width: 20, height: 20 }}
                    />
                )}
                {filterInput.command.map((item, index) => (
                    <View key={index}>{convertCommand([item])}</View>
                ))}
            </View>
            <MemoizedMoveList data={moveData} filterInput={filterInput} />
        </SafeAreaView>
    );
};

const filterMoveList = (data, filterInput) => {
    const result = [];
    data.forEach((section) => {
        const filteredData = section.data.filter((move) => {
            if (Object.values(filterInput.feature).every((value) => value === false)) {
                return (
                    move.command.join("").includes(filterInput.command.join("")) &&
                    (move.name.includes(filterInput.text) || move.notes.includes(filterInput.text))
                );
            } else {
                return (
                    move.command.join("").includes(filterInput.command.join("")) &&
                    Object.keys(filterInput.feature).every(
                        (key) =>
                            (filterInput.feature[key] === true && move.feature.includes(key)) ||
                            filterInput.feature[key] === false
                    ) &&
                    (move.name.includes(filterInput.text) || move.notes.includes(filterInput.text))
                );
            }
        });
        if (filteredData.length !== 0) {
            result.push({ title: section.title, data: filteredData });
        }
    });
    return result;
};

const MemoizedMoveList = memo(({ data, filterInput }) => (
    <SectionList
        sections={filterMoveList(data, filterInput)}
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
        renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeaderText}>{title}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
        extraData={filterInput}
    />
));

const styles = StyleSheet.create({
    moveScreen: {
        borderRadius: 10,
        width: "100%",
        flex: 1,
    },
    sectionHeaderText: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default CharacterMoveScreen;
