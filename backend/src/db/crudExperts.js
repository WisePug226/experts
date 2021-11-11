const db = require("./firebase.js");

// Obtener todos los expertos
function getExperts(callback){
    return db.collection("experts").get()
        .then((docs) => {
            var arrayExperts = []
            docs.forEach((expert) => {
                arrayExperts.push(expert.data());
            })
            // CUANDO LLEGAMOS ACÁ, SE DEBE ENVIAR LA RESPUESTA AL GET REQUEST
        callback(arrayExperts);
    }).catch((error) => {
        callback(`Error to get users ${error}`);
    })
} 

// Obtener un experto específico
function getExpert(uid, callback){
    return db.collection("experts").doc(uid).get()
        .then((refDoc) => {
            callback(refDoc.data())
        })
        .catch((error) => {
            callback(`Error to get users ${error}`);
        })
}

// Crear un experto
function addExpert(expert, callback){
    return db.collection("experts").add(expert)
        .then(() => {
            callback("Success");
        })
        .catch((error) => {
            callback(`Error to get users ${error}`);
        })
}

function updateExpertTotally(uid, expert, callback){
    return db.collection("experts").doc(uid).set(expert)
        .then(() => {
            callback("Success");
        })
        .catch((error) =>{
            callback(`Error to get users ${error}`);
        })
}

function updateExpertPartially(uid, expert, callback){
    return db.collection("experts").doc(uid).update(expert)
        .then(() => {
            callback("Success");
        })
        .catch((error) =>{
            callback(`Error to get users ${error}`);
        })
}

function deleteExpert(uid, callback){
    return db.collection("experts").doc(uid).delete()
    .then(() => {
        callback("Success");
    })
    .catch((error) =>{
        callback(`Error to get users ${error}`);
    })
}

module.exports = {
    getExperts,
    getExpert,
    addExpert,
    updateExpertPartially,
    updateExpertTotally,
    deleteExpert
}


// PARA PROBAR LOS METODOS
// correr node crudExperts.js

/*
// Obtener un doc, pasando un id
getExpert("aqui-va-id",(result) =>{
    console.log(result);
})

// Crear un nuevo documento
const expert = {
    "name": "Ciro",
    "location": "Bucaramanga, Colombia",
    "occupation": "Programador"
}

addExpert(expert, (status)=>{
    console.log(status);
})


const expert = {
    "location" : "Cartagena",
    "occupation": "Artista"
}

// Actualizar totalmente un documento
updateExpertTotally("Ellz8i4XbcwwlDhujAdO", expert, function(status){
    console.log(status);
})

// Actualizar parcialmente un documento
updateExpertPartially("Ellz8i4XbcwwlDhujAdO", expert, function(status){
    console.log(status);
})

// Borrar documento usando el id
deleteExpert("kH9pnrlHoFCuruwDv9a5", (status) =>{
    console.log(status);
})
*/

