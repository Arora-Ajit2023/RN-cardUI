/**
 * @format
 */

import {AppRegistry, View} from 'react-native';
import {name as appName} from './app.json';
import CardUi from './src/CardUi';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SVGComponent from './src/SVG/Svgdemo';
import Svgpage from './src/SVG/Svgpage';

const App = () => (
  <SafeAreaProvider>
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <CardUi />
    </View>
  </SafeAreaProvider>
);

AppRegistry.registerComponent(appName, () => Svgpage);
