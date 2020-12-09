console.log("extension running");

const imgs = document.getElementsByTagName("img");

for(let i=0;i<imgs.length;i++){
    imgs[i].src = "https://media.makeameme.org/created/you-just-got-5ae58a.jpg";
}
