// The destination function accepting the variable as a parameter
function processToken(token: string): void {
    console.log(`Token received: ${token}`);
}

function authenticationFlow(callback: (t: string) => void) {
    callback("xyz_secure_token");
}

// Intercept inside the callback and immediately pass it to the other function
authenticationFlow((generatedToken) => {
    processToken(generatedToken); 
});