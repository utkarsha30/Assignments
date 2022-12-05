import {userLogin } from '@/service/user';

const KEY_TOKEN = 'token';
const KEY_EMAIL = 'email';
const KEY_NAME = 'name';
const auth = {
    state:{
        token:localStorage.getItem(KEY_TOKEN) || '',
        email:localStorage.getItem(KEY_EMAIL) || '',
        name:localStorage.getItem(KEY_NAME) || '',
    },
    getters:{
        isAuthenticated(state){
            return state.token !==''
        },
        userEmail(state){
            return state.email;
        }
    },
    mutations:{
        setToken(state, token){
            state.token = token;
        },
        setEmail(state, email){
            state.email = email;
        },
        setName(state, name){
            state.name = name;
        }
    },
    actions:{
        async userLogin({commit}, credentials){
            
                const data = await userLogin(credentials);
                const  { token , email , name} = data;
                localStorage.setItem( KEY_TOKEN , token);
                localStorage.setItem( KEY_EMAIL , email);
                localStorage.setItem( KEY_NAME , name);

                commit('setToken', token);
                commit('setEmail', email);
                commit('setName',name);
                return true;
        },
        userLogout({commit}){
            commit('setToken', "");
            commit('setEmail', "");
            commit('setName',"");
            localStorage.removeItem(KEY_TOKEN);
            localStorage.removeItem( KEY_EMAIL);
            localStorage.removeItem(KEY_NAME);
            
        }
    }
    
}
export default auth;