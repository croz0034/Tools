/////////////////////////HTML creation tools//////////////
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
        
        
    }
}
    


/////////////WIP: Persistent Variables //////////////////////////////


let Persistent = {
    Object: function(key = 'Tryeltech'){
        let Contents = localStorage.getItem(key);
        if (Contents) {
            
           return Contents;
        }
        console.log('no data yet');
        return "";
    },
    
    Array: function(key = 'Tryeltech'){
        let Contents = localStorage.getItem(key);
        if (Contents) {
            Contents = Contents.split(',');
           return Contents;
        }
        console.log('no data yet');
        return "";
        
    },
    
    Update: function(Data, key = 'Tryeltech'){
        let update = Data;
        if(!typeof update == String){
        let update = JSON.stringify(Data);}
        localStorage.setItem(key, update);
        return Data;
    },
    Push: function(Data = [], key = 'Tryeltech'){
        let previous = localStorage.getItem(key);
        if(previous){
        if (!Array.isArray(previous)){
            previous = [previous];
        };
        previous.push(Data);
        Persistent.Update(previous, key);}
        if(!previous){
            Data = [Data];
            Persistent.Update(Data, key);
        }
        return previous
    },
    Pop: function(Data = [], key = 'Tryeltech'){
        let previous = localStorage.getItem(key);
        previous.pop(Data);
        Persistent.Update(previous, key);
        return previous
    },
    Concat: function(Data, key = 'Tryeltech'){
        let contents = Data;
        if (localStorage.getItem(key)){
       contents = localStorage.getItem(key);
        contents += Data;
        }
    Persistent.Update(contents);
    return contents
},
    Remove: function(key = 'Tryeltech'){
        localStorage.removeItem(key);
    }
    
    
    
}










let test = function(ev){

    Persistent.Object();
    Persistent.Push
(3)
    console.log(Persistent.Array());}




document.addEventListener('DOMContentLoaded', test);





