import { View, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

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
        switch (characterName) {
            case "니나":
                navigation.navigate("NinaWilliamsMoveScreen");
                break;
            case "데빌 진":
                navigation.navigate("DevilJinMoveScreen");
                break;
            case "드라구노프":
                navigation.navigate("SergeiDragunovMoveScreen");
                break;
            case "라스":
                navigation.navigate("LarsAlexanderssonMoveScreen");
                break;
            case "레오":
                navigation.navigate("LeoMoveScreen");
                break;
            case "레이나":
                navigation.navigate("ReinaMoveScreen");
                break;
            case "레이븐":
                navigation.navigate("RavenMoveScreen");
                break;
            case "로우":
                navigation.navigate("MarshallLawMoveScreen");
                break;
            case "리로이":
                navigation.navigate("LeroySmithMoveScreen");
                break;
            case "리리":
                navigation.navigate("LiliMoveScreen");
                break;
            case "리 차오랑":
                navigation.navigate("LeeMoveScreen");
                break;
            case "브라이언":
                navigation.navigate("BryanFuryMoveScreen");
                break;
            case "빅터":
                navigation.navigate("VictorChevalierMoveScreen");
                break;
            case "샤오유":
                navigation.navigate("LingXiaoyuMoveScreen");
                break;
            case "샤힌":
                navigation.navigate("ShaheenMoveScreen");
                break;
            case "스티브":
                navigation.navigate("SteveFoxMoveScreen");
                break;
            case "아스카":
                navigation.navigate("AsukaMoveScreen");
                break;
            case "아주세나":
                navigation.navigate("AzucenaMoveScreen");
                break;
            case "알리사":
                navigation.navigate("AlisaMoveScreen");
                break;
            case "요시미츠":
                navigation.navigate("YoshimitsuMoveScreen");
                break;
            case "자피나":
                navigation.navigate("ZafinaMoveScreen");
                break;
            case "잭-8":
                navigation.navigate("Jack8MoveScreen");
                break;
            case "준":
                navigation.navigate("JunKazamaMoveScreen");
                break;
            case "진":
                navigation.navigate("JinKazamaMoveScreen");
                break;
            case "카즈야":
                navigation.navigate("KazuyaMishimaMoveScreen");
                break;
            case "쿠마":
                navigation.navigate("KumaMoveScreen");
                break;
            case "클라우디오":
                navigation.navigate("ClaudioSerafinoMoveScreen");
                break;
            case "킹":
                navigation.navigate("KingMoveScreen");
                break;
            case "판다":
                navigation.navigate("PandaMoveScreen");
                break;
            case "펭 웨이":
                navigation.navigate("FengWeiMoveScreen");
                break;
            case "폴":
                navigation.navigate("PaulPhoenixMoveScreen");
                break;
            case "화랑":
                navigation.navigate("HwoarangMoveScreen");
                break;
            default:
                console.log("캐릭터 이름이 없습니다.");
        }
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
        <LinearGradient colors={["#214C5C", "#000000"]} style={styles.appContainer}>
            <ScrollView contentContainerStyle={styles.container}>{characterIcons}</ScrollView>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,

        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },
});

export default SelectCharacterScreen;
