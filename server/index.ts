import mongoose from 'mongoose'
import  Server from './clases/server';
import usuarioRutas from './rutas/usuario';

const server = new Server();


//Rutas
server.app.use('/usuario', usuarioRutas)


//importar a la base de datos

mongoose.connect(
    'mongodb+srv://Eduardo:1nfsX3BW6wbzxFJX@cluster0.it8er.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
        {useNewUrlParser: true, 
        useUnifiedTopology: true
        
    }
    
)
.then(db => console.log('Db is connected'))
.catch(err => console.log(err));


server.start(()=>{
    console.log(`El servidor Lalo esta corriendo en el puerto ${server.port}`);
})


