let nomeHeroi = "Homem De Ferro";
let Xp = "9001";

let nivelHeroi;

if (Xp < 1000) {
    nivelHeroi = "Prata";
} else if (Xp >= 1001 && Xp <=2000) { 
    nivelHeroi = "Ouro";
} else if (Xp >= 2001 && Xp <=4000) { 
    nivelHeroi = "Platina";
} else if (Xp >= 4001 && Xp <=6000) { 
    nivelHeroi = "Diamante";
} else if (Xp >= 6001 && Xp <=8000) { 
    nivelHeroi = "Ascendente";
} else if (Xp >= 8001 && Xp <=9000) { 
    nivelHeroi = "Imortal";
} else {
    nivelHeroi = "Radiante";
}
    
console.log("O Heroi " + nomeHeroi + " esta no nivel de rank " + nivelHeroi);