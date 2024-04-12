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
    ScrollView,
} from "react-native";
import { useState, useEffect } from "react";
import { Icon } from "@rneui/themed";

// 컴포넌트
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
                // tempFilterInput={tempFilterInput}
                // setTempFilterInput={setTempFilterInput}
            />
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
            <View style={styles.filterContainer}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}
                >
                    <Pressable
                        onPress={() => {
                            setIsKeyboardOpen(true);
                        }}
                    >
                        <Icon name="filter-alt" color="gray" size={30} />
                    </Pressable>
                    <View style={{ flexDirection: "row", gap: 4 }}>
                        {Object.keys(filterInput.feature).some(
                            (key) => filterInput.feature[key] === true
                        ) && (
                            <Pressable
                                onPress={() => {
                                    setFilterInput((prev) => ({
                                        ...prev,
                                        feature: { HM: false, HT: false, PC: false, TN: false },
                                    }));
                                }}
                            >
                                <View style={styles.showCurrentFilterItem}>
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
                                    <Icon name="close" size={20} color={"white"} />
                                </View>
                            </Pressable>
                        )}
                        {filterInput.hitLevel.length > 0 && (
                            <Pressable
                                onPress={() => {
                                    setFilterInput((prev) => {
                                        return {
                                            ...prev,
                                            hitLevel: [],
                                        };
                                    });
                                }}
                            >
                                <View style={styles.showCurrentFilterItem}>
                                    <Text style={{ color: "white" }}>
                                        {filterInput.hitLevel.join(" ")}
                                    </Text>
                                    <Icon name="close" size={20} color={"white"} />
                                </View>
                            </Pressable>
                        )}
                        {(filterInput.frame.hitOrGuard !== "UNSELECTED" ||
                            filterInput.frame.lossOrGain !== "UNSELECTED" ||
                            filterInput.frame.number !== "" ||
                            filterInput.frame.aboveOrBelow !== "UNSELECTED") && (
                            <Pressable
                                onPress={() => {
                                    setFilterInput((prev) => ({
                                        ...prev,
                                        frame: {
                                            number: "",
                                            lossOrGain: "UNSELECTED",
                                            hitOrGuard: "UNSELECTED",
                                            aboveOrBelow: "UNSELECTED",
                                        },
                                    }));
                                }}
                            >
                                <View style={styles.showCurrentFilterCommand}>
                                    {filterInput.frame.hitOrGuard !== "UNSELECTED" && (
                                        <Text style={{ color: "white" }}>
                                            {filterInput.frame.hitOrGuard}
                                        </Text>
                                    )}
                                    {filterInput.frame.lossOrGain !== "UNSELECTED" && (
                                        <Text style={{ color: "white" }}>
                                            {filterInput.frame.lossOrGain}
                                        </Text>
                                    )}
                                    {filterInput.frame.number !== "" && (
                                        <Text style={{ color: "white" }}>
                                            {filterInput.frame.number}
                                        </Text>
                                    )}
                                    {filterInput.frame.aboveOrBelow !== "UNSELECTED" && (
                                        <Text style={{ color: "white" }}>
                                            {filterInput.frame.aboveOrBelow}
                                        </Text>
                                    )}
                                    <Icon name="close" size={20} color={"white"} />
                                </View>
                            </Pressable>
                        )}
                        {filterInput.command.length > 0 && (
                            <Pressable
                                onPress={() => {
                                    setFilterInput((prev) => ({ ...prev, command: [] }));
                                }}
                            >
                                <View style={styles.showCurrentFilterItem}>
                                    {filterInput.command.map((item, index) => (
                                        <View key={index}>{convertCommand([item])}</View>
                                    ))}
                                    <Icon name="close" size={20} color={"white"} />
                                </View>
                            </Pressable>
                        )}
                    </View>
                </ScrollView>
            </View>
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
    filterContainer: {
        backgroundColor: "#202124",
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 15,
        borderRadius: 10,
        marginBottom: 10,
        padding: 5,
    },
    showCurrentFilterItem: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 4,
        padding: 2,
        margin: 2,
    },
    showCurrentFilterCommand: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 4,
        padding: 2,
        margin: 2,
        gap: 2,
    },
});

export default CharacterMoveScreen;
