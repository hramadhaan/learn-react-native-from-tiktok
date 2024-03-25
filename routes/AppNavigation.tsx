import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoreComponentV1 from '../screens/core-component/CoreComponentV1';
import HomePage from '../screens/HomePage';

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
    </Stack.Navigator>
  );
};
