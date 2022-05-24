const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Added an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // store triggered events:
    window.deferredPrompt = event;
    // Removes hidden classes from the button:
    butInstall.classList.toggle('hidden', false);
});

// Implemented a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }

    // Show prompt:
    promptEvent.prompt();
    // Resets the deferred prompt var
    window.deferredPrompt = null;
    // Add the hidden class to the button.
    butInstall.classList.toggle('hidden', true);
});


// Added an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});
