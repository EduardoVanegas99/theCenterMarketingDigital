"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const server_1 = __importDefault(require("./clases/server"));
const usuario_1 = __importDefault(require("./rutas/usuario"));
const server = new server_1.default();
//Rutas
server.app.use('/usuario', usuario_1.default);
//importar a la base de datos
mongoose_1.default.connect('mongodb+srv://Eduardo:1nfsX3BW6wbzxFJX@cluster0.it8er.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Db is connected'))
    .catch(err => console.log(err));
server.start(() => {
    console.log(`El servidor Lalo esta corriendo en el puerto ${server.port}`);
});
