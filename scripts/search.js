//search
function search_scp() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('scp');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "";
        }
    }
}

function search() {
    var link = document.getElementById('mydiv1');
    link.style.display = 'none';
}