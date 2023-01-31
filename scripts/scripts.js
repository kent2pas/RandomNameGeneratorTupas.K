let names =["Aisha Mashrah","Amar Mann","Andrea burr","Andrew Nilsson","Brandon Le","Caroline Hana","Chris Martinez","Daniel Decoito","Elizar Garcia","Fernando Aguilar", "Griffin Parker", "Harrison Busby","Isaiah Ferguson","Jacob Dekok","Jeremy Lapham", "Jessie Lamzon", "John Magpantay", "Jovann Contreras", "Kenneth Fujimura","Kent Tupas","Lerissa Lazar","Madeline Gowan"," Manuel Leyva","Marcel Rodriguez","Mark Ramirez","N. Harrison Wilkins","Pedro Castaneda","Reed Goodwin","Richard Johnson","Samuel Laguna","Shaun Aguirre-Reyes","Ulises Ortega","Danny Tran","Kenneth Martinez", "Scott Morenzone"]

let adjectives = ["Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even","Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Square", "Steep", "Straight", "Thick", "Thin", "Cooing", "Deafening", "Faint", "Harsh", "High-pitched", "Hissing", "Hushed", "Husky", "Loud", "Melodic", "Moaning", "Mute", "Noisy", "Purring", "Quiet", "Raspy", "Screeching", "Shrill", "Silent", "Soft", "Squeaky", "Squealing","Voiceless", "Whispering"]

let list;

function generator(){
    document.getElementById("Name").innerHTML= names[Math.floor(Math.random() * names.length)] + " "+" is "+adjectives[Math.floor(Math.random() * adjectives.length)];;;
}