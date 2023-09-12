// callback fn arg; call callback fn
function receivesAFunction(callbackFn) {
    return callbackFn();
}

// take no arg; return named fn
function returnsANamedFunction () {
    return receivesAFunction;
}

// take no arg; return anony fn
function returnsAnAnonymousFunction () {
    return function (value) {
        return value;
    }
}