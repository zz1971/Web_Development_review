
  const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);   //What fetch returns is called a promise and it's similar to a callback that we used before. A promise, like callbacks, allows you to deal with things that don't happen immediately, things that are asynchronous.
  promise
    .then(function(response) {  //With a promise, it's an object &&& we call the then method on it and give it a function to run once that asynchronous action (the API request) finishes. 
      const processingPromise = response.json();   //1          //process that like a blob into a JSON object
      return processingPromise;                     //2  1+2chaining multiple promise together
    })
    
    /* this testing doesn't work
    .then(function(processedResponse) {   
      console.log(processedResponse); // this line will execute the below code in console.log, processResponse would be these below {   
                                      //   "status": "success",
                                      //   "message": "https://images.dog.ceo/breeds/affenpinscher/n02110627_11783.jpg"
                                      // }
    })
    */

    .then(function(processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;        // got that message
      img.alt = "Cute doggo";                     // cuz you have to give images all text
      doggos.appendChild(img);                    // so inside of doggos will add to the end, a new child. which would be that img tag
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);