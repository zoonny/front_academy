// create object 1
const o1 = {
    id: "1",
    name: "hyung",
    ["auth"]: "token"
}
console.log(o1);

o1["role"] = "user";
console.log(o1);

o11 = {
    ...o1,
    ["dept"]: "team1"
}
console.log(o11);

// create object 2
const o2 = Object.create(o1);
console.log(o2);
console.log(o2.name);

// copy object
const o22 = Object.assign(o1);
console.log(o22);

// create object 3
function createObject(id, name, auth, role, dept) {
    return {
        id,
        name,
        auth,
        role,
        dept
    }
}

const o3 = createObject(1, "name1", "token", "user", "team2");
console.log(o3);

// create object 4
class Member {
    #id;
    #name;
    #auth;
    #role;
    #dept;
    constructor(id, name, auth, role, dept) {
        this.id = id;
        this.name = name;
    }
}