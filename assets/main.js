// This is some very old legacy code, please for the sake of god don't look at this.

function init() {
    loadJSON(function (response) {
      var actual_JSON = JSON.parse(response);
  
      actual_JSON.projects.forEach((element) => {
        var html = `<div class="element">
                    <div class="badge-group"> `;

          for (i in element.language) {
            html += `<div class="badge badge-${element.language[i].toLowerCase()}"><div class="sm-circle"></div><div class="language">${element.language[i]}</div></div>`
          }

           html += `</div><div class="text"><h2> ${element.title} </h2>
                    <p> ${element.description}</p>
                    </div>
                    <div class="button-group">
                    <button onclick="window.open('${element.source}')" class='primary-button btn-small'><b>Source</b></button>`
                    
        if(element.demo != "#") html += `<button onclick="window.open('${element.demo}')" class='secondary-button btn-small'><b>Demo</b></button>` 
        
        html += `</div></div>`
        
        document.getElementById("projects").innerHTML += html;
      });
    });
  }
  
  function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open("GET", "/projects.json", true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
      if (xobj.readyState == 4 && xobj.status == "200") {
        // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
        callback(xobj.responseText);
      }
    };
    xobj.send(null);
  }
  
  function goTo(id) {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }
  
  function closeElement(id){
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
  }