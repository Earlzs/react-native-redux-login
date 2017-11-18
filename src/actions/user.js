import * as TYPE from './types'




//登录操作
export function logIn(opt) {
    var formData = new FormData();
    formData.append('username', opt.username)
    formData.append('password', opt.password)

    let testUser = {
        'username': opt.username,
        'password': opt.password,
        'avatar': 'http://upload.jianshu.io/users/upload_avatars/4985985/dbdd5b51-e9d7-4768-8b3c-72df5202ef1d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
    };

    return (dispatch) => {
        dispatch({
            'type': TYPE.LOGGED_DOING
        });
        let inner_get = fetch('http://192.168.1.239:8100/api/login/',
            {
                method: 'POST',
                body: formData,
            })
            .then((response) => { return response.json() })
            .then((res) => {
                if (res.code == 200) {
                    dispatch({ 'type': TYPE.LOGGED_IN, user: testUser });
                }
            }).catch((e) => {
                alert(e.message);
                dispatch({ 'type': TYPE.LOGGED_ERROR, error: e });
            });
    }
}

export function logOut() {
    return {
        'type': TYPES.LOGGED_OUT
    }
}


