const animeCards = document.querySelector('.animeCards');
const newCard = document.createElement('div');
const animeTittle = document.createElement('p');
const animeImg = document.createElement('img');
const animeText = document.createElement('p');

const urlAnime = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

const delay = (ms) =>{
  return new Promise ((response)=>{
    setTimeout(()=> response(),ms)
  })
}
animeTittle.innerHTML = "Museum exhibits: ";
animeText.innerHTML = "Years: ";

async function fetchAsyncTodos(){
  try {
    const response = await fetch(urlAnime);
    const animeData = await response.json();
    
      const urlFacts = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${animeData.objectIDs[68]}`;
      const response2 = await fetch(urlFacts);
      const factsData = await response2.json();

      animeTittle.innerHTML += factsData.objectName;
      animeImg.src = factsData.primaryImage;
      animeText.innerHTML+= factsData.accessionYear;
      
      //await delay(3000);
    
  } catch (e) {
    console.error(e);
  } finally{
    console.log("the end of work async");
  }
}

fetchAsyncTodos();
//Style
newCard.style.display = 'flex'
newCard.style.flexDirection = 'column'
newCard.style.alignItems = 'center'
newCard.style.justifyContent = 'center'
animeImg.style.height = '400px'

animeText.style.maxWidth = '350px'
animeText.style.textAlign = 'center'
animeText.style.fontWeight = '20px'

newCard.append(animeTittle)
newCard.append(animeImg)
newCard.append(animeText)

console.log(animeCards.append(newCard))