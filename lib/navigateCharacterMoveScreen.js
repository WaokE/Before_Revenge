const navigateCharacterMoveScreen = (characterName) => {
    switch (characterName) {
        case "니나":
            return "NinaWilliamsMoveScreen";

        case "데빌 진":
            return "DevilJinMoveScreen";

        case "드라구노프":
            return "SergeiDragunovMoveScreen";

        case "라스":
            return "LarsAlexanderssonMoveScreen";

        case "레오":
            return "LeoMoveScreen";

        case "레이나":
            return "ReinaMoveScreen";

        case "레이븐":
            return "RavenMoveScreen";

        case "로우":
            return "MarshallLawMoveScreen";

        case "리로이":
            return "LeroySmithMoveScreen";

        case "리리":
            return "LiliMoveScreen";

        case "리 차오랑":
            return "LeeMoveScreen";

        case "브라이언":
            return "BryanFuryMoveScreen";

        case "빅터":
            return "VictorChevalierMoveScreen";

        case "샤오유":
            return "LingXiaoyuMoveScreen";

        case "샤힌":
            return "ShaheenMoveScreen";

        case "스티브":
            return "SteveFoxMoveScreen";

        case "아스카":
            return "AsukaMoveScreen";

        case "아주세나":
            return "AzucenaMoveScreen";

        case "알리사":
            return "AlisaMoveScreen";

        case "요시미츠":
            return "YoshimitsuMoveScreen";

        case "자피나":
            return "ZafinaMoveScreen";

        case "잭-8":
            return "Jack8MoveScreen";

        case "준":
            return "JunKazamaMoveScreen";

        case "진":
            return "JinKazamaMoveScreen";

        case "카즈야":
            return "KazuyaMishimaMoveScreen";

        case "쿠마":
            return "KumaMoveScreen";

        case "클라우디오":
            return "ClaudioSerafinoMoveScreen";

        case "킹":
            return "KingMoveScreen";

        case "판다":
            return "PandaMoveScreen";

        case "펭 웨이":
            return "FengWeiMoveScreen";

        case "폴":
            return "PaulPhoenixMoveScreen";

        case "화랑":
            return "HwoarangMoveScreen";

        case "에디":
            return "EddyGordoMoveScreen";

        default:
            console.log("캐릭터 이름이 없습니다.");
    }
};

export default navigateCharacterMoveScreen;
