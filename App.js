import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import Restaurant from "./screens/Restaurant";
import Cart from "./screens/Cart";
import ProcessOrder from "./screens/ProcessOrder";
import Delivery from "./screens/Delivery";
import Profile from "./screens/Profile";
import Login from "./screens/Login";
import Register from "./screens/Register";
import EmailVerify from "./screens/EmailVerify";
import StoreProvider from "./redux/store";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StoreProvider>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="VerifyEmail"
              component={EmailVerify}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={Restaurant} />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Cart"
              component={Cart}
              options={{
                presentation: "modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Order"
              component={ProcessOrder}
              options={{
                presentation: "fullScreenModal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Delivery"
              component={Delivery}
              options={{
                presentation: "fullScreenModal",
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </StoreProvider>
    </NavigationContainer>
  );
}
