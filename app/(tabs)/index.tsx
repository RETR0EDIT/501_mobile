// filepath: /C:/xampp/htdocs/501/501_mobile/501_mobile/app/(tabs)/index.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DarkModeProvider } from "../../components/utils/DarkModeContext";
import Footer from "../../components/Footer";
import Home from "../../components/Home";
import Login from "../../components/Login";
import Signin from "../../components/Singin";
import RoomTour from "../../components/visiteur/Room_tour";
import Cursus from "../../components/Cursus";
import RouteVisiteur from "../../components/visiteur/Route";
import RouteProffeseur from "../../components/professeur/Route";
import ErrorPage from "../../components/visiteur/ErrorPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <DarkModeProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="RoomTour" component={RoomTour} />
          <Stack.Screen name="Cursus" component={Cursus} />
          <Stack.Screen name="RouteVisiteur" component={RouteVisiteur} />
          <Stack.Screen name="RouteProffeseur" component={RouteProffeseur} />
          <Stack.Screen name="ErrorPage" component={ErrorPage} />
        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </DarkModeProvider>
  );
}
