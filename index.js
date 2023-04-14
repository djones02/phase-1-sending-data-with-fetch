// Add your code here
function submitData(userName, userEmail) {
    const userInfo = {
        name: `${userName}`,
        email: `${userEmail}`,
    }
    
    const configurationObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
    },
        body: JSON.stringify(userInfo)
    
    
}

    return fetch(`http:localhost:3000/users`, configurationObject)
        .then(response => response.json())
        .then(object => console.log(object))
        .catch(function(error) {
        alert("Error")
        console.log(error)
  })
}
submitData("John", "kenaa@example.com")
