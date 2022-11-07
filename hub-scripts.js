const user1 = {
    userId: "user1",
    password: "PX",
    email: "user1@starcommand.unv",
    firstName: "Jackson",
    lastName: "LaRoe",
    account: "JLaroe",
    accountName: "LaRoe, Jackson"
};
const user2 = {
    userId: "user2",
    password: "PX",
    email: "user2@starcommand.unv",
    firstName: "Mitty",
    lastName: "Tilbert",
    account: "MTilbert",
    accountName: "Tilbert, Mitty"
};
const user3 = {
    userId: "user3",
    password: "PX",
    email: "user3@starcommand.unv",
    firstName: "Alishia",
    lastName: "Hawthorne",
    account: "AHawthorne",
    accountName: "Hawthorne, Alishia"
};

//login
function loginFunction() {
    var username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === user1.userId && password === user1.password){
        setTimeout(() => { window.location.href="home.html"; }, 500);
        //passing user and account objects:
        aptrinsic("identify",
        {
        //User Fields
        "id": user1.userId, // Required for logged in app users
        "email": user1.email,
        "firstName": user1.firstName,
        "lastName": user1.lastName,
        globalId: 'global-user-id',
        "globalId2": "global_users"
        },
        {
        //Account Fields
        "id": user1.account, //Required
        "name": user1.accountName
        });
    }
    else if (username === user2.userId && password === user2.password){
        setTimeout(() => { window.location.href="home.html"; }, 500);
        aptrinsic("identify",
        {
        //User Fields
        "id": user2.userId, // Required for logged in app users
        "email": user2.email,
        "firstName": user2.firstName,
        "lastName": user2.lastName,
        "globalId": "global-user-id",
        "globalId2": "global_users"
        },
        {
        //Account Fields
        "id": user2.account, //Required
        "name": user2.accountName
        });
    }
    else if (username === user3.userId && password === user3.password){
        setTimeout(() => { window.location.href="home.html"; }, 500);
        aptrinsic("identify",
        {
        //User Fields
        "id": user3.userId, // Required for logged in app users
        "email": user3.email,
        "firstName": user3.firstName,
        "lastName": user3.lastName,
        "globalId": "global-user-id",
        "globalId2": "global_users"
        },
        {
        //Account Fields
        "id": user3.account, //Required
        "name": user3.accountName
        });
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "PX"){
        aptrinsic("identify",
        {
        //User Fields
        "id": username, // Required for logged in app users
        "email": username + "@dummydata.com",
        "firstName": username,
        "lastName": "Dummy"
        },
        {
        //Account Fields
        "id": "dummydata", //Required
        "name": "Dummy Data Corp"
        });
        setTimeout(() => { window.location.href="home.html"; }, 500);
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "NUM"){
        aptrinsic("identify",
        {
        //User Fields
        "id": username, // Required for logged in app users
        "email": username + "@numbers.inc",
        "firstName": username,
        "lastName": "Number"
        },
        {
        //Account Fields
        "id": "numbersinc", //Required
        "name": "Numbers Inc"
        });
        setTimeout(() => { window.location.href="home.html"; }, 500);
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "Password"){
        aptrinsic("identify",
        {
        //User Fields
        "id": "bgoodrum_test", // Required for logged in app users
        "email": "bgoodrum@gainsight.com",
        "firstName": "Tester Brianna",
        "lastName": "Test Goodrum"
        },
        {
        //Account Fields
        "id": "ABCXYZ", //Required
        });
        setTimeout(() => { window.location.href="home.html"; }, 500);
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "Update"){
        aptrinsic("identify",
        {
         //User Fields
         "id": username, // Required for logged in app users
         "email": username + "@post.com",
         "firstName": username,
         "lastName": "Post"
         },
         {
         //Account Fields
         "id": "postman", //Required
         "name": "Postal Services"
         });
         
         //PUT User Preferences
         let url = "https://api.aptrinsic.com/v1/user/preferences/" + username
         
         let payload = {
            "guidedTours": true,
            "onboardingBot": true,
            "productUpdates": true,
            "surveys": true,
            "trackUsage": false
         }
         let header = {
             method: "PUT",
             body: JSON.stringify(payload),
             header: 'X-APTRINSIC-API-KEY: 8e1cabeb-7131-447a-bd9b-632277771fec'
         }

         fetch(url, header)
            .then(res => res.json())
            .then(data => console.log(data))

         setTimeout(() => { window.location.href="home.html"; }, 500);
    }
    else {
        alert("Wrong Username and Password.");
    }
}

//log out
function logoutFunction() {
    window.aptrinsic('reset');
    setTimeout(() => { window.location.href="login.html"; }, 500);
}