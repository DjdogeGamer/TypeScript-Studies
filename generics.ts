function useState<T>() {
    let state: T;

    function get() {
        return state;
    }

    function set(newValue: T) {
        state = newValue;
    }

    return { get, set }
}

let newState = useState<String>();
newState.get();
newState.set("João");
//newState.set(123);