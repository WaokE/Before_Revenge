import { View, Text, StyleSheet, SectionList } from "react-native";

import MoveContainer from "./MoveContainer";

const MoveList = ({ moveData, selectedSection }) => {
    console.log("MoveList rendered");
    const filteredMoveData =
        selectedSection === "전체"
            ? moveData
            : moveData.filter((data) => data.title === selectedSection);
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
                renderItem={({ item }) => <MoveContainer move={item} />}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.sectionHeaderText}>{title}</Text>
                )}
                keyExtractor={(item, index) => index.toString()}
                // extraData={moveData}
                // stickySectionHeadersEnabled={true}
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
        fontFamily: "Pretendard-Bold",
        textAlign: "center",
        color: "#8B8B8B",
        flex: 3,
    },
    moveListActivateColumn: {
        fontFamily: "Pretendard-Bold",
        textAlign: "center",
        color: "#8B8B8B",
        flex: 1,
    },
    moveListGuardColumn: {
        fontFamily: "Pretendard-Bold",
        textAlign: "center",
        color: "#8B8B8B",
        flex: 1,
    },
    moveListHitColumn: {
        fontFamily: "Pretendard-Bold",
        textAlign: "center",
        color: "#8B8B8B",
        flex: 1,
    },
    moveListCounterColumn: {
        fontFamily: "Pretendard-Bold",
        textAlign: "center",
        color: "#8B8B8B",
        flex: 1,
    },
    sectionHeaderText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#202124",
        borderBottomColor: "white",
        padding: 8,
    },
});
