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
import { LinearGradient } from "expo-linear-gradient";
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
        frame: {
            number: "",
            lossOrGain: "UNSELECTED",
            hitOrGuard: "UNSELECTED",
            aboveOrBelow: "UNSELECTED",
        },
    });
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <SafeAreaView style={styles.moveScreen}>
            <LinearGradient colors={["#214C5C", "#000000"]} style={{ flex: 1 }}>
                {/* 필터 키보드  */}
                <MoveListFilterKeyboard
                    filterInput={filterInput}
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
                        value={filterInput.text}
                        style={{ flex: 1, textAlign: "center" }}
                        placeholder="기술명, 설명 검색 (ex.초풍신권, 통발...)"
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
                        </View>
                    )}
                    {(filterInput.frame.hitOrGuard !== "UNSELECTED" ||
                        filterInput.frame.lossOrGain !== "UNSELECTED" ||
                        filterInput.frame.number !== "" ||
                        filterInput.frame.aboveOrBelow !== "UNSELECTED") && (
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
                                <Text style={{ color: "white" }}>{filterInput.frame.number}</Text>
                            )}
                            {filterInput.frame.aboveOrBelow !== "UNSELECTED" && (
                                <Text style={{ color: "white" }}>
                                    {filterInput.frame.aboveOrBelow}
                                </Text>
                            )}
                        </View>
                    )}
                    {filterInput.command.length > 0 && (
                        <View style={styles.showCurrentFilterItem}>
                            {filterInput.command.map((item, index) => (
                                <View key={index}>{convertCommand([item])}</View>
                            ))}
                        </View>
                    )}
                </View>
                <MemoizedMoveList data={moveData} filterInput={filterInput} />
            </LinearGradient>
        </SafeAreaView>
    );
};

const filterMoveList = (data, filterInput) => {
    const result = [];
    data.forEach((section) => {
        const filteredData = section.data.filter((move) => {
            const commandMatches = move.command.join("").includes(filterInput.command.join(""));
            const textMatches =
                move.name.includes(filterInput.text) || move.notes.includes(filterInput.text);
            let frameMatches = true;

            // 유효한 프레임 필터가 있는 경우
            if (
                filterInput.frame.number !== "" &&
                filterInput.frame.lossOrGain !== "UNSELECTED" &&
                !isNaN(filterInput.frame.number)
            ) {
                const frameNumber = parseInt(filterInput.frame.number);

                // 손해/이득 + 숫자만 들어오는 경우 -> 가드/히트 시 관계없이 손해/이득이 숫자랑 일치하는 경우만 리턴
                if (
                    filterInput.frame.hitOrGuard === "UNSELECTED" &&
                    filterInput.frame.aboveOrBelow === "UNSELECTED"
                ) {
                    console.log("test");
                    // 손해 프레임 검색
                    if (filterInput.frame.lossOrGain === "손해가") {
                        frameMatches =
                            -parseInt(move.hitFrame) === frameNumber ||
                            -parseInt(move.blockFrame) === frameNumber;
                    }
                    // 이득 프레임 검색
                    if (filterInput.frame.lossOrGain === "이득이") {
                        frameMatches =
                            parseInt(move.hitFrame) === frameNumber ||
                            parseInt(move.blockFrame) === frameNumber;
                    }
                }
                // 손해/이득 + 숫자 + 이상/이하가 들어오는 경우 -> 가드/히트 시 관계없이 손해/이득이 숫자보다 크거나 작은 경우만 리턴
                else if (filterInput.frame.hitOrGuard === "UNSELECTED") {
                    if (filterInput.frame.aboveOrBelow === "이상") {
                        if (filterInput.frame.lossOrGain === "손해가") {
                            frameMatches =
                                -parseInt(move.hitFrame) >= frameNumber ||
                                -parseInt(move.blockFrame) >= frameNumber;
                        }
                        if (filterInput.frame.lossOrGain === "이득이") {
                            frameMatches =
                                parseInt(move.hitFrame) >= frameNumber ||
                                parseInt(move.blockFrame) >= frameNumber;
                        }
                    }
                    if (filterInput.frame.aboveOrBelow === "이하") {
                        if (filterInput.frame.lossOrGain === "손해가") {
                            frameMatches =
                                -parseInt(move.hitFrame) <= frameNumber ||
                                -parseInt(move.blockFrame) <= frameNumber;
                        }
                        if (filterInput.frame.lossOrGain === "이득이") {
                            frameMatches =
                                parseInt(move.hitFrame) <= frameNumber ||
                                parseInt(move.blockFrame) <= frameNumber;
                        }
                    }
                }
                // 맞히고/막히고 + 손해/이득 + 숫자가 입력된 경우
                else if (filterInput.frame.aboveOrBelow === "UNSELECTED") {
                    if (filterInput.frame.hitOrGuard === "맞히고") {
                        if (filterInput.frame.lossOrGain === "손해가") {
                            frameMatches = -parseInt(move.hitFrame) === frameNumber;
                        }
                        if (filterInput.frame.lossOrGain === "이득이") {
                            frameMatches = parseInt(move.hitFrame) === frameNumber;
                        }
                    }
                    if (filterInput.frame.hitOrGuard === "막히고") {
                        if (filterInput.frame.lossOrGain === "손해가") {
                            frameMatches = -parseInt(move.blockFrame) === frameNumber;
                        }
                        if (filterInput.frame.lossOrGain === "이득이") {
                            frameMatches = parseInt(move.blockFrame) === frameNumber;
                        }
                    }
                }
                // 맞히고/막히고 + 손해/이득 + 숫자 + 이상/이하가 입력된 경우
                else {
                    if (filterInput.frame.hitOrGuard === "맞히고") {
                        if (filterInput.frame.aboveOrBelow === "이상") {
                            if (filterInput.frame.lossOrGain === "손해가") {
                                frameMatches = -parseInt(move.hitFrame) >= frameNumber;
                            }
                            if (filterInput.frame.lossOrGain === "이득이") {
                                frameMatches = parseInt(move.hitFrame) >= frameNumber;
                            }
                        }
                        if (filterInput.frame.aboveOrBelow === "이하") {
                            if (filterInput.frame.lossOrGain === "손해가") {
                                frameMatches = -parseInt(move.hitFrame) <= frameNumber;
                            }
                            if (filterInput.frame.lossOrGain === "이득이") {
                                frameMatches = parseInt(move.hitFrame) <= frameNumber;
                            }
                        }
                    }
                    if (filterInput.frame.hitOrGuard === "막히고") {
                        if (filterInput.frame.aboveOrBelow === "이상") {
                            if (filterInput.frame.lossOrGain === "손해가") {
                                frameMatches = -parseInt(move.blockFrame) >= frameNumber;
                            }
                            if (filterInput.frame.lossOrGain === "이득이") {
                                frameMatches = parseInt(move.blockFrame) >= frameNumber;
                            }
                        }
                        if (filterInput.frame.aboveOrBelow === "이하") {
                            if (filterInput.frame.lossOrGain === "손해가") {
                                frameMatches = -parseInt(move.blockFrame) <= frameNumber;
                            }
                            if (filterInput.frame.lossOrGain === "이득이") {
                                frameMatches = parseInt(move.blockFrame) <= frameNumber;
                            }
                        }
                    }
                }
            }

            if (!Object.values(filterInput.feature).some(Boolean)) {
                return commandMatches && textMatches && frameMatches;
            } else {
                return (
                    commandMatches &&
                    Object.entries(filterInput.feature).every(([key, value]) =>
                        value ? move.feature.includes(key) : true
                    ) &&
                    textMatches &&
                    frameMatches
                );
            }
        });

        if (filteredData.length !== 0) {
            result.push({ title: section.title, data: filteredData });
        }
    });

    return result;
};

const MemoizedMoveList = memo(
    ({ data, filterInput }) => (
        console.log("MoveList rendered"),
        (
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
                        highlight={filterInput.text}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeaderText}>{title}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
                extraData={filterInput}
            />
        )
    )
);

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
        backgroundColor: "#1b3e4b",
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderColor: "#999999",
        marginHorizontal: 4,
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
