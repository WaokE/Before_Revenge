import { View, TextInput, StyleSheet, PixelRatio, Pressable } from "react-native";
import { useRef } from "react";
import { Icon } from "@rneui/themed";

const normalizeFontSize = (size) => {
    return size / PixelRatio.getFontScale();
};

const SearchBar = ({ value, placeholder, onChangeText }) => {
    const textInputRef = useRef(null);

    return (
        <View style={styles.searchInputContainer}>
            <Icon name="search" color="#6B6B6B" size={20} />
            <TextInput
                value={value}
                placeholder={placeholder}
                placeholderTextColor={"#6B6B6B"}
                style={styles.searchInput}
                onChangeText={(text) => onChangeText(text)}
                ref={textInputRef}
            />
            <Pressable
                onPress={() => {
                    onChangeText("");
                    textInputRef.current.blur();
                }}
            >
                <Icon name="close" color="#6B6B6B" size={25} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
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
        fontSize: normalizeFontSize(18),
        color: "white",
        flex: 1,
    },
});

export default SearchBar;
