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
                        name="JinKazamaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "jin-kazama" }}
                    />
                    <Stack.Screen
                        name="ReinaMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "reina" }}
                    />
                    <Stack.Screen
                        name="DragunovMoveScreen"
                        component={CharacterMoveScreen}
                        options={{ headerShown: false }}
                        initialParams={{ characterName: "sergei-dragunov" }}
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
