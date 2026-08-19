// 1. Define the function with a callback parameter
function processUser(name: string, callback: (message: string) => void): void {
  const greeting = `Hello, ${name}!`;
  callback(greeting); // 2. Execute the callback
}

// 3. Pass an anonymous function as the callback
processUser("Alice", (msg) => {
  console.log(msg); // Output: Hello, Alice!
});