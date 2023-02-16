async function userSubmit() {
    let email = document.getElementById("Email-2").value;
    url = "http://localhost:3000/api/submit-user-email";
    var content = "";
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      //mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ email: email }) // body data type must match "Content-Type" header
    });
    content = await response.json();
    console.log(content);
    if (content.statusCode == 302){
      window.location.replace('early-access.html')
    }else{
      window.location.replace('early-access.html')
    }
  }
  