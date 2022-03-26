

$(document).ready(function(){
    var _CONTENT = [
        "xin chào.",
        "lại là anh, bé bi đáng iu của em đâyyyy",
        "như vại là chúng ta iu nhao được một năm òi óoo",
        "một năm qua anh vui lắm",
        "cóa em bên cạnh đi chơi với anh",
        "cóa em iu anh nựaaaa",
        "cám ơn em dì đã nunn bênnn anhhh",
        "I LOVE YOU CHU CÀ MOOOO"
    ]
    // Current sentence being processed
    var _PART = 0;

    // Character number of the current sentence being processed 
    var _PART_INDEX = 0;

    // Holds the handle returned from setInterval
    var _INTERVAL_VAL;

    // Element that holds the text
    var _ELEMENT = document.querySelector("#text");

    // FLAG
    var isEnd = false

    function Type() { 
        // Get substring with 1 characater added
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX + 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX++;
    
        // If full sentence has been displayed then start to delete the sentence after some time
        if(text === _CONTENT[_PART]) {
            clearInterval(_INTERVAL_VAL);
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Delete, 50);
            }, 1000);
        }
        if(_CONTENT[_PART] === _CONTENT[_CONTENT.length]){
            clearTimeout(_INTERVAL_VAL)
        }
    }
    
    // Implements deleting effect
    function Delete() {
        // Get substring with 1 characater deleted
        var text =  _CONTENT[_PART].substring(0, _PART_INDEX - 1);
        _ELEMENT.innerHTML = text;
        _PART_INDEX--;
    
        // If sentence has been deleted then start to display the next sentence
        if(text === '') {
            clearInterval(_INTERVAL_VAL);
    
            // If current sentence was last then display the first one, else move to the next
            if(_PART == (_CONTENT.length - 1))
                _PART = 0
            else
                _PART++;
            
            _PART_INDEX = 0;
    
            // Start to display the next sentence after some time
            setTimeout(function() {
                _INTERVAL_VAL = setInterval(Type, 100);
            }, 200);
            
        }
    }


    // Start the typing effect on load
    _INTERVAL_VAL = setInterval(Type, 100);    
    
  
  });
