// What is the difference between import and require?
// Require: It is the builtin function to include modules that exist in separate files.  it reads a JavaScript file, executes the file, and then proceeds to return the export object. allows you to add built-in core Node modules and community-based modules (node_modules), and local modules in the desired program.
// ES6 Import & Export: These statements are used to refer to an ES module. Other file types can’t be imported with these statements. They are permitted only in ES modules and the specifier of this statement can either be a URL-style relative path or a package name.

// How can you enable using the import syntax using node js
// Save the file with .mjs extension, or
// Add { "type": "module" } in the nearest package.json.

// Give 2 node.js environment variables that are not available
// when using the import syntax.
// __dirname: This variable is not available because the import syntax does not support the use of the __dirname variable, which provides the directory name of the current module. Instead, you can use the import.meta.url property to get the URL of the current module and then use the path module to extract the directory name.
// __filename: This variable is also not available when using the import syntax. Similar to __dirname, you can use the import.meta.url property to get the URL of the current module and then use the path module to extract the file name.

// Create 3 functions using the export/import syntax.

import { add, subtract, multiply } from "./functions.mjs";

console.log(add(2, 3)); // Output: 5
console.log(subtract(5, 2)); // Output: 3
console.log(multiply(3, 4)); // Output: 12

// Import the file system module using the import syntax.
