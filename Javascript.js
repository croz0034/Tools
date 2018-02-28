/////////////////////////HTML creation tools by Tyler//////////////
var Tryeltech = {
    x: 0,

create: function(targetID, HTMLCode){
    if(!document.getElementById(targetID)){alert("Target ID ground not found"); return}
let Stage = document.getElementById(targetID);
let baseline = document.createElement('div');
baseline.innerHTML = `${HTMLCode}`;
Stage.appendChild(baseline);
   return Stage;
},
    
makebutton: function(targetID, FunctionAddress){
    if(document.getElementById(targetID)){
        let newButton = document.getElementById(targetID)
        newButton.addEventListener('click', FunctionAddress);
    return;}
    alert("Target ID ground not found");
},
    
addtext: function(targetID, text2add){
    if(document.getElementById(targetID)){
        let parent = document.getElementById(targetID);
        let newtext = document.createTextNode(text2add);
        parent.appendChild(newtext);
    return}
    alert("Target ID ground not found");
},
    fetchJSON: function(URL, fnName){
                      fetch(URL)
                .then(response => response.json())
                .then(data => {
                          fnName(data);
                      })
                .catch(err => {
                console.log(err)
                })
        
        
    },
    
    
/////////////////////////Dev Broken Junk///////////////////////////
TargetLock(){
    let maindock = document.getElementById("round2");
    
    
    for (elements of maindock.childNodes){
        elements.addEventListener('click', Targetor);
        elements.id = Tryeltech.x + "tagnote";
        function Targetor(ev){
            ()=>{alert(elements.id);}
               
        }
                 
                                                  }
    }
}
    


//////////////////////////////////////////////////////////////////////

















document.addEventListener('DOMContentLoaded', test);





function test(ev){
    Tryeltech.makebutton('test', stage2);
//    Tryeltech.makebutton('test', additionaltest);
};


function stage2(ev){
    Tryeltech.create('round2', 
'<h1 id="57" class="7"> I would call this a sucess </h1><p> yup </p>')
};