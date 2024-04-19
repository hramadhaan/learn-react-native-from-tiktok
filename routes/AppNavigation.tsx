import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoreComponentV1 from '../screens/core-component/CoreComponentV1';
import HomePage from '../screens/HomePage';
import CoreComponentV2 from '../screens/core-component/CoreComponentV2';
import CoreComponentV3 from '../screens/core-component/CoreComponentV3';
import CoreComponentV4 from '../screens/core-component/CoreComponentV4';
import LoginFreestylePage from '../screens/freestyle/LoginFreestylePage';
import PlatformModule from '../screens/platform-spesific/PlatformModule';
import FetchScreen from '../screens/networking/FetchScreen';
import LocalNotification from '../screens/notifications/LocalNotification';

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
      <Stack.Screen
        name="PlatformModule"
        component={PlatformModule}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FetchScreen"
        component={FetchScreen}
        options={{
          headerBackTitle: 'Back',
          headerTitle: 'Networking: Fetch',
        }}
      />
      <Stack.Screen
        name="LocalNotification"
        component={LocalNotification}
        options={{
          headerBackTitle: 'Back',
          headerBackTitleVisible: false,
          headerTitle: 'Notifications: Local Notification',
        }}
      />
    </Stack.Navigator>
  );
};
