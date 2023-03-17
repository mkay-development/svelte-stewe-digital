import { browser } from "$app/environment";
import { writable } from "svelte/store";
import PocketBase from 'pocketbase';
import { url } from "./backend";

export let token = writable('');
export let authData = writable({});
export let isLoggedIn = writable(false);

export const init = function () {
    if (browser && localStorage.getItem('pocketbase_auth') != null) {
        let data = JSON.parse(localStorage.getItem('pocketbase_auth'));

        authData.set(data);
        token.set(data.token);
        isLoggedIn.set(true);
    }
}

export const change = function () {
    
}

token.subscribe(value => {
    if (browser) {
        localStorage.setItem('token', value);
    }
})