let count = 0;


interface Fruit {
    name: string;
    color: string;
}

class Apple implements Fruit {
    name: string;
    color: string;

    constructor(name = "Apple", color = "red") {
        this.name = name;
        this.color = color;
    }

    describe(): string {
        return `This ${this.name} is ${this.color}.`;
    }
}


async function main() {
    let a: Apple = new Apple();

    while (count < 5) 
    {
        console.log(`count is ${count}`);
        count += 1;
    }
}

let p = main();