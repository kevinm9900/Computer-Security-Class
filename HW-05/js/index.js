$('#login-form').submit(async function(e) {
    e.preventDefault();
    if (validateCaptcha()) {

        let credentials = {
            'username': '',
            'password': '',
        }

        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;
        let hashed_password = sha256(password);

        credentials.username = username;
        credentials.password = hashed_password;
        console.log(credentials);

        // Make the database connection
        $.getJSON("database.json", function(json) {
            console.log(json);
            let database = json['UserAccounts'];
            console.log(database);
            let index = database.username.indexOf(username);
            console.log(index);
            if (index !== -1 && hashed_password === database.password[index]) {
                console.log('successful login')
                localStorage.setItem('username', username);
                localStorage.setItem('clearance', database.clearance[index]);
                window.location.href = "http://167.99.116.18/homepage.html?";

            } else {
                alert("Username or password was incorrect")
            }
        });
    } else {
        document.getElementById('captchaTextBox').value = "";
    }
});
