import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoreComponentV1 from '../screens/core-component/CoreComponentV1';
import HomePage from '../screens/HomePage';
import CoreComponentV2 from '../screens/core-component/CoreComponentV2';
import CoreComponentV3 from '../screens/core-component/CoreComponentV3';
import CoreComponentV4 from '../screens/core-component/CoreComponentV4';
import LoginFreestylePage from '../screens/freestyle/LoginFreestylePage';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          headerTitle: 'Learn React Native From Tiktok',
        }}
      />
      <Stack.Screen
        name="CoreComponentV1"
        component={CoreComponentV1}
        options={{
          headerBackTitle: 'Back',
          headerTitle: 'Core Component V1',
        }}
      />
      <Stack.Screen
        name="CoreComponentV2"
        component={CoreComponentV2}
        options={{
          headerBackTitle: 'Back',
          headerTitle: 'Core Component V2',
        }}
      />
      <Stack.Screen
        name="CoreComponentV3"
        component={CoreComponentV3}
        options={{
          headerBackTitle: 'Back',
          headerTitle: 'Core Component V3',
        }}
      />
      <Stack.Screen
        name="CoreComponentV4"
        component={CoreComponentV4}
        options={{
          headerBackTitle: 'Back',
          headerTitle: 'Core Component V4',
        }}
      />
      <Stack.Screen
        name="LoginFreestylePage"
        component={LoginFreestylePage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
