import 'react-native';
import React from 'react';
import Home from '../src/Home';
import renderer from 'react-test-renderer';
import "isomorphic-fetch"

// jest.mock("../src/Home");

// test('Home snapShot',()=>{
//     const snap = renderer.create(
//         <Home />
//     ).toJSON();
// expect(snap).toMatchSnapshot();
// });


//    let findById = function(tree, testID) {
   
//     // for( name in tree.children[0])
//     // {
//     //     return tree.children[name].props.testID==testID;
//     // }
//     return true
  
// }

// describe('a button', () => {
//     it('should be present', () => {
//         let tree = renderer.create(<Home />
//             ).toJSON()
//     expect(findById(tree, 'username')).toBeDefined()
       
//     })

// })

it('should change the password value', () => {
    let HomeComponent = renderer.create(<Home/>).getInstance()
    
    HomeComponent.change("Text");
    //console.warn(HomeComponent)
    expect(HomeComponent.change("Text")).toEqual('Text')        
})

// test("returns undefined by default", () => {
//    // const mock = jest.fn(()=>"test");
  
//    let result = Home('foo'); 
// //   console.log(Home);
  
//     expect(result).toEqual("test");
//     expect(Home).toHaveBeenCalled();
//     expect(Home).toHaveBeenCalledTimes(1);
//     expect(Home).toHaveBeenCalledWith("foo");
//   });