// Implémentation du tri par insertion à l'aide de JavaScript :

// Le tri par insertion est un algorithme de tri simple qui fonctionne de la même manière que nous trions
//  les cartes à jouer dans nos mains. Chaque fois que nous prenons une nouvelle carte, 
//  nous la mettons au bon endroit dans notre main.

// Instructions

// À chaque fois, travaillez uniquement avec le premier élément i-1 du tableau
// Sélectionnez l’élément arr[i] et insérez-le dans la séquence triée du tableau de 0 à i-1.

const triParInsersion = (tab) => {
    for(let i = 1; i < tab.length; i++){
        let x = tab[i]
        let j = i
        while(j > 0 && tab[j-1] > x){
            tab[j] = tab[j-1]
            j--
        }
        tab[j] = x
    }
    return tab;
}

console.log(triParInsersion([10,8,6,29,4,32]));