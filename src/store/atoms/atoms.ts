import { atom, atomFamily, selector } from "recoil";
export const methodAtom = atom({
    key: "methodAtom",
    default: "get"
});

export const bodyAtom = atom({
    key: "bodyAtom",
    default: `  {






  }`
});
export const urlAtom = atom({
    key: "urlAtom",
    default: ""
});
export const resultAtom = atom({
    key: "resultAtom",
    default: ""
});
export const headersAtom = atomFamily({
    key: "headersAtom",
    default:  (id:number) => ({
        id,
        key: "",
        value: ""
    })
});
export const arrAtom = atom({
    key: "arrAtom",
    default: [1]
});
export const headselector = selector({
    key: "headselector",
    get: ({ get }) => {
        let obj: { [key: string]: string } = {};
        let arr: { key: string, value: string }[] = [];
        let id=get(arrAtom);
        for (let i = 0; i < id.length; i++) {
            let o = get(headersAtom(id[i]));
            arr.push(o);
        }
        for (let i = 0; i < arr.length; i++) {
            obj = {
                ...obj,
                [arr[i].key]: arr[i].value
            }
        }
        return obj;
    }

})