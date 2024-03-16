import { Image, View, Text, StyleSheet } from "react-native";

const commandImagePath = {
    1: require("../assets/MoveIcon/1.png"),
    2: require("../assets/MoveIcon/2.png"),
    3: require("../assets/MoveIcon/3.png"),
    4: require("../assets/MoveIcon/4.png"),
    "1+2": require("../assets/MoveIcon/12.png"),
    "1+3": require("../assets/MoveIcon/13.png"),
    "1+4": require("../assets/MoveIcon/14.png"),
    "2+3": require("../assets/MoveIcon/23.png"),
    "2+4": require("../assets/MoveIcon/24.png"),
    "3+4": require("../assets/MoveIcon/34.png"),
    "1+2+3": require("../assets/MoveIcon/123.png"),
    "1+2+4": require("../assets/MoveIcon/124.png"),
    "1+3+4": require("../assets/MoveIcon/134.png"),
    "2+3+4": require("../assets/MoveIcon/234.png"),
    "1+2+3+4": require("../assets/MoveIcon/1234.png"),
    N: require("../assets/MoveIcon/n.png"),
    DB: require("../assets/MoveIcon/db.png"),
    D: require("../assets/MoveIcon/d.png"),
    DF: require("../assets/MoveIcon/df.png"),
    F: require("../assets/MoveIcon/f.png"),
    UF: require("../assets/MoveIcon/uf.png"),
    U: require("../assets/MoveIcon/u.png"),
    UB: require("../assets/MoveIcon/ub.png"),
    B: require("../assets/MoveIcon/b.png"),
    FF: require("../assets/MoveIcon/fh.png"),
    WS: require("../assets/MoveIcon/ws.png"),
};

export default function convertCommand(commands) {
    const result = [];
    const commandsArray = commands.split(",");
    commandsArray.forEach((command) => {
        const inputs = command.split("");
        // 레버 입력이 있다면, 처리
        const lever = [];
        while (
            inputs[0] === "U" ||
            inputs[0] === "D" ||
            inputs[0] === "F" ||
            inputs[0] === "B" ||
            inputs[0] === "W" ||
            inputs[0] === "S"
        ) {
            lever.push(inputs.shift());
        }
        if (inputs[0] === "+") inputs.shift();
        if (lever.length > 0)
            result.push({ type: "command", value: commandImagePath[lever.join("")] });
        // 나머지 버튼 입력 처리
        if (inputs[0] === "{") result.push({ type: "text", value: inputs.join("") });
        else if (inputs.length > 0)
            result.push({ type: "command", value: commandImagePath[inputs.join("")] });
    });

    return (
        <View style={{ flexDirection: "row" }}>
            {result.map((data, index) => {
                if (data.type === "text")
                    return (
                        <Text key={index} style={styles.text}>
                            {data.value}
                        </Text>
                    );
                else if (data.type === "command")
                    return (
                        <Image key={index} source={data.value} style={{ width: 20, height: 20 }} />
                    );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: "white",
    },
});
