import React from "react";
import { Text, StyleSheet } from "react-native";

const TextWithHighlight = ({ text, wantToHighlight, style }) => {
    const highlightIndex = text.indexOf(wantToHighlight);
    if (highlightIndex === -1) {
        return <Text style={style}>{text}</Text>;
    }

    const beforeHighlight = text.substring(0, highlightIndex);
    const highlightedText = text.substring(highlightIndex, highlightIndex + wantToHighlight.length);
    const afterHighlight = text.substring(highlightIndex + wantToHighlight.length);

    return (
        <Text style={style}>
            {beforeHighlight}
            <Text style={styles.highlight}>{highlightedText}</Text>
            {afterHighlight}
        </Text>
    );
};

const styles = StyleSheet.create({
    highlight: {
        backgroundColor: "#660066",
    },
});

export default TextWithHighlight;
