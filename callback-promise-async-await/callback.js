/* callback setTimeout */
function firstAction() {
    console.log("I'm the first action.");
    setTimeout(secondAction, 2000);
}

function secondAction() {
    console.log("I'm the second action.")
}

setTimeout(firstAction, 5000);

/* no longer setTimeout callback setTimeout Arrow function */
function firstAction(callback) {
    console.log("I'm the first action.");
    setTimeout(callback, 2000);
}

function secondAction() {
    console.log("I'm the second action.")
}

setTimeout(firstAction(secondAction), 5000);

/* callback setTimeout Arrow function */
function firstAction(callback) {
    console.log("I'm the first action.");
    setTimeout(callback, 2000);
}

function secondAction() {
    console.log("I'm the second action.")
}

setTimeout(() => firstAction(secondAction), 5000);

/* callback setTimeout Arrow function pass argument */
function firstAction(callback, message) {
    console.log(message);
    setTimeout(callback, 2000);
}

function secondAction(message) {
    console.log(message)
}

setTimeout(() => firstAction(() => secondAction("I'm the second action."), "I'm the first action."), 5000);

/* callback setTimeout Arrow function pass third callback */
function firstAction(callback, message, anotherCallback) {
    console.log(message);
    setTimeout(callback, 2000);
    anotherCallback()
}

function secondAction(message) {
    console.log(message)
}

function thirdAction(message) {
    console.log("I'm the third action")
}

setTimeout(() => firstAction(() => secondAction("I'm the second action."), "I'm the first action.", thirdAction), 5000);