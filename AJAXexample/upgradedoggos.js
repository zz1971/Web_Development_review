
  const DOG_URL = "https://dog.ceo/api/breeds/image/random";

  const doggos = document.querySelector(".doggos");
  
  function addNewDoggo() {
    // const promise = fetch(DOG_URL);   
    // promise
    fetch(DOG_URL)
      .then(response => response.json())
      .then(doginfo => {            //json was unwrapped from the promise
        const img = document.createElement("img");
        img.src = doginfo.message;        
        img.alt = "Cute doggo";                     
        doggos.appendChild(img);                    
      });
  }
  //9-15 what comes out of each line and what goes into next line
  //promise contains a respose
p
  document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);

  