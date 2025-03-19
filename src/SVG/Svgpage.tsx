import {View, Text} from 'react-native';
import React from 'react';
import SVGComponent from './Svgdemo';
import SVGMedical from './SvgMedical';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Svgpage = () => {
  return (
    <View>
      <Text>Svg page</Text>
      {/* <SVGComponent height={30} width={40} fill="black" />
      <SVGMedical width={100} height={100} fill="red" /> */}
      <View>
        <MaterialIcons name="facebook" size={30} />
      </View>
    </View>
  );
};

export default Svgpage;
