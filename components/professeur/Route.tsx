// filepath: /c:/xampp/htdocs/501/501_mobile/501_mobile/components/professeur/Route.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeProf from "./Home";
import Stats from "./Stats";
import Monitoring from "./Monitoring";
import Template from "./Template";
import ProfilsProf from "./ProfilsProf";
import ErrorPage from "../visiteur/ErrorPage";

const Stack = createNativeStackNavigator();

const RouteProffeseur = () => {
  return (
    <Stack.Navigator initialRouteName="HomeProf">
      <Stack.Screen name="HomeProf" component={HomeProf} />
      <Stack.Screen name="Stats" component={Stats} />
      <Stack.Screen name="Monitoring" component={Monitoring} />
      <Stack.Screen name="Template" component={Template} />
      <Stack.Screen name="ProfilsProf" component={ProfilsProf} />
      <Stack.Screen name="ErrorPage" component={ErrorPage} />
    </Stack.Navigator>
  );
};

export default RouteProffeseur;
