const Cards = document.querySelector('.Cards');
const newCard = document.createElement('div');
const Tittle = document.createElement('p');
const Img = document.createElement('img');
const PText = document.createElement('p');

const urlObj = 'https://collectionapi.metmuseum.org/public/collection/v1/objects';

/*const delay = (ms) =>{
  return new Promise ((response)=>{
    setTimeout(()=> response(),ms)
  })
}*/
Tittle.innerHTML = "Museum exhibits: ";
PText.innerHTML = "Years: ";

async function fetchAsyncTodos(){
  try {
    const response = await fetch(urlObj);
    const data = await response.json();
    
      const urlFacts = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${data.objectIDs[68]}`;
      const response2 = await fetch(urlFacts);
      const factsData = await response2.json();

      Tittle.innerHTML += factsData.objectName;
      Img.src = factsData.primaryImage;
      PText.innerHTML+= factsData.accessionYear;
      
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
Img.style.height = '400px'

PText.style.maxWidth = '350px'
PText.style.textAlign = 'center'
PText.style.fontWeight = '20px'

newCard.append(Tittle)
newCard.append(Img)
newCard.append(PText)

console.log(Cards.append(newCard))