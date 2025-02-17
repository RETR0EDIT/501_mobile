// filepath: /c:/xampp/htdocs/501/501_mobile/501_mobile/components/visiteur/Route.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeVisiteur from "./Home";
import TemplateTest from "./TemplateTest";
import MyResults from "./My_results";
import Probleme from "./Probleme";
import RoomTour from "./Room_tour";
import Cursus from "../Cursus";
import ProfilsVisiteur from "./ProfilsVisiteur";

const Stack = createNativeStackNavigator();

const RouteVisiteur = () => {
  return (
    <Stack.Navigator initialRouteName="HomeVisiteur">
      <Stack.Screen name="HomeVisiteur" component={HomeVisiteur} />
      <Stack.Screen name="TemplateTest" component={TemplateTest} />
      <Stack.Screen name="MyResults" component={MyResults} />
      <Stack.Screen name="Probleme" component={Probleme} />
      <Stack.Screen name="RoomTour" component={RoomTour} />
      <Stack.Screen name="Cursus" component={Cursus} />
      <Stack.Screen name="ProfilsVisiteur" component={ProfilsVisiteur} />
    </Stack.Navigator>
  );
};

export default RouteVisiteur;
