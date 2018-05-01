import React from 'react';
import { Animated, Text, View, Button, TextInput } from 'react-native';
import Profile from './Profile';
import Users from '../src/users';

export default class Home extends React.Component {

    constructor() {
        super();
        this.state = {
            data: "test",
        }
    }
    componentDidMount()
    {
        // console.warn("all props",this.props)
        Users.all().then((data)=>{
            console.warn("check api data",data);
           
        })
    }

    change(x) {
        var x;
        // Users.all().then((data)=>{
        //   //  console.warn("check api data",data);
        //     data.json().then((result)=>{
        //        // console.warn("check api result",result.movies[0].releaseYear);
        //         x=result.movies[0].releaseYear;
        //     })
           
        // })
    //   return "saveMe";  
    }  
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
            <Profile data="jest testing" />
                <TextInput
                
                testID={'username'}
                    onChangeText={(text) => this.change(text)}
                    style={{ backgroundColor: 'gray',marginBottom:15 }}
                    placeholder="Enter Username" />

                
            </View>
        );
    }
}


