import 'react-native';
import React from 'react';
import Profile from '../src/Profile';
import Home from '../src/Home';
import renderer from 'react-test-renderer';
import "isomorphic-fetch";

import {shallow,configure}from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() });

// it('profile test', () => {
//     let ProfileData = renderer.create(<Profile/>).getInstance()
//     const wrapper = shallow(<Profile />).props();
//     console.warn("is",wrapper.children)
//     expect(2).toEqual(2)        
// })


// it('home test', () => {
//     let HomeData = renderer.create(<Home/>).getInstance()
//     const wrapper = shallow(<Home />).props();
// let aagain =renderer.create(<Home/>);
//     console.warn("is",wrapper.children[0].props.data)
//     expect(2).toEqual(2)        
// })


// it('home test', () => {
//     let HomeData = renderer.create(<Home/>).getInstance()

// let aagain =renderer.create(<Home/>);
// let saveMe=HomeData.change("x");
// saveMe=jest.fn(()=>"test");
//     console.warn("is",saveMe())
//     expect(2).toEqual(2)        
// })
