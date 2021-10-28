var app = {

    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        document.getElementById("btnListar").addEventListener("click",app.listar);
    },
    
    listar: function(){
        var db = firebase.firestore();
        var ag = db.collection('cadastro');
        
        ag.get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let rowContent = 
                            "<tr>" +
                            "<td scope='col'>" + doc.data().nome + "</td>" +
                            "<td scope='col'>" + doc.data().telefone + "</td>" + 
                            "<td scope='col'>" + doc.data().origem + "</td>" +
                            "<td scope='col'>" + doc.data().data_contato + "</td>" +
                            "<td scope='col'>" + doc.data().observacao + "</td>" +
                            "<td><a href='editar.html?telefone=" + doc.data().telefone + "'>Editar</a></td>" +
                            "<td><a href='excluir.html?telefone=" + doc.data().telefone + "'>Excluir</a></td>" +
                            "</tr>";

                document.getElementById("TableData").innerHTML += rowContent;
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

};

app.initialize();