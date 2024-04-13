import React from "react";
import { Text, StyleSheet } from "react-native";

// 특정 텍스트를 하이라이트하는 컴포넌트
const TextWithHighlight = ({ text, wantToHighlight, style }) => {
    if (!text) return null;
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
        backgroundColor: "#e6ac00",
    },
});

export default TextWithHighlight;
