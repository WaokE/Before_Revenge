import { Text, Pressable, StyleSheet, PixelRatio } from "react-native";

const normalizeFontSize = (size) => {
    return size / PixelRatio.getFontScale();
};

const SectionChip = ({ title, selectedSection, setSelectedSection }) => {
    return (
        <Pressable
            style={selectedSection === title ? styles.filterChipSelected : styles.filterChip}
            onPress={() => setSelectedSection(title)}
            android_ripple={{ color: "#3E3E3E" }}
        >
            <Text
                style={
                    selectedSection === title
                        ? styles.filterChipTextSelected
                        : styles.filterChipText
                }
            >
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
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
        fontSize: normalizeFontSize(14),
        fontFamily: "Pretendard-Medium",
        color: "#6B6B6B",
    },
    filterChipTextSelected: {
        fontSize: normalizeFontSize(14),
        fontFamily: "Pretendard-Medium",
        color: "white",
    },
});

export default SectionChip;
