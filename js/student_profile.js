var params = {};

if (location.search) {
    var parts = location.search.substring(1).split('&');

    for (var i = 0; i < parts.length; i++) {
        var nv = parts[i].split('=');
        if (!nv[0]) continue;
        params[nv[0]] = nv[1] || true;
    }
}

// Now you can get the parameters you want like so:
var name = params.name;
var email=params.email;
var school=params.school;
var phone=params.phone;
var year=params.year;
var linkedin=params.linkedin;
var github=params.github;
var lookingFor=params.lookingFor;
var description=params.description;
console.log(name);
document.getElementById("student_name").innerHTML = name;
document.getElementById("email").innerHTML = email;
document.getElementById("school").innerHTML = school;
document.getElementById("phone").innerHTML = phone;
document.getElementById("year").innerHTML = year;
document.getElementById("linkedin").innerHTML = linkedin;
document.getElementById("github").innerHTML = github;
document.getElementById("categories").innerHTML = lookingFor;
document.getElementById("description").innerHTML = description;
