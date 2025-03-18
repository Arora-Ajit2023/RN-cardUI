import * as React from 'react';
import Svg, {G, Path, SvgProps} from 'react-native-svg';

const styles = {
  redFill: {fill: '#000'},
  lightRedFill: {fill: '#000'},
  mediumRedFill: {fill: '#000'},
};

const SVGComponent: React.FC<SvgProps> = props => (
  <Svg id="Capa_1" viewBox="0 0 54.224 54.224" {...props}>
    <G>
      <Path
        fill={styles.redFill.fill}
        d="M20.412,13.926L20.412,13.926c4.263-1.909,9.137-1.909,13.4,0l0,0c0.841-1.31,4.202-3.848,4.886-7.198 l-1.586-4.802c-6.419-2.568-13.581-2.568-20,0l-1.414,4.802C16.383,10.078,19.571,12.616,20.412,13.926z"
      />
      <Path
        fill={styles.lightRedFill.fill}
        d="M21.112,14.926c0,0-4.313-5.313-4-13c0,0-8.125,13.563-5,19l24.575,31.857c1.311,1.699,3.787,1.932,5.391,0.506l3.377-3.002c1.484-1.319,1.663-3.575,0.406-5.112L21.112,14.926z"
      />
      <G>
        <Path
          fill={styles.mediumRedFill.fill}
          d="M27.112,22.259l7.191,8.789l7.809-10.123c3.125-5.438-5-19-5-19c0.313,7.688-4,13-4,13 L27.112,22.259z"
        />
        <Path
          fill={styles.mediumRedFill.fill}
          d="M19.921,31.048L8.363,45.175c-1.258,1.537-1.079,3.793,0.406,5.112l3.377,3.002 c1.604,1.426,4.081,1.194,5.391-0.506l9.575-12.413L19.921,31.048z"
        />
      </G>
    </G>
  </Svg>
);

export default SVGComponent;
