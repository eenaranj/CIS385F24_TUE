var nav = [
    { "title": "Home", "url": "index.html" },
    { "title": "About", "url": "about.html" },
    { "title": "Contact", "url": "contact.html" },
    { "title": "Products 1", "url": "products1.html" }
];

var menu_list = "";

for(var i = 0; i < nav.length; i++){
    menu_list += "<li><a href='" + nav[i].url + "'>" + nav[i].title + "</a></li>";
}

document.getElementById("nav").innerHTML = menu_list;
