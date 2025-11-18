const formatValue = (input: string | number | boolean): string | number | boolean => {
    if (typeof input === "string") { return input.toUpperCase(); }
    if (typeof input === "number") { return input * 10; }
    if (typeof input === "boolean") { return !input; }
    throw new Error ('Not a valid input');
};



type getL = string | unknown[];
const getLength = (userInput: getL): number => {
    if (typeof userInput === "string") { return userInput.length; }
    if (Array.isArray(userInput)) { return userInput.length; }
    throw new Error ('Not a valid input');
};



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}



interface BookItem  { title: string; rating: number };

const filterByRating = (books: BookItem[]): BookItem[] => {
    return books.filter(myBook => myBook.rating >=4);
};



interface User { id: number; name: string; email: string; isActive: boolean; }

const filterActiveUsers = (users: User[]): User[] => {
    const usersActive = users.filter((user)=> user.isActive);
    return usersActive;
};



interface Book { title: string; author: string;  publishedYear: number;  isAvailable: boolean; }

const printBookDetails = (book: Book): void => {
    const available: string = book.isAvailable ? 'Yes' : 'No';
    console.log(`Title: ${book.title}, Author: ${book.author},  Published: ${book.publishedYear}, Available: ${available}`);
};



const getUniqueValues = <T extends string | number>(array1: T[], array2: T[]): T[] => {
    const result: T[] = [];

    const checkAdd = (arr: T[]) => {
        for (let i = 0; i < arr.length; i++) {
            const currentValue = arr[i];
            let duplicate = false;

            for (let j = 0; j < result.length; j++) {
                if (result[j] === currentValue) {
                    duplicate = true;
                    break;
                }
            }

            if (!duplicate) {
                result.push(currentValue);
            }
        }
    };

    checkAdd(array1);
    checkAdd(array2);

    return result;
};



interface ProductObject { 
    name: string; 
    price: number;  
    quantity: number; 
    discount?: number; 
}

const calculateTotalPrice = (products:ProductObject[]): number => {
    return products.reduce((sum, product) => {
        const baseP = product.price * product.quantity;

        let finalP = baseP;
        if (product.discount && product.discount > 0 && product.discount <= 100) {
            finalP = baseP * (1 - product.discount / 100);
        }
        return sum + finalP;
    }, 0);
};
