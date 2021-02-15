import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab1 = createMaterialTopTabNavigator();

const Tab2 = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab1.Navigator initialRouteName="Tab 1">
        <Tab1.Screen name="Tab 1">{() => <Text>Tab 1</Text>}</Tab1.Screen>

        <Tab1.Screen name="Tab2">
          {() => (
            <Tab2.Navigator initialRouteName="Tab 2.1">
              <Tab2.Screen name="Tab 2.1">
                {() => <Text>Tab 2.1</Text>}
              </Tab2.Screen>

              <Tab2.Screen name="Tab 2.2">
                {() => <Text>Tab 2.2</Text>}
              </Tab2.Screen>
            </Tab2.Navigator>
          )}
        </Tab1.Screen>
      </Tab1.Navigator>
    </NavigationContainer>
  );
}


