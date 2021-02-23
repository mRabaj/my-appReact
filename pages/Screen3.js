import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Button, View, Text, SafeAreaView} from 'react-native';

import { Form } from 'redux-form' 



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
            <Field
					name="login"
					label="Identifiant"
					textContentType="username"
					autoCorrect={false}
					autoCapitalize="none"
					component={TextInput}
					icon="person"
				/>
				<Field
					name="password"
					label="Mot de passe"
					textContentType="password"
					secureTextEntry={true}
					autoCorrect={false}
					autoCapitalize="none"
					component={TextInput}
					icon="key"
				/>
         
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