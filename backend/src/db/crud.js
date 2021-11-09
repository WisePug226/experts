const db = require('./firebase.js');

function agregarDatos(){
    db.collection("users").add({
        nombre: "Julián",
        apellido: "Torres",
        ID: "123456789"
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
}


function leerDatos(){
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log("Nombre: " + doc.data().nombre);
            console.log("Apellido: " + doc.data().apellido);
            console.log("ID: " + doc.data().ID);
            console.log("--------------------------------")
        });
    });
}

module.exports = {
    agregarDatos,
    leerDatos
}