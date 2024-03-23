import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "./Home/Home";
import ViewImage from "./Home/ViewImage";
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="ViewImage" component={ViewImage}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default App;