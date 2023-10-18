alert("welcome to my store");
const githuburl =
 "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";


// fetch(githuburl)
// .then((res) => res.json())
// .then((data) => console.log(data[0].author))
// .then((err) => console.log(err));


function getdata() {
    fetch (githuburl)
    .then((res) => res.json())
    .then ((data) => {
        return console.log(data[0].author);
    })
    .catch((err) => console.log(err));
}
    getdata();
    

    let myBtn = document.getElementById("btn");
    function changeTitle() {
        myBtn.style.backgroundColor = "red"
    }
    myBtn.addEventListener("click", changeTitle);
    // myBtn.style.backgroundColor = "red"

    