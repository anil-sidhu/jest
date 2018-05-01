class Api {
    static ack(param1, param2) {
     return fetch('https://facebook.github.io/react-native/movies.json', {
           })
           .then((response) => {
             if(response.ok) {
               return response.json();
             } else {
               console.log('ack failed', response.statusText)
             }
           })
           .catch((ex) => {
             throw new Error('fetch failed' + ex)
           });
    }
   }