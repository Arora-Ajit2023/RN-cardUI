import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const CartSummary = () => {
  return (
    <View style={{marginHorizontal: 10, marginTop: 20}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#eee',
          padding: 6,
          borderRadius: 8,
        }}>
        <TextInput placeholder="Enter promo code" style={{flex: 8}} />

        <TouchableOpacity style={{flex: 1}}>
          <Text style={{color: 'red'}}>Apply</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <Text style={{color: '#eee'}}>Subtotal</Text>
        <Text style={{fontWeight: 'bold'}}>$100</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <Text style={{color: '#eee'}}>Shipping</Text>
        <Text style={{fontWeight: 'bold'}}>$50</Text>
      </View>

      <View
        style={{borderWidth: 0.5, borderStyle: 'dotted', borderColor: 'silver'}}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingVertical: 20,
        }}>
        <Text style={{fontWeight: 'bold'}}>Total</Text>
        <Text style={{fontWeight: 'bold'}}>$50</Text>
      </View>
    </View>
  );
};

export default CartSummary;
