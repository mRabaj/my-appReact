import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Button, View, Text, SafeAreaView} from 'react-native';
import * as Location from 'expo-location';


const SecondPage = ({ navigation }) => {
  const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const[isLoading,setLoading]=useState(true);
    const [data, setData] = useState([]);

    useEffect(()=>{

      (async ()=>{
          let {status} =await Location.requestPermissionsAsync();
          if(status !== 'granted'){

            setErrorMsg('Location permission not granted!');
            return;
          }
          let location = await Location.getCurrentPositionAsync({});
       
        fetch('http://10.114.41.78/developpement/symfony/webservices/public/customers/coord/'+location.coords.latitude+'/'+location.coords.longitude)
      .then((response) => response.json())
      .then((json) =>setData(json))
      .catch((error)=>console.error(error))
      .finally(()=>setLoading(false));
      
      setLocation(location);
    })();
     
    },[]);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 7,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
     {isLoading ? <ActivityIndicator/>:(

    
     <FlatList data={data}
         keyExtractor={({id},index)=>id.toString()}
         renderItem={({item})=>(<Text> {item.firstName}{item.lastName}{item.distance}kms</Text>)}>
         </FlatList>
     )}
          <Button
            title="Go to First Page"
            onPress={
              () => navigation.navigate('FirstPage')
            }
          />
          <Button
            title="Go to Third Page"
            onPress={
              () => navigation.navigate('ThirdPage')
            }
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

export default SecondPage;