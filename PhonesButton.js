import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image, Alert,TouchableOpacity} from 'react-native';
import {Audio} from 'expo-av';


export default class PhonesButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            pressButtonIndex:''
        }
    
    }

    playSound = async soundChunk =>{
        var soundLink = 'https://whitehatjrcontent.s3.ap-south-1.amazonaws.com/phones/'+
        soundChunk+'.mp3';
        await Audio.Sound.createAsync(
            {uri:soundLink},
            {soundPLay:true}
        );
    };
    render(){
    return(
    <TouchableOpacity 
    style ={this.props.buttonIndex===this.state.pressButtonIndex
    ?[styles.chunkButton,{backgroundColor:'white'}]:
    [styles.chunkButton,{backgroundColor:'blue'}]}
    onPress={()=>{
        this.setState({pressButtonIndex:this.props.buttonIndex});
        this.playSound(this.props.soundChunk);
    }}
    >
        <Text
        style = {this.props.buttonINdex===this.state.pressButtonIndex
        ?[styles.displayText,{color:'red'}]
        :[styles.displayText,{color:'white'}]}
        >
            {this.props.wordChunk}
        </Text>
    </TouchableOpacity>
    )
    }
}

const styles = StyleSheet.create({
    displayText: {
       color: 'white',
       textAlign:'center',
       fontSize:30
     },
     chunkButton:{
        margin:5,
        alignSelf:'center',
        height:50,
        width:'60%',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor: 'red'
     
     }
    });
    