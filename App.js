// 프레임워크 API
import { StyleSheet, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// 컴포넌트
import JinKazamaMove from "./screens/JinKazamaMove";
import SelectCharacterScreen from "./screens/SelectCharacterScreen";

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
                        name="JinKazamaScreen"
                        component={JinKazamaMove}
                        options={{ headerShown: false }}
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
