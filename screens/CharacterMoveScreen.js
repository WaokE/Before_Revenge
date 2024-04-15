// 프레임워크 API
import { View, StyleSheet, Pressable, Text, Dimensions } from "react-native";
import { useState, useEffect } from "react";
import { Icon } from "@rneui/themed";

// 컴포넌트
import MoveListFilterKeyboard from "../components/Filter/MoveListFilterKeyboard";
import SearchBar from "../components/SearchBar";
import SectionChips from "../components/SectionChipContainer/SectionChips";
import MoveList from "../components/MoveList/MoveList";
import FilterChipsContainer from "../components/Filter/FilterChipsContainer";

// 라이브러리
import importCharacterMoveData from "../lib/importCharacterMoveData";
import initialFilterInput from "../lib/initialFilterInput";
import { convertCharNameEngToKor } from "../lib/convertCharNameBetweenEngKor";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CharacterMoveScreen = ({ route, navigation }) => {
    const { characterName } = route.params;
    const moveData = importCharacterMoveData[characterName];

    const [selectedSection, setSelectedSection] = useState("전체");
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
    const [filterInput, setFilterInput] = useState(initialFilterInput);

    useEffect(() => {}, []);

    return (
        <View style={styles.moveScreen}>
            <MoveListFilterKeyboard
                filterInput={filterInput}
                onChangeFilterInput={setFilterInput}
                isModalOpen={isKeyboardOpen}
                setIsModalOpen={setIsKeyboardOpen}
            />
            <View style={styles.headerContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" color="white" />
                </Pressable>
                <Text style={styles.headerText}>{convertCharNameEngToKor(characterName)}</Text>
            </View>
            <SearchBar
                placeholder="기술 검색 (초풍, 컷킥, 통발...)"
                onChangeText={(text) => {
                    setFilterInput((prev) => ({ ...prev, text: text }));
                }}
            />
            <SectionChips
                moveData={moveData}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
            />
            <FilterChipsContainer
                filterInput={filterInput}
                setFilterInput={setFilterInput}
                setIsKeyboardOpen={setIsKeyboardOpen}
            />
            <MoveList
                moveData={moveData}
                selectedSection={selectedSection}
                filterInput={filterInput}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    moveScreen: {
        flex: 1,
        backgroundColor: "#3E3E3E",
    },
    headerContainer: {
        height: windowHeight * 0.08,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontFamily: "Pretendard-Bold",
        marginLeft: 10,
    },
});

export default CharacterMoveScreen;
