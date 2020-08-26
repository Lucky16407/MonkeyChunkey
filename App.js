import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, Alert, TouchableOpacity} from 'react-native';
import {Header, Button} from 'react-native-elements';
import db from './localdb';
import PhonesButton from './components/PhonesButton';

export default class App extends React.Component {
  constructor(){
  super();
  this.state = {
    text: '',
    chunks:[],
    phoneSound:[]
  };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header 
        backgroundColor={'#16f2ca'} 
        centerComponent={{text:'Monkey Chunkey', style:{color:'#ffffff', fontSize:20}}}/>
        <Image
        style={styles.imageIcon}
        source={{
          uri:"https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png"
        }}
        />
        <TextInput
        style={styles.inputBox}
        onChangeText={text =>{ this.setState({text:text});
      }}
        value={this.state.text}
        />
        <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          var word = this.state.text.toLowerCase().trim();
          db[word]?(
            this.setState({chunks:db[word].chunks}),
            this.setState({phoneSound:db[word].phones})
          ):
          Alert.alert("Error 404 :Word not found");
        }}
        >
          <Text 
          style ={styles.textButton}>
          Submit
          </Text>
        </TouchableOpacity>

        <View>
          {this.state.chunks.map((item,index)=>{
            return (
              <PhonesButton
              wordChunk = {this.state.chunks[index]}
              soundChunk = {this.state.phoneSound[index]}
              buttonIndex = {index}
              />
            );
          })}
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#b8b8b8',
  },
  inputBox:{
    marginTop:200,
    width:'80%',
    alignSelf:'center',
    height:40,
    textAlign:'center',
    borderWidth:4,
  },
  button:{
   margin:10,
   padding:10,
   alignSelf:'center',
   height:55,
   width:'50%',
  },
  chunkButton:{
    margin:5,
    alignSelf:'center',
    height:50,
    width:'60%',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor: '#ff0000'
  },
  textDesign:{
    textAlign:'center',
    fontSize:30
  },
  textButton:{
    textAlign:'center',
    fontSize:30,
    fontWeight:"bold"
  },
  imageIcon:{
    width:200,
    height:200,
    marginLeft:110,
    marginTop:100,
    marginBottom:'none'
  }
});
