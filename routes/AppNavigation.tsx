import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoreComponentV1 from '../screens/core-component/CoreComponentV1';
import HomePage from '../screens/HomePage';
import CoreComponentV2 from '../screens/core-component/CoreComponentV2';

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
    </Stack.Navigator>
  );
};
