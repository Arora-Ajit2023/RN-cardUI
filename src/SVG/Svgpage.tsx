import {View, Text} from 'react-native';
import React from 'react';
import SVGComponent from './Svgdemo';
import SVGMedical from './SvgMedical';

const Svgpage = () => {
  return (
    <View>
      <Text>Svg page</Text>
      <SVGComponent height={30} width={40} fill="black" />
      <SVGMedical width={100} height={100} fill="red" />
    </View>
  );
};

export default Svgpage;
