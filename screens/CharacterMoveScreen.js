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
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState, useEffect, memo } from "react";
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

const CharacterMoveScreen = ({ route }) => {
    const { characterName } = route.params;
    const moveData = importCharacterMoveData[characterName];
    const [filterInput, setFilterInput] = useState(initialFilterInput);
    const [tempFilterInput, setTempFilterInput] = useState(initialFilterInput);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        console.log("CharacterMoveScreen rendered, clear filter input");
        setFilterInput(initialFilterInput);
        setTempFilterInput(initialFilterInput);
    }, []);

    return (
        <SafeAreaView style={styles.moveScreen}>
            <View style={{ backgroundColor: "#363636", flex: 1 }}>
                <MoveListFilterKeyboard
                    filterInput={filterInput}
                    onChangeFilterInput={setFilterInput}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                    tempFilterInput={tempFilterInput}
                    setTempFilterInput={setTempFilterInput}
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
                        value={filterInput.text}
                        style={{ flex: 1, textAlign: "center" }}
                        placeholder="기술명, 설명 검색 (ex.초풍신권, 컷킥...)"
                    />
                    <Button
                        title="필터 추가"
                        onPress={() => setIsModalOpen((prev) => !prev)}
                        color="#006666"
                    />
                </View>
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
                                setTempFilterInput((prev) => ({
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
                                setTempFilterInput((prev) => {
                                    return {
                                        ...prev,
                                        hitLevel: [],
                                    };
                                });
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
                                setTempFilterInput((prev) => ({
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
                                setTempFilterInput((prev) => ({ ...prev, command: [] }));
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
                <MemoizedMoveList data={moveData} filterInput={filterInput} />
            </View>
        </SafeAreaView>
    );
};

const MemoizedMoveList = memo(({ data, filterInput }) => {
    console.log("MoveList rendered");

    const filteredMoveList = filterMoveList(data, filterInput);

    return filteredMoveList.length === 0 ? (
        <NoFilterResult />
    ) : (
        <SectionList
            sections={filteredMoveList}
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
                    highlight={filterInput.text}
                />
            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.sectionHeaderText}>{title}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
            extraData={filterInput}
            stickySectionHeadersEnabled={true}
        />
    );
});

const styles = StyleSheet.create({
    moveScreen: {
        borderRadius: 10,
        flex: 1,
    },
    sectionHeaderText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#202124",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        marginHorizontal: 4,
        padding: 8,
    },
    showCurrentFilterItem: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 4,
        padding: 4,
        margin: 4,
    },
    showCurrentFilterCommand: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 4,
        padding: 4,
        margin: 4,
        gap: 2,
    },
});

export default CharacterMoveScreen;
