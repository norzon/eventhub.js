# eventhub.js

*Event Hub(bus) implemented in JavaScript*

---
## Table of Contents

1. [Installation](#1-installation)
1. [Files available](#2-files-available)
    1. [Non-compiled](#21-non-compiled)
    1. [Compiled](#22-compiled)
    1. [TypeScript declaration file](#23-TypeScript-declaration-file)
1. [Usage](#3-usage)
    1. [Initialization](#31-initialization)
    1. [Attach event](#32-attach-event)
    1. [Detach event](#33-detach-event)
    1. [Fire event](#34-fire-event)
    1. [Example](#35-example)
1. [Contributing](#4-contributing)
1. [License](#5-license)

---
## 1. Installation

Install the version you want by navigating to the [relase](https://github.com/norzon/eventhub.js/releases) tab and choosing the one you want

or

Install the latest version
```
npm install norzon/eventhub.js
```

---
## 2. Files available

### 2.1 Non-compiled
If you plan on compiling to an earlier version of JS, such as ES5, or you don't care about compatibility then use:
```
node_modules/eventhub.js/lib/eventhub.js
```

### 2.2 Compiled
On the other hand, if you care about compatibility and are not planning on compiling to ES5 or similar, use:
```
node_modules/eventhub.js/dist/eventhub.js
(or)
node_modules/eventhub.js/dist/eventhub.min.js
```

### 2.3 TypeScript declaration file
For TypeScript users, the declaration file can be found at:
```
node_modules/eventhub.js/lib/eventhub.d.ts
```

---
## 3. Usage

The eventhub.js library declares an "EventHub" class, therefore you can have many eventhub instances where each one has seperate event listeners and handlers.

### 3.1 Initialization
To initialize an EventHub object, use:
```js
const eventhub = new EventHub();
```

### 3.2 Attach event
To attach an event listener use:
```js
eventhub.on('my-event', myCallbackFunction);
// or
eventhub.$on('my-event', myCallbackFunction);
// or
eventhub.listen('my-event', myCallbackFunction);
```

### 3.3 Detach event
To detach an event listener that was attached, use:
```js
eventhub.off('my-event', myCallbackFunction);
// or
eventhub.$off('my-event', myCallbackFunction);
// or
eventhub.remove('my-event', myCallbackFunction);
```

### 3.4 Fire event
To emit, fire, an event use:
```js
eventhub.emit('my-event', myCallbackFunction);
// or
eventhub.$emit('my-event', myCallbackFunction);
// or
eventhub.fire('my-event', myCallbackFunction);
```

### 3.5 Example
```js
// Initialize new object
const eventhub = new EventHub();

// For convenience set a variable to the event name
let key = 'window.loaded';

// Attach the event
eventhub.on(key, function(msg){
    if (typeof msg !== 'string' || msg.length === 0) {
        msg = 'Invalid message passed'
    }
    if (typeof alert === "function") {
        // We are probably in the browser
        alert(msg);
    } else {
        // We are probably in node
        console.log(msg);
    }
});

// Fire the event
eventhub.emit(
    key,
    'After this, the event is detached. That means goodbye!'
);

// Detach the event
eventhub.off(key);

// Try to fire again, but fail
eventhub.emit(key, 'This message will not be displayed');
```

After this, you are hopefully ready to start coding!


---
## 4. Contributing

Any contributions are welcome!

### Contribute by
- [Creating a pull request](https://github.com/norzon/eventhub.js/compare)
- [Creating an issue](https://github.com/norzon/eventhub.js/issues/new)

### Commit & Push flow
#### Clone the repo
```
git clone https://github.com/norzon/eventhub.js.git
```

#### Make changes to files
Open with your favorite text editor and code away!
Use below command to build and test code (generated code in ./dev)
```
npm run dev
```

#### Build the project
Build the project using:
```
npm run build
```

#### Create/adjust testing
Depending on what you coded, create or adjust the file "test/test.js". This file contains code to test this library using the "Mocha" library.
Check Mocha's documentation [here](https://mochajs.org/#table-of-contents)

#### Run test
Run Mocha test using:
```
npm run test
```

#### Commit & Push
All set to commit. Explain the changes in the commit message and push to the repo!


---
## 5. License

eventhub.js is available under the [GNU General Public License version 3](https://opensource.org/licenses/GPL-3.0)