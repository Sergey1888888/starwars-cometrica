import {ICompared} from "../types/starship";

export const isSameValue = (items: ICompared[], current: number) => {
    return items.length >= 2 && (items[current].result === items[current - 1]?.result || items[current].result === items[current + 1]?.result);
}