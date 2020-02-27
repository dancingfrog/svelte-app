import App from './App.svelte';

const appId = "svelte-app";
const appElement = document.getElementById(appId);
const app = ( // Check if app id exists in DOM
    appElement !== null &&
    (appElement.constructor.name === 'HTMLElement' ||
        appElement.constructor.name === 'HTMLDivElement')
    ) ?
    new App({
        target: appElement,
        props: {
            title: "Hello Svelte"
        }
    }) : {};

export default app;
