import * as TYPE from './types'




let testUser = {
	'name': 'zs',
	'age': '24',
	'avatar': 'http://upload.jianshu.io/users/upload_avatars/4985985/dbdd5b51-e9d7-4768-8b3c-72df5202ef1d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240'
};

export function logIn() {
    return (dispatch) => {
        dispatch({
            'type': TYPE.LOGGED_DOING
        });
        let inner_get = fetch('http://www.baidu.com')
            .then((res) => {
                dispatch({ 'type': TYPE.LOGGED_IN, user: testUser });
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


