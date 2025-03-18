import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {StyleSheet, View, ViewStyle} from 'react-native';

// Define types for the component props
interface SVGComponentProps {
  style?: ViewStyle; // This allows passing custom styles like width, height, etc.
  fill?: string; // Optional fill color
  width?: string | number; // Optional width
  height?: string | number; // Optional height
}

const SVGMedical: React.FC<SVGComponentProps> = ({
  style,
  fill = '#000000',
  width = '100%',
  height = '100%',
  ...props
}) => (
  <View style={[styles.container, style]}>
    <Svg
      width={width} // Dynamic width
      height={height} // Dynamic height
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M3,16H8v5a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V16h5a1,1,0,0,0,1-1V9a1,1,0,0,0-1-1H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V8H3A1,1,0,0,0,2,9v6A1,1,0,0,0,3,16Zm1-6H9a1,1,0,0,0,1-1V4h4V9a1,1,0,0,0,1,1h5v4H15a1,1,0,0,0-1,1v5H10V15a1,1,0,0,0-1-1H4Z"
        fill={fill}
      />
    </Svg>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 24, // Default width
    height: 24, // Default height
  },
});

export default SVGMedical;
