function submitData(userName, userEmail){

const dataObject = {
    name: userName,
    email: userEmail
}

const configObj = {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
    },
    body: JSON.stringify(dataObject)
}

return fetch('http://localhost:3000/users', configObj)

    .then(function(response){
        return response.json();
    })
        .then(function(object){
            let b = document.querySelector('body');
            b.innerHTML = object.id;
        })
            .catch(function(error){
                let b = document.querySelector('body');
                b.innerHTML = error.message;
            })
    
}
submitData("Mark", "mark@email.com")