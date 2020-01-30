let avatarSourceState =
    { uri: 'file:///storage/emulated/0/Pictures/images/image-40d5aba6-3222-4377-a0f8-827d80bead94.jpg' }



const snapshot = {
    "bytesTransferred": 122755,
    "metadata":
    {
        "bucket": "monos-e1b6c.appspot.com",
        "cacheControl": "no-store",
        "contentDisposition":
            "inline; filename*=utf-8''mountains",
        "contentEncoding": "identity",
        "contentLanguage": null,
        "contentType": "image/jpg",
        "customMetadata": null,
        "fullPath": "images/mountains",
        "generation": "1580356541588002",
        "md5Hash": "fvHVgGYQLaZxnz9fUD/yjw==",
        "metageneration": "1",
        "name": "mountains",
        "size": 122755,
        "timeCreated": "2020-10-06T03:55:41Z",
        "updated": "2020-10-06T03:55:41Z"
    },
    "state": "success",
    "totalBytes": 122755
}


const user = {
    "_app":
    {
        "_automaticDataCollectionEnabled": true,
        // "_deleteApp": [Function bound deleteApp], "_deleted": false,
        "_initialized": true, "_name": "[DEFAULT]",
        "_nativeInitialized": true,
        "_options": {
            "apiKey": "AIzaSyC0DQfj2MxnARXQcHw4I5IeY-Pzt-iVPH8",
            "appId": "1:1042915152341:android:8422d5e6fa360bdaebed5c",
            "databaseURL": "https://monos-e1b6c.firebaseio.com",
            "gaTrackingId": null,
            "messagingSenderId": "1042915152341",
            "projectId": "monos-e1b6c",
            "storageBucket": "monos-e1b6c.appspot.com"
        }
    },
    "_authResult": true,
    "_config": {
        // "ModuleClass": [Function FirebaseAuthModule],
        "hasCustomUrlOrRegionSupport": false,
        "hasMultiAppSupport": true,
        "namespace": "auth",
        "nativeEvents": ["auth_state_changed", "auth_id_token_changed", "phone_auth_state_changed"],
        "nativeModuleName": "RNFBAuthModule", "statics": {
            // "AppleAuthProvider": [Function AppleAuthProvider],
            // "EmailAuthProvider": [Function EmailAuthProvider],
            // "FacebookAuthProvider": [Function FacebookAuthProvider],
            // "GithubAuthProvider": [Function GithubAuthProvider],
            // "GoogleAuthProvider": [Function GoogleAuthProvider],
            // "OAuthProvider": [Function OAuthProvider],
            // "PhoneAuthProvider": [Function PhoneAuthProvider],
            "PhoneAuthState": [Object],
            // "TwitterAuthProvider": [Function TwitterAuthProvider]
        }, "version": "6.2.0"
    },
    "_customUrlOrRegion": undefined,
    "_languageCode": null,
    "_nativeModule": {
        "APP_LANGUAGE": { "[DEFAULT]": null },
        "APP_USER": {},
        

    },
    "_settings": null,
    "_user": {
        "displayName": null,
        "email": "mhmdarefin@gmail.com",
        "emailVerified": false,
        "isAnonymous": false,
        "metadata": [Object],
        "phoneNumber": null,
        "photoURL": null,
        "providerData": [Array],
        "providerId": "firebase",
        "uid": "I96lzpE2c9cghmxumWGNwP3o0Du2"
    }
}




console.log("avatarSourceState: ", avatarSourceState);
console.log("avatarSourceState.uri: ", avatarSourceState.uri);
//  console.log("avatarSourceState[0].uri: ",avatarSourceState[0].uri);

console.log("user.user.email:",user._user.email);


