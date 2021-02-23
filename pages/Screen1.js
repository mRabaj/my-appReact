import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Button, View, Text, SafeAreaView} from 'react-native';



const FirstPage = ({ navigation }) => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [data, setData] = useState([]);


    fetch('http://10.114.41.78/developpement/symfony/webservices/public/customers/')
    .then((response) => response.json())
      .then((json) =>setData(json))
      
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 , padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
         <FlatList data={data}
         keyExtractor={({id},index)=>id.toString()}
         renderItem={({item})=>(<Text> {item.firstName}{item.lastName}{item.birthDate.date}</Text>)}>
         </FlatList>
          <Button
            onPress={
              () => navigation.navigate('SecondPage')
            }
            title="Go to Second Page"
          />
          <Button
            onPress={
              () => navigation.navigate('ThirdPage')
            }
            title="Go to Third Page"
          />
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey'
          }}>
          React Navigate Drawer
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey'
          }}>
          www.aboutreact.com
        </Text>
      </View>
    </SafeAreaView>
  );
}

export default FirstPage;