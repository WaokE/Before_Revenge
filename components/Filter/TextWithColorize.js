import { Text } from "react-native";

const TextWithColorize = ({ frame, style }) => {
    if (frame.includes("(") || frame.includes(")") || isNaN(frame)) {
        return <Text style={style}>{frame}</Text>;
    } else {
        return (
            <Text style={{ ...style, color: Number(frame) > 0 ? "#00cc00" : "#cc0000" }}>
                {frame}
            </Text>
        );
    }
};

export default TextWithColorize;
