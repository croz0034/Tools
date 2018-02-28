/////////////////////////HTML creation tools by Tyler//////////////
var Tryeltech = {

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
    
    
    
/////////////////////////Dev Aids///////////////////////////
TargetLock(){
    let maindock = document.querySelector("body");
    
        let x = 0;
    
    for (elements of maindock.childNodes){
        elements.addEventListener('click', (ev)=>{
            let targetLock = JSON.stringify(this);
            alert(`element ${x}`);})
                                  
        x++
                                                  }
    }
}
    


//////////////////////////////////////////////////////////////////////

















document.addEventListener('DOMContentLoaded', test);





function test(ev){
    Tryeltech.makebutton('test', stage2);
    Tryeltech.makebutton('test', additionaltest);;
};


function stage2(ev){
    Tryeltech.create('round2', 
'<h1 id="57" class="7"> I would call this a sucess </h1><p> yup </p>')
};
function additionaltest(ev){
    Tryeltech.addtext('round2', "this works too");
    
    Tryeltech.TargetLock();
}