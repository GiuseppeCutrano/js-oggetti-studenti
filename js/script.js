// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


var student ={
  nome : "Paolo",
  cognome : "Pandolfino",
  età: "23"
}

for(var key in student){
  console.log(student[key]);

}




var classe = [
  {
    'nome': "Pino",
    'cognome': "Trani",

  },
  {
    'nome': "Squall",
    'cognome': "Panda",

  },
  {
    'nome': "Cristiano",
    'cognome': "Leopardo",

  },
];

for (var i = 0; i < classe.length; i++) {
  console.log(classe[i].nome + ' ' + classe[i].cognome);
}






var newStudent = {
  'nome' : prompt("inserisci il nome dell\'alunno"),
  'cognome': prompt("inserisci il cognome"),
  'eta': prompt("inserisci l\ età"),
};
classe.push(newStudent);
console.log(newStudent);
console.log(classe);
