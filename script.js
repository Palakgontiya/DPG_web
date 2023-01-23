
const submit = document.getElementById("submit");
const data = document.getElementById("data-table");
const language = document.getElementById("languages");
const number = document.getElementById("num");
const passphrase = document.getElementById("data-table");


var all =""
fetch('./file/english.txt')
  .then(response => response.text())
  .then(data => {      
    // console.log(data);
    all+=data+"\n";
    // console.log(all)
    // Do something with the text data
  })
  .catch(error => console.error(error));

 ;

 function display()
 { var passString = "";
    var t = 0;
    var dTrial = 0;

    23456 
    // console.log(all);
    const result = Object.fromEntries(all.trim().split('\n').map(s => s.split(' ')))
    // console.log(result);
    for(let i = 0; i<number.value; i++ ){
        for ( let n = 0; n<5; ++n)
            { t = Math.floor(Math.random() * 6) + 1;
                dTrial*=10;
                dTrial+=t;
                
            }
        // console.log(dTrial);
        console.log(result[dTrial]);
        passString+=result[dTrial]+" ";
        dTrial = 0;

        // console.log(t).
      
    }

return passString; 
} 



 submit.addEventListener("click", ()=>{
    let passward = display();
    passphrase.innerHTML = passward;
    // document.querySelectorAll(img).classList.remove("roll");  
    
 })
 
