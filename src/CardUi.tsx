import {
  View,
  Text,
  StatusBar,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {cartData} from './cardData';
import Cart from './Cart';
import CartSummary from './CartSummary';

const CardUi = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" />
      <ScrollView>
        <FlatList
          data={cartData}
          renderItem={({item}) => <Cart {...item} />}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />
        <CartSummary />
      </ScrollView>
      <View
        style={{
          padding: 12,
          backgroundColor: '#fff',
          elevation: 10,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#e78129',
            borderRadius: 25,
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            paddingVertical: 10,
          }}>
          <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
            Checkout
          </Text>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
              fontWeight: '600',
              position: 'absolute',
              right: 40,
            }}>
            &gt;&gt;&gt;
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CardUi;
