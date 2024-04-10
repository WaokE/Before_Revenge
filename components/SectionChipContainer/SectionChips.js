import { View, StyleSheet } from "react-native";

import SectionChip from "./SectionChip";

const SectionChips = ({ moveData, selectedSection, setSelectedSection }) => {
    return (
        <View style={styles.filterChipContainer}>
            <SectionChip
                title="전체"
                selectedSection={selectedSection}
                setSelectedSection={setSelectedSection}
            />
            {moveData.map((section) => (
                <SectionChip
                    key={section.title}
                    title={section.title}
                    selectedSection={selectedSection}
                    setSelectedSection={setSelectedSection}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    filterChipContainer: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default SectionChips;
