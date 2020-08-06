import {USER_TOKEN} from './constant'

export function getToken() {
    return localStorage.getItem(USER_TOKEN)
}

export function setToken(token) {
    return localStorage.setItem(USER_TOKEN, token)
}

export function removeToken() {
    return localStorage.removeItem(USER_TOKEN)
}