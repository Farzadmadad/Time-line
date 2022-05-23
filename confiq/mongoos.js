const mongoos =require('mongoose')

mongoos.connect('mongodb+srv://farzad:Timeline@cluster0.no9sy.mongodb.net/?retryWrites=true&w=majority')
          .then( ()=> {
            console.log('mongoose')
          })
          .catch( err => {
            console.log('err')
          })