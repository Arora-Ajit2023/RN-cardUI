import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {CardData} from './interface';

const Cart = ({title, subtitle, price, image_url, quantity}: CardData) => {
  return (
    <View style={{flex: 1, marginHorizontal: 10}}>
      <View
        style={{
          padding: 15,
          flexDirection: 'row',
          backgroundColor: '#f3f3f3',
          marginVertical: 10,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 15,
        }}>
        <View
          style={{
            borderRadius: 10,
          }}>
          <Image
            source={{uri: image_url}}
            style={{width: 70, height: 70, borderRadius: 10}}
          />
        </View>
        <View style={{flex: 6}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{title}</Text>
            <Text>Remove</Text>
          </View>

          <View
            style={{
              flex: 1,
            }}>
            <Text style={{fontSize: 13, color: '#8f8f8f'}}>{subtitle}</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 17}}>${price}</Text>
            <View
              style={{
                flexDirection: 'row',
                gap: 10,
                borderRadius: 10,
                backgroundColor: '#cfcfcf',
                paddingHorizontal: 10,
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Text>-</Text>
              </TouchableOpacity>
              <Text>{quantity}</Text>

              <TouchableOpacity>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Cart;
