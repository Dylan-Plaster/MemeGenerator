const form = document.querySelector('#form');
const allMemes = document.querySelector('#allMemes');
let imgLink = '';
let topText = '';
let bottomText = '';

form.addEventListener('submit', handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    imgLink = document.querySelector('#imgLink').value;
    topText = document.querySelector('#topText').value;
    bottomText = document.querySelector('#bottomText').value;
    form.reset();
    generateMeme(imgLink, topText, bottomText);
}

function generateMeme(imgLink, topText, bottomText){
    memeDiv = document.createElement('div');
    memeDiv.classList.add('meme');
    allMemes.appendChild(memeDiv);
    memeImg = document.createElement('img');
    memeImg.src = imgLink;
    memeImg.style.display = 'block';
    memeDiv.appendChild(memeImg);
    topTextDiv = document.createElement('div');
    topTextDiv.classList.add('topText');
    memeDiv.appendChild(topTextDiv);
    topTextH1 = document.createElement('h1');
    topTextH1.innerText = topText;
    topTextDiv.appendChild(topTextH1);
    bottomTextDiv = document.createElement('div');
    bottomTextDiv.classList.add('bottomText');
    memeDiv.appendChild(bottomTextDiv);
    bottomTextH1 = document.createElement('h1');
    bottomTextH1.innerText = bottomText;
    bottomTextDiv.appendChild(bottomTextH1);
    // console.log(allMemes);
    deleteBtnDiv = document.createElement('div');
    deleteBtnDiv.classList.add('deleteBtn');
    memeDiv.appendChild(deleteBtnDiv);
    deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'X';
    deleteBtnDiv.appendChild(deleteBtn);
    memeImg.onload = function(){
        let imgHeight = memeImg.naturalHeight;
        // console.log(imgHeight);
        topTextH1.style.fontSize = (imgHeight/17) + "px";
        bottomTextH1.style.fontSize = (imgHeight/17) + "px";
        // console.log(topTextH1.style.fontSize);
    }
    br = document.createElement('br');
    allMemes.appendChild(br);
    deleteBtn.addEventListener('click', handleDeleteClick);
}

function handleDeleteClick(e){
    let parentMeme = e.target.parentNode.parentNode;
    // console.log(parentMeme);
    parentMeme.remove();

}