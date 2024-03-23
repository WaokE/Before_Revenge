import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import navigateCharacterMoveScreen from "../lib/navigateCharacterMoveScreen";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const CharacterImagePaths = {
    니나: require("../assets/CharacterImage/Nina-Williams.png"),
    "데빌 진": require("../assets/CharacterImage/Devil-Jin.png"),
    드라구노프: require("../assets/CharacterImage/Sergei-Dragunov.png"),
    라스: require("../assets/CharacterImage/Lars-Alexandersson.png"),
    레오: require("../assets/CharacterImage/Leo.png"),
    레이나: require("../assets/CharacterImage/Reina.png"),
    레이븐: require("../assets/CharacterImage/Raven.png"),
    로우: require("../assets/CharacterImage/Marshall-Law.png"),
    리로이: require("../assets/CharacterImage/Leroy-Smith.png"),
    리리: require("../assets/CharacterImage/Lili.png"),
    "리 차오랑": require("../assets/CharacterImage/Lee.png"),
    브라이언: require("../assets/CharacterImage/Bryan-Fury.png"),
    빅터: require("../assets/CharacterImage/Victor-Chevalier.png"),
    샤오유: require("../assets/CharacterImage/Ling-Xiaoyu.png"),
    샤힌: require("../assets/CharacterImage/Shaheen.png"),
    스티브: require("../assets/CharacterImage/Steve-Fox.png"),
    아스카: require("../assets/CharacterImage/Asuka.png"),
    아주세나: require("../assets/CharacterImage/Azucena.png"),
    알리사: require("../assets/CharacterImage/Alisa.png"),
    요시미츠: require("../assets/CharacterImage/Yoshimitsu.png"),
    자피나: require("../assets/CharacterImage/Zafina.png"),
    "잭-8": require("../assets/CharacterImage/Jack-8.png"),
    준: require("../assets/CharacterImage/Jun-Kazama.png"),
    진: require("../assets/CharacterImage/Jin.png"),
    카즈야: require("../assets/CharacterImage/Kazuya-Mishima.png"),
    쿠마: require("../assets/CharacterImage/Kuma.png"),
    클라우디오: require("../assets/CharacterImage/Claudio-Serafino.png"),
    킹: require("../assets/CharacterImage/King.png"),
    판다: require("../assets/CharacterImage/Panda.png"),
    "펭 웨이": require("../assets/CharacterImage/Feng-Wei.png"),
    폴: require("../assets/CharacterImage/Paul-Phoenix.png"),
    화랑: require("../assets/CharacterImage/Hwoarang.png"),
};

import CharacterIcon from "../components/CharacterIcon";

const SelectCharacterScreen = ({ navigation }) => {
    const handleIconPress = (characterName) => {
        navigation.navigate(navigateCharacterMoveScreen(characterName));
    };

    const characterIcons = Object.keys(CharacterImagePaths).map((characterName) => (
        <CharacterIcon
            key={characterName}
            name={characterName}
            imagePath={CharacterImagePaths[characterName]}
            onPressIcon={handleIconPress}
        />
    ));

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient colors={["#214C5C", "#000000"]} style={styles.appContainer}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Image
                        source={require("../assets/tekken_logo.png")}
                        style={{
                            width: windowWidth * 0.3,
                            height: windowHeight * 0.1,
                            resizeMode: "contain",
                        }}
                    />
                    <Text
                        style={{
                            fontFamily: "tekkenfont",
                            fontSize: windowWidth * 0.07,
                            textAlign: "center",
                            color: "white",
                            paddingLeft: windowWidth * 0.02,
                        }}
                    >
                        movelist
                    </Text>
                </View>
                <ScrollView contentContainerStyle={styles.container}>{characterIcons}</ScrollView>
            </LinearGradient>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
});

export default SelectCharacterScreen;
