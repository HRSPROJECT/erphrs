// js/auth.js

// Handle Google Sign-In
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/drive.file'); // Add scopes as needed

    auth.signInWithPopup(provider)
        .then((result) => {
            // Successful sign-in
            // Redirect to the default module (e.g., POS)
            window.location.href = 'pos.html';
        })
        .catch((error) => {
            console.error("Error during sign-in:", error);
            showNotification("Error during sign-in. Please try again.", true);
        });
}

// Handle Sign-Out
function signOutUser() {
    auth.signOut()
        .then(() => {
            // Successful sign-out
            window.location.href = 'index.html';
        })
        .catch((error) => {
            console.error("Error during sign-out:", error);
            showNotification("Error during sign-out. Please try again.", true);
        });
}

// Listen to Auth State Changes
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        // Optionally, you can update the UI or fetch user data here
    } else {
        // No user is signed in
        // Redirect to login page if not already there
        if (window.location.pathname !== '/index.html' && window.location.pathname !== '/') {
            window.location.href = 'index.html';
        }
    }
});
