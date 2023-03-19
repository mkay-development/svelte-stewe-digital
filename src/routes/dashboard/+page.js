import { url } from "../../stores/backend";
import PocketBase from "pocketbase";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
    const pb = new PocketBase($url);
    const items = await pb.collection("users").getList(1, 50);

    return {
        items: items.items
    };
}