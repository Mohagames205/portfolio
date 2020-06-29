function init() {
  loadJSON(function (response) {
    var actual_JSON = JSON.parse(response);

    actual_JSON.projects.forEach((element) => {
      var html = `<div class="item">
                  <div class="text">
                  <h2> ${element.title} </h2>
                  <p> ${element.description}</p>
                  </div>
                  <button onclick="window.open('${element.source}')" class='primary-button btn-small'>Source</button>
                  <button onclick="window.open('${element.demo}')" class='secondary-button btn-small'>Demo</button>
                  </div>`;
      document.getElementById("projects").innerHTML += html;
    });
  });
}

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open("GET", "projects.json", true); // Replace 'my_data' with the path to your file
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
