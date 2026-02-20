import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Alert,Image, Button, FlatList,StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [bookList, setBookList]= useState ([])
  const endpointURL ="https://6998532ed66520f95f1742a7.mockapi.io/Books"
  const getListOfBooks = async()=> {
    try{
    const response = await axios.get(`${endpointURL}/12000`)
    console.log(JSON.stringify(response.data, null , 3));
    setBookList(response.data)
  }
  catch (error){
    console.log("ERROR!",error);
    
  }
};
const deleteBookByID= async()=>{
  try {
    const response =await axios.delete(`${endpointURL}/1`)
    Alert.alert("Book Is Deleted Successfully")
    }
      catch (error){

      }
    
  }

  console.log (bookList);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title ='Get list of books'onPress = {getListOfBooks}/>
      <Button title ='Delete Book' onPress={deleteBookByID}/>
      <FlatList
      data={bookList}
      keyExtractor={(item)=> item.id}
      renderItem ={({item})=> <View><Text>{item.author_name}
      </Text>
      <Text>{item.price_book}</Text>
      <Image style ={{
        height : 150,
        width:150
      }}></Image>
      </View>
      
    
    }
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
