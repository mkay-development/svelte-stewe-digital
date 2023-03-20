import { writable, get } from 'svelte/store';

export const open = writable(false);

export const toggle = function () {
    open.update((value)=> {
        return !value;
    });
}