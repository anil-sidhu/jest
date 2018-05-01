import Users from '../src/users';
import 'isomorphic-fetch';
it('Api test case', async function () {
    // global.fetch = jest.fn().mockImplementation(() => {
    //     var p = new Promise((resolve, reject) => {
    //         resolve({
    //             json: function () {
    //                 return { Id: 2 }
    //             }
    //         })
    //     })
    //     return p;

    // })

    const response = await Users.all();
    console.warn(response.movies[2].title)
    expect(response.movies[2].title).toEqual('The Matrix')

})