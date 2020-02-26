import App from './App.svelte';

var app = new App({
    target: document.body,
    props: {
        title: "Hello Svelte"
    }
});

export default app;
