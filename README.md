Vue To Do List
===
## Descrizione:
Rifare l’esercizio della to do list fatto in classe.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no
MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.
Oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
Bonus:
1- se il todo ha meno di 5 caratteri esporre un messaggio di errore
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
3- eliminare il todo solo se è stato svolto, altrimenti esporre un messaggio di errore


### Svolgimento

1. creare html e css
1. creare un array di oggetti con il messaggio da scrivere e il done che sara vero o falso
1. fare un v-for su html del tasks e una classe su span che si attiva quando il done è true 
1. creo un p che si attiva se l'utente vuole eliminare una task che deve ancora fare e resta attivo per 3 secondi