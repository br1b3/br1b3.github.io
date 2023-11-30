const user1 = {
    userId: "user1",
    password: "PX",
    email: "user1@starcommand.unv",
    firstName: "Jackson",
    lastName: "LaRoe"
};
const user2 = {
    userId: "user2",
    password: "PX",
    email: "user2@starcommand.unv",
    firstName: "Mitty",
    lastName: "Tilbert"
};
const user3 = {
    userId: "user3",
    password: "PX",
    email: "user3@starcommand.unv",
    firstName: "Alishia",
    lastName: "Hawthorne"
};

//login
function loginFunction() {
    var username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === user1.userId && password === user1.password){
        setTimeout(() => { window.location.href="home.html"; }, 500);
        //passing user and account objects:
        window.aptrinsic("identify",
        {
        //User Fields
        "id": user1.userId, // Required for logged in app users
        "email": user1.email,
        "firstName": user1.firstName,
        "lastName": user1.lastName,
        "globalId": 'global-user-id',
        "globalId2": "global_users",
        "language": "en sp ch"
        });
    }
    else if (username === user2.userId && password === user2.password){
        setTimeout(() => { window.location.href="home.html"; }, 500);
        window.aptrinsic("identify",
        {
        //User Fields
        "id": user2.userId, // Required for logged in app users
        "email": user2.email,
        "firstName": user2.firstName,
        "lastName": user2.lastName,
        "globalId": "global-user-id",
        "globalId2": "global_users"
        });
    }
    else if (username === user3.userId && password === user3.password){
        setTimeout(() => { window.location.href="home.html"; }, 500);
        window.aptrinsic("identify",
        {
        //User Fields
        "id": user3.userId, // Required for logged in app users
        "email": user3.email,
        "firstName": user3.firstName,
        "lastName": user3.lastName,
        "globalId": "global-user-id",
        "globalId2": "global_users"
        });
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "PX"){
        window.aptrinsic("identify",
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
        window.aptrinsic('track', 'User Profile', {"User Id": username, "First Name": username, "Last Name": "Dummy", "Subscription": "Basic", "Rewards Id": 1234567, "Rewards Points": '654321', "Promotions Opt In": true});
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "ABC"){
        window.aptrinsic("identify",
        {
        //User Fields
        "id": "Mc"+ username, // Required for logged in app users
        "email": username + "abc.org",
        "firstName": username,
        "lastName": "Mc"+ username
        },
        {
        //Account Fields
        "id": "ABCXYZ", //Required
        "name": "The ABC Foundation"
        });
        setTimeout(() => { window.location.href="home.html"; }, 500);
        window.aptrinsic('track', 'User Profile', {"User Id": "Mc"+username, "First Name": username, "Last Name": "Mc"+username, "Subscription": "Basic", "Rewards Id": 86829, "Rewards Points": "720028", "Promotions Opt In": null});
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "INO"){
        window.aptrinsic("identify",
        {
        //User Fields
        "id": "Von "+ username, // Required for logged in app users
        "email": username + "inovations.inc",
        "firstName": username,
        "lastName": "Von"+ username
        },
        {
        //Account Fields
        "id": "inovations", //Required
        "name": "Inovations Inc"
        });
        setTimeout(() => { window.location.href="home.html"; }, 500);
        window.aptrinsic('track', 'User Profile', {"User Id": "Von"+username, "First Name": username, "Last Name": "Von"+username, "Subscription": "Premium", "Rewards Id": "51248drr", "Rewards Points": '1500', "Promotions Opt In": "true"});
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "Password"){
        window.aptrinsic("identify",
        {
        //User Fields
        "id": "bgoodrum", // Required for logged in app users
        "email": "bgoodrum@gainsight.com",
        "firstName": "Tester Brianna",
        "lastName": "Test Goodrum"
        },
        {
        //Account Fields
        "id": "gainsight", //Required
        "name": "Gainsight"
        });
        setTimeout(() => { window.location.href="home.html"; }, 500);
    }
    else if (username != user1.userId && username != user2.userId && username != user3.userId && password == "Password2"){
        window.aptrinsic("identify",
        {
        //User Fields
        "id": "brianna_test", // Required for logged in app users
        "email": "brianna.goodrum@gmail.com",
        "firstName": "Also",
        "lastName": "Me"
        },
        {
        //Account Fields
        "id": "gainsight", //Required
        "name": "Gainsight"
        });
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