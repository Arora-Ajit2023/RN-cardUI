/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import CardUi from './src/CardUi';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const App = () => (
  <SafeAreaProvider>
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <CardUi />
    </View>
  </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => App);
