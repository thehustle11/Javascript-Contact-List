

function search() {

    let inputVal = document.getElementById('filterInput').value.toLowerCase();
    let lis = Array.from(document.querySelectorAll('li.item'));

    lis.forEach(li => {
        let a = li.getElementsByTagName('a')[0];

        if(a.innerHTML.toLowerCase().indexOf(inputVal) > -1) {
            li.style.display = '';
        } else {
            li.style.display = 'none';
        }

    });

}


filterInput.addEventListener('keyup', search);