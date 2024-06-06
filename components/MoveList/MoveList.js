import { View, Text, StyleSheet, SectionList, PixelRatio } from "react-native";

import MoveContainer from "./MoveContainer";
import NoFilterResult from "../Filter/NoFilterResult";

import filterMoveList from "../../lib/filterMoveList";

const normalizeFontSize = (size) => {
    return size / PixelRatio.getFontScale();
};

const MoveList = ({ moveData, selectedSection, filterInput, isAllNoteVisible }) => {
    console.log("MoveList rendered");
    let filteredMoveData =
        selectedSection === "전체"
            ? moveData
            : moveData.filter((data) => data.title === selectedSection);
    filteredMoveData = filterMoveList(filteredMoveData, filterInput);
    if (filteredMoveData.length === 0) return <NoFilterResult />;

    return (
        <View style={styles.moveListContainer}>
            <View style={styles.moveListHeader}>
                <Text style={styles.moveListMainColumn}>기술명</Text>
                <Text style={styles.moveListActivateColumn}>발동</Text>
                <Text style={styles.moveListGuardColumn}>가드</Text>
                <Text style={styles.moveListHitColumn}>히트</Text>
                <Text style={styles.moveListCounterColumn}>카운터</Text>
            </View>
            <SectionList
                sections={filteredMoveData}
                renderItem={({ item }) => (
                    <MoveContainer
                        move={item}
                        highLight={filterInput.text}
                        isAllNoteVisible={isAllNoteVisible}
                    />
                )}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeaderText}>{title}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default MoveList;

const styles = StyleSheet.create({
    moveListContainer: {
        flex: 1,
        backgroundColor: "#363636",
    },
    moveListHeader: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: "#8B8B8B",
    },
    moveListMainColumn: {
        fontSize: normalizeFontSize(16),
        fontFamily: "Pretendard-Bold",
        textAlign: "center",
        color: "#8B8B8B",
        flex: 5,
    },
    moveListActivateColumn: {
        fontSize: normalizeFontSize(14),
        fontFamily: "Pretendard-Bold",
        textAlign: "center",
        color: "#8B8B8B",
        flex: 1,
    },
    moveListGuardColumn: {
        fontSize: normalizeFontSize(14),
        fontFamily: "Pretendard-Bold",
        textAlign: "center",
        color: "#8B8B8B",
        flex: 1,
    },
    moveListHitColumn: {
        fontSize: normalizeFontSize(14),
        fontFamily: "Pretendard-Bold",
        textAlign: "center",
        color: "#8B8B8B",
        flex: 1,
    },
    moveListCounterColumn: {
        fontSize: normalizeFontSize(14),
        fontFamily: "Pretendard-Bold",
        textAlign: "center",
        color: "#8B8B8B",
        flex: 1,
    },
    sectionHeaderText: {
        fontSize: normalizeFontSize(20),
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#202124",
        borderBottomColor: "white",
        padding: 8,
    },
});
