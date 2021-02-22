import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Button, View, Text, SafeAreaView} from 'react-native';
import * as Location from 'expo-location';



const ThirdPage = ({ route, navigation }) => {




  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <form>
          <label>
            Participe :
            <input
              name="isGoing"
              type="checkbox"
           
             />
          </label>
          <br />
          <label>
            Nombre d'invités :
            <input
              name="numberOfGuests"
              type="number"
              
              />
          </label>
        </form>
         
          <Button
            onPress={
              () => navigation.navigate('FirstPage')
            }
            title="Go to First Page"
          />
          <Button
            onPress={
              () => navigation.navigate('SecondPage')
            }
            title="Go to Second Page"
          />
        </View>        
      </View>
    </SafeAreaView>
  );
}

export default ThirdPage;