const validate_Email_func=(email)=> {
        // console.log('email at validation email : ',email);

        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
                return (true)
            }
            // Alert.alert('You have entered an invalid email address!')
            return false;

        }
    }


    const validate_Password_func=(password)=>{

        if( !password || !typeof(password) || password === '' || password.length <6)
            return false;

        return true;
    }

    console.log("validate_Email_func('mhmdarefin@gmail.com')1",validate_Email_func('mhmdarefin@gmail.com'));

    console.log("validate_Email_func('')2",validate_Email_func(''));
    
    console.log("validate_Email_func('mhmdarefin')3",validate_Email_func('mhmdarefin'));

    console.log("validate_Email_func('1234567')3",validate_Email_func('1234567'));
    
    

    console.log("validate_Password_func('123456123'): ",validate_Password_func('123456123'));
    console.log("validate_Password_func(''): ",validate_Password_func(''));
    console.log("validate_Password_func('ABCDEF'): ",validate_Password_func('ABCDEF'));
    console.log("validate_Password_func('RND'): ",validate_Password_func('RND'));


