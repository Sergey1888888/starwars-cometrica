import {ICompared} from "../types/starship";

export const isSameFirstValues = (items: ICompared[], current: number) => {
    return items.length >= 2 && (current === 0 || current === 1) && items[0].result === items[1].result;
}