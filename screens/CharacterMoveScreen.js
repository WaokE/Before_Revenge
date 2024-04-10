// 프레임워크 API
import {
    View,
    StyleSheet,
    Image,
    Button,
    Pressable,
    SectionList,
    Text,
    TextInput,
    SafeAreaView,
    Dimensions,
} from "react-native";
import { useState, useEffect } from "react";
import { Icon } from "@rneui/themed";

// 컴포넌트
import MoveContainer from "../components/MoveContainer";
import MoveListFilterKeyboard from "../components/MoveListFilterKeyboard";
import NoFilterResult from "../components/NoFilterResult";
import SearchBar from "../components/SearchBar";
import SectionChips from "../components/SectionChipContainer/SectionChips";
import MoveList from "../components/MoveList/MoveList";

// 라이브러리
import convertCommand from "../lib/convertDataToImage/convertCommand";
import convertFeature from "../lib/convertDataToImage/convertFeature";
import importCharacterMoveData from "../lib/importCharacterMoveData";
import filterMoveList from "../lib/filterMoveList";
import initialFilterInput from "../lib/initialFilterInput";
import { convertCharNameEngToKor } from "../lib/convertCharNameBetweenEngKor";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CharacterMoveScreen = ({ route, navigation }) => {
    const { characterName } = route.params;
    const moveData = importCharacterMoveData[characterName];

    const [selectedSection, setSelectedSection] = useState("전체");

    useEffect(() => {}, []);

    return (
        <View style={styles.moveScreen}>
            <View style={styles.headerContainer}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" color="white" />
                </Pressable>
                <Text style={styles.headerText}>{convertCharNameEngToKor(characterName)}</Text>
                <View style={{ marginLeft: "auto" }}>
                    <Icon name="close" color="white" />
                </View>
            </View>
            <SearchBar
                placeholder="기술명 검색(초풍...)"
                onChangeText={(text) => {
                    console.log(text);
                }}
            />
            <SectionChips
                moveData={moveData}
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
            />
            <MoveList moveData={moveData} selectedSection={selectedSection} />
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
