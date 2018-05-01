import 'react-native';
import React from 'react';
import Home from '../src/Home';
import renderer from 'react-test-renderer';


// let findElement = function (tree, element) {

//     let result=undefined;
//     for(node in tree.children)
//     {
//         if(tree.children[node].props.testID==element)
//         {
//             result=true;
//         }
//     }
//     return result;
// }

// it('find Element', () => {
//     let tree = renderer.create(
//         <Home />
//     ).toJSON();

//     expect(findElement(tree, 'username')).toBeDefined();
// })

// it('should change the password value', () => {
//     let HomeComponent = renderer.create(<Home/>).getInstance()

//     const mockCallback = jest.fn();
//      console.warn(mockCallback);
//     expect(HomeComponent.change("Text11")).toEqual('Text11')        
// })


// it('change value', () => {
//     let homeMock = jest.fn()
//     let home = renderer.create(
//         <Home 

//         />
//     ).getInstance()

//     home.change()

//     expect(homeMock).toBeCalled()        
// })


// const doAdd = (a, b, callback) => {
//     callback(a + b);
//   };

//   test("calls callback with arguments added", () => {
//     //const mockCallback = jest.fn();    
//    doAdd(1, 2, callback);
//     expect(doAdd).toEqual(3);
//   });



// // test("mock implementation", () => {
// //     const mock = jest.fn(() => "bar");

// //     expect(mock("foo")).toBe("bar");
// //     expect(mock).toHaveBeenCalledWith("foo");
// //   });



// test("returns undefined by default", () => {
//     const mock = jest.fn(()=>"foo");

//     let result = mock("foo");

//     expect(result).toBeDefined();

//   });


// it('should change the password value', () => {
//     let handleLoginMock = jest.fn()
//     let loginComponent = renderer.create(
//         <Home 
//         callagain={handleLoginMock}
//         />
//     ).getInstance()

//     loginComponent.change()

//     expect(handleLoginMock).toBeCalled()        
// })


import axios from 'axios';
import Users from '../src/users';

// const myMock = jest.fn();

// // myMock
// //   .mockReturnValueOnce(10)
// //   .mockReturnValueOnce('x')
// //   .mockReturnValue(true);
 
// // console.log(myMock(), myMock(), myMock(), myMock());

// jest.mock('axios'); 
// test('should fetch users', () => {
//     const resp = { data: [{ name: 'Bob' }] };

    
//     axios.get.mockImplementation(() => Promise.resolve(resp))
//     return Users.all().then(users => expect(users).toEqual(resp.data));
// });
 

// beforeEach(function() {

   
  
//   });

  