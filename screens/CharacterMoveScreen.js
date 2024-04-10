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
            <View style={styles.searchInputContainer}>
                <Icon name="search" color="#6B6B6B" size={20} />
                <TextInput
                    placeholder="기술명 검색(초풍...)"
                    placeholderTextColor={"#6B6B6B"}
                    style={styles.searchInput}
                    onChangeText={(text) => null}
                />
            </View>
            <View style={styles.filterChipContainer}>
                <Pressable
                    style={
                        selectedSection === "전체" ? styles.filterChipSelected : styles.filterChip
                    }
                    onPress={() => setSelectedSection("전체")}
                >
                    <Text
                        style={
                            selectedSection === "전체"
                                ? styles.filterChipTextSelected
                                : styles.filterChipText
                        }
                    >
                        전체
                    </Text>
                </Pressable>
                {moveData.map((section) => (
                    <Pressable
                        style={
                            selectedSection === section.title
                                ? styles.filterChipSelected
                                : styles.filterChip
                        }
                        key={section.title}
                        onPress={() => setSelectedSection(section.title)}
                    >
                        <Text
                            style={
                                selectedSection === section.title
                                    ? styles.filterChipTextSelected
                                    : styles.filterChipText
                            }
                        >
                            {section.title}
                        </Text>
                    </Pressable>
                ))}
            </View>
            <View style={styles.moveListContainer}></View>
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
    searchInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#202124",
        padding: 8,
        marginHorizontal: 10,
        gap: 10,
        borderRadius: 5,
    },
    searchInput: {
        color: "white",
        flex: 1,
    },
    filterChipContainer: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
    filterChip: {
        backgroundColor: "transparent",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 18,
    },
    filterChipSelected: {
        backgroundColor: "#202124",
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 18,
    },
    filterChipText: {
        color: "#6B6B6B",
    },
    filterChipTextSelected: {
        color: "white",
    },
    moveListContainer: {
        flex: 1,
        backgroundColor: "#363636",
    },
});

export default CharacterMoveScreen;
