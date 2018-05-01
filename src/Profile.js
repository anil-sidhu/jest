import React from 'react';
import { Animated, Text, View, Button } from 'react-native';
export default class Profile extends React.Component {
   
    render() {

        return (
            <View style={{ }}>
               <Text style={{fontSize:30}}>{this.props.data}</Text>
            </View>
        );
    }
}

 
 