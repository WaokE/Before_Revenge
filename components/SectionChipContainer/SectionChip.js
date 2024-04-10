import { Text, Pressable, StyleSheet } from "react-native";

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
        color: "#6B6B6B",
    },
    filterChipTextSelected: {
        color: "white",
    },
});

export default SectionChip;
