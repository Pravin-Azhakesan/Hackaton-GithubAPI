document.body.style.backgroundColor = "lightgrey"

var div = document.createElement("div")
document.body.append(div);

var h1 = document.createElement("h1")
h1.innerText = "GithubAPI"
h1.style.textAlign = "center"
div.append(h1);
h1.style.fontSize = "50px"
h1.style.fontWeight = "bold"

var div1 = document.createElement("div")
document.body.append(div1);

var text = document.createElement("p")
text.innerText = "Get the Requested details from below Search"
text.style.textAlign ="center"
div1.append(text);
text.style.padding ="100px"
text.style.fontSize = "30px"
text.style.fontWeight = "bold"

var div2 = document.createElement("div")
document.body.append(div2)

var input = document.createElement("input")
input.setAttribute("id","myinput")
input.setAttribute("placeholder" , "Type details")
input.setAttribute("class", "input form-control-lg mt-3 mb-3")
input.style.border = "1px solid black"
input.style.margin = "50px 80px 50px 80px"
input.style.borderRadius = "500px 500px 500px 500px"
div2.append(input)

var button =document.createElement("button")
button.innerText = "Search"
button.setAttribute("onclick", "handleClick()")
button.setAttribute("class", "btn btn-secondary")
button.setAttribute("type", "button")
div2.append(button);
button.style.marginLeft = "20px"

var reset = document.createElement("button")
reset.innerText = "Reset"
reset.setAttribute("onclick", "reload()")
reset.setAttribute("class", "btn btn-secondary")
reset.setAttribute("type", "button")
reset.style.marginLeft = "25px"
div2.append(reset)


var div3 = document.createElement("div")
div3.setAttribute("class", "container-lg")
div3.style.textAlign = "center"
div3.style.fontFamily = "'Comic Neue', cursive"
div3.style.fontSize = "30px"
document.body.append(div3)


function handleClick(value){

    var value = document.getElementById("myinput").value
    if (value == "" || null){

        alert("Please enter valid API name")
        return false;
    }
    else {
        fetchdata()
    }
}



// to get view info details

// async function viewinfo(){

//     try{
//         var value = document.getElementById("myinput").value
//         var name = document.createElement("div")
//         name.innerText="Name : " + value;
//         div3.append(name)

//         var data = await fetch("https://api.github.com/users")
//         var res = await data.json()
//         console.log(res)
//     }


//     catch(error){

//         console.log("error")
//     }
// }




async function fetchdata(){

    try {
        var value = document.getElementById("myinput").value

        var login =document.createElement("div")
        login.innerText = "login : " + value;
        div3.append(login)

        var data = await fetch("https://api.github.com/users/" +value)
        var res = await data.json()
        console.log(res);

        var data1 = await fetch("https://api.github.com/users/" + value + "/repos");
        var res1 = await data1.json()
        console.log(res1)

        var login1 = document.createElement("div")
        // login1.innerText = (" Image : " + res.avatar_url);
        login1.innerHTML=`<img src="${res.avatar_url}">`
        div3.append(login1)

        var login2 =document.createElement("div")
        login2.innerText =("Repository :" + res.repos_url);
        div3.append(login2)

        var login3 =document.createElement("div")
        login3.innerText =("Forks :" + res1[0].forks);
        div3.append(login3)

        var login4 =document.createElement("div")
        login4.innerText =("Starred :" + res1[0].watchers);
        div3.append(login4)


    }
    catch(err){
        console.log("error found")
    }
    }
//     await fetch("https://api.github.com/users").then(function(response){
//         return response.json()
//     })
//     .then(function(response){
//         console.log(response)
//     })  
    
// }
// fetchdata()

function reload() {
    location.reload()
}