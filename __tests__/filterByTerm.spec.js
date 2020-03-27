// function filterByTerm(inputArr, searchTerm){
//     if (!searchTerm) throw Error("searchTerm cannot be empty");
//     const regex = new RegExp(searchTerm, "i");
//     return inputArr.filter(function(arrElement){
//         return arrElement.url.match(regex);
//     });
// }

const filterByTerm = require("../src/filterByTerm");
describe("Filter function", ()=>{
    test("it should filter by a search term(Link)",()=>{
        const input =[
            {id:1 , url: "https://www.url1.dev"},
            {id:2, url: "https://www.url2.dev"},
            {id: 3, url: "https://www.link3.dev"}
        ];
        const output = [{id: 3, url:"https://www.link3.dev"}];
        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "Link")).toEqual(output);
        expect(filterByTerm(input, "uRl")).toEqual([{id:1 , url: "https://www.url1.dev"},
        {id:2, url: "https://www.url2.dev"}]);
        // expect(filterByTerm(input, "")).
    });
});