document.addEventListener("DOMContentLoaded", function() {
    //Creating the starting line at which the writer would start writing
    var startingline = document.createElement('div');
    startingline.className = "scene-heading";
    startingline.setAttribute("contenteditable", "true");
    document.getElementById('page').appendChild(startingline);
    document.activeElement = startingline;

    document.addEventListener('keydown', function(event) {

        if(event.key == 'Tab')
        {
            event.preventDefault();
        }

        // Check if the current element has the class 'scene-heading'
        if (document.activeElement.classList.contains("scene-heading")) {
            if (event.key === 'Enter') {
                addnewline('action');
            }
            else if(event.key === 'Tab')
            {
                addnewline('character');
            }
        }
        else if(document.activeElement.classList.contains('action')){
            if (event.key === 'Enter')
            {
                addnewline('action');
            }
            else if (event.key === 'Tab')
            {
                addnewline('character');
            }
        }
        else if(document.activeElement.classList.contains('character'))
        {
            if (event.key === 'Enter')
            {
                addnewline('dialogue');
            }
            else if (event.key === 'Tab')
            {
                addnewline('paranthetical');
            }
        }
        else if(document.activeElement.classList.contains('dialogue')){
            if (event.key === 'Enter')
            {
                addnewline('action');
            }
            else if (event.key == 'tab')
            {
                addnewline('paranthetical');
            }
        }
        else if(document.activeElement.classList.contains('paranthetical')){
            if (event.key === 'Enter')
            {
                addnewline('dialogue');
            }
            else if (event.key === 'Tab')
            {
                addnewline('action')
            }
        }







        function addnewline(elementtype){
            // Create a new div
            const newelement = document.createElement('div');
            newelement.className = elementtype;
            newelement.setAttribute("contenteditable", "true");
            
            // Append the new div to the parent container
            const currentpage = document.getElementById("page");
            currentpage.appendChild(newelement);

            
            // Focus the new div
            newelement.focus();
        }
    });
});
