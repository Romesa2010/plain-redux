//https://blog.soshace.com/building-react-components-using-children-props-and-context-api/
let Reducers = {
    counter: (state, action) => { //{type:'ACTION_1', payload:{}}
        switch (action.type) {
            case '++':
                return { ...state, counter: state.counter + 1 };
            // break;
            case '--':
                return { ...state, counter: state.counter - 1 };
            default:
                return state;
        }
    },


}
var item_ = {
    a: {
        y: {
            n: ['ohoho', 'ahhaaa', { 'h': 8 }]
        }
    }
}

function has(item, selectorStr) {
    if (!item) return undefined;
    let ar = selectorStr.split('.');
    let errFlag = false;
    return ar.reduce((acc, el, i) => {
        if (!errFlag) {
            let x = acc[el]
            if (x === undefined) {
                errFlag = true;
                return undefined;
            } else {
                return x;
            }
        } else {
            return undefined;
        }

    }, item)

}
// 'a.y.n.[0]'
//'a.hello.n.[3].h'
function set(item, pathStr, value) {

    let ar = pathStr.split('.');
    let rj = /^\[(.*?)\]$/gi;
    item = item ? item : (rj.test(el) ? [] : {});
    ar.reduce((acc, el, i, array) => {

        let next = array[i + 1];
        let isArray = rj.test(next);
        let r = /(^[\[]|[\]]$)/gi
        if (i + 1 === array.length) {

            acc[el.replace(r, '')] = value;
            return acc;
        }
        el = el.replace(r, '');
        function getObject() {

            return acc[el] && acc[el].toString() === '[object Object]'
                && !isArray ? acc[el] : {}
        }
        function getArray() {
            return acc[el] && Array.isArray(acc[el]) && isArray ? acc[el] : []
        }
        isArray ? acc[el] = getArray() : acc[el] = getObject()

        return acc[el];

    }, item)
    return item;
}
class Store {
    state;
    subsFns = [];
    reducerFns = [];
    pre = [];
    post = []
    addReducer(fn) {
        this.reducerFns.push(fn);
    }
    constructor(initialState = null, reducers, premw = null, postmw = null) {
        this.state = initialState;
        // debugger
        if (premw) this.pre = premw;
        if (postmw) this.post = postmw;

        Object.keys(reducers).forEach((key) => {

            this.state[key] = this.state[key] || null;
            if (reducers[key].name !== key) reducers[key].name = key
            this.reducerFns.push(reducers[key]);

        })

    }

    subscribe(cb, selector) {

        if (typeof cb === 'function') {
            this.subsFns.push({ cb, selector });
        }
        return () => {
            this.subsFns = this.subsFns.filter((ob) => ob.cb !== cb)
        }

    }
    dispatch(action) { // {type:"skdfsd", payload: {}}
        let strState = JSON.stringify(this.state);
        let state = JSON.parse(strState);
        if (typeof action === 'function') {
            action(this.dispatch.bind(this), state)
        } else {
            state = this.pre.reduce((state, r_fn) => {
                state = r_fn(state, action);
                return state;
            }, state)
            state = this.reducerFns.reduce((state, r_fn) => {
                state = r_fn(state, action);
                if (!state) throw Error(`${r_fn} returned undefined`);
                return state;
            }, state)

            state = this.post.reduce((state, r_fn) => {
                state = r_fn(state, action);
                return state;
            }, state)
            const n_str = JSON.stringify(state);
            this.state = state;
            let st = JSON.parse(n_str);
            let pr = JSON.parse(strState);
            this.subsFns.forEach((sub) => {
                setTimeout(() => {
                    let a, b;
                    if (typeof sub.selector === 'string') {
                        a = has(st, sub.selector)
                        b = has(pr, sub.selector);
                        a !== b && sub.cb(a, b)
                    } else if (typeof sub.selector === 'function') {
                        a = sub.selector(st);
                        b = sub.selector(pr)
                        a !== b && sub.cb(a, b);
                    } else {
                        sub.cb(st, pr);
                    }
                    // sub_fn(JSON.parse(n_str), JSON.parse(strState))
                })
            })
        }


    }

    getState() {
        return JSON.parse(JSON.stringify(this.state))
    }
}

