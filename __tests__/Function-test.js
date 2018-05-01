import 'react-native';
import React from 'react';
 import Home from '../src/Home';


 import renderer from 'react-test-renderer';

 it('function and state test care',()=>{
    const change= jest.fn(()=>"test")
     let HomeData= renderer.create(<Home />).getInstance();
    console.warn(change("anything"))
     HomeData.change(2)

     expect(HomeData.state.data).toEqual(change)
     
 }) 