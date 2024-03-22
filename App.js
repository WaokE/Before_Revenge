// 프레임워크 API
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 컴포넌트
import SelectCharacterScreen from "./screens/SelectCharacterScreen";
import CharacterMoveScreen from "./screens/CharacterMoveScreen";

// 네비게이션 스택
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="SelectCharacterScreen"
                        component={SelectCharacterScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="AlisaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "alisa" }}
                    />
                    <Stack.Screen
                        name="AsukaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "asuka" }}
                    />
                    <Stack.Screen
                        name="AzucenaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "azucena" }}
                    />
                    <Stack.Screen
                        name="BryanFuryMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "bryan-fury" }}
                    />
                    <Stack.Screen
                        name="ClaudioSerafinoMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "claudio-serafino" }}
                    />
                    <Stack.Screen
                        name="DevilJinMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "devil-jin" }}
                    />
                    <Stack.Screen
                        name="FengWeiMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "feng-wei" }}
                    />
                    <Stack.Screen
                        name="HwoarangMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "hwoarang" }}
                    />
                    <Stack.Screen
                        name="Jack8MoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "jack-8" }}
                    />
                    <Stack.Screen
                        name="JinKazamaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "jin-kazama" }}
                    />
                    <Stack.Screen
                        name="JunKazamaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "jun-kazama" }}
                    />
                    <Stack.Screen
                        name="KazuyaMishimaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "kazuya-mishima" }}
                    />
                    <Stack.Screen
                        name="KingMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "king" }}
                    />
                    <Stack.Screen
                        name="KumaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "kuma" }}
                    />
                    <Stack.Screen
                        name="LarsAlexanderssonMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "lars-alexandersson" }}
                    />
                    <Stack.Screen
                        name="LeeMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "lee" }}
                    />
                    <Stack.Screen
                        name="LeoMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "leo" }}
                    />
                    <Stack.Screen
                        name="LeroySmithMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "leroy-smith" }}
                    />
                    <Stack.Screen
                        name="LiliMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "lili" }}
                    />
                    <Stack.Screen
                        name="LingXiaoyuMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "ling-xiaoyu" }}
                    />
                    <Stack.Screen
                        name="MarshallLawMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "marshall-law" }}
                    />
                    <Stack.Screen
                        name="NinaWilliamsMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "nina-williams" }}
                    />
                    <Stack.Screen
                        name="PandaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "panda" }}
                    />
                    <Stack.Screen
                        name="PaulPhoenixMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "paul-phoenix" }}
                    />
                    <Stack.Screen
                        name="RavenMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "raven" }}
                    />
                    <Stack.Screen
                        name="ReinaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "reina" }}
                    />
                    <Stack.Screen
                        name="SergeiDragunovMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "sergei-dragunov" }}
                    />
                    <Stack.Screen
                        name="ShaheenMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "shaheen" }}
                    />
                    <Stack.Screen
                        name="SteveFoxMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "steve-fox" }}
                    />
                    <Stack.Screen
                        name="VictorChevalierMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "victor-chevalier" }}
                    />
                    <Stack.Screen
                        name="YoshimitsuMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "yoshimitsu" }}
                    />
                    <Stack.Screen
                        name="ZafinaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "zafina" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});
