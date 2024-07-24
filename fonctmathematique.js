
let n = prompt('Entrer un nombre')
let i = 0
let f=1
let f1=0
let next
while(i<n){
    i++
    f=f*i
    break
    
}

//Écrivez une fonction pour calculer la factorielle d'un nombre donné.
console.log(f);

// créez une fonction pour vérifier si un nombre est premier ou non
if (n == 1){
    console.log(`${n} isneither prime nor composite number`)
}else if(n<1){
    console.log(`${n} n'est pas un nombre premier`)
}else{
    //number 15
    for(let i=2; i<n ; i++){
        //15%2 = R:1
        //15/2 = Q:7
        if(n%i ==0){
            var res=`${n } n'est pas un nombre premier`
            break
        }else{
            var res =`${n } est un nombre premier`
        }
    }
    console.log(res)
}
//Implémenter une fonction pour générer la suite de Fibonacci jusqu'à un nombre donné de termes. (recherche sur le net)
for(i=1; i<=n ; i++){
    console.log(f1);
    next=f1+f
    f1=f
    f=next
}
   

