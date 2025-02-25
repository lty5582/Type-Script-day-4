/*
챕터 4-4 유틸리티 타입 (utility types)
*/

// Partial<T>
// type User3 = {
//     id : string
//     name: number
//     email: string
// }

// type PartialUser = Partial<User3>

// type Product = {
//     id: number;
//     price: string;
// }

// type PartialProduct = Partial<Product>

// const Product: PartialProduct = {
    
// }
// const Product2: Product = {

// }

// Readonly<T>

// type User5 = {
//     id: number;
//     name:  string;
// }

// const userl: Readonly<User5> = {
//     id: 1,
//     name: "John"
// }
// user.id = 10;
// user.name = "Amy";

// Pick<T,K>

// type User7 = {
//     id: number;
//     name: string;
//     email: string;
// }
// type UserWithNameOnly = Pick<User7, "name">

// const user7: UserWithNameOnly = {
//     name: "Lee"
// }

//Omit<T,K>
// type Product = {
//     id: number;
//     name: string;
//     price: number;
//     uniqueCode: number;
// }

// type ProductWithOmit = Omit<Product,'uniqueCode' | 'price' | 'name'>;

//Record<K,T>
type Country = "South Korea" | "Canada" | "United States";
type Capital = string;

type CountryCapital = Record<Country, Capital>;

const Capitals: CountryCapital = {
    "South Korea": "Seoul",
    "United States": "Washington D.C",
    "Canada": "Ottawa"
}

type CounttyInfo = {
    captial: string;
    population: number;
    continent: string;
}

type CountryInfoMap = Record<Country,CounttyInfo>

const countryInfo: CountryInfoMap = {
    "South Korea": {
        captial: "Seoul",
        population: 51_000_000,
        continent: "Asia"
    },
    'United States': {
        captial: "Washington D.C",
        population: 331_000_000,
        continent: "North America"
    },
    'Canada': {
        captial: "Ottawa",
        population: 83_000_000,
        continent: "North America"
    }    
}   


// Parameters<T>
type SomeFunction = (id: number) => void;
type Param = Parameters<SomeFunction>

function someFunction(...param:Param) {
    const [ id] = param;
}

someFunction(100)

type SaveUser = (name: string, age: number) => void;

type Params = Parameters<SaveUser>

function saveUser(...params:Params){
    const [name, age] = params;
}

saveUser("David", 33)