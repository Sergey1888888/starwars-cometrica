import {ICompared, IStarship} from "../types/starship";
import {useEffect, useState} from "react";

export const useCompare = (items: IStarship[]) => {
    const [cost, setCost] = useState<ICompared[] | null>(null);
    const [length, setLength] = useState<ICompared[] | null>(null);
    const [maxSpeed, setMaxSpeed] = useState<ICompared[] | null>(null);
    const [crew, setCrew] = useState<ICompared[] | null>(null);
    const [passengers, setPassengers] = useState<ICompared[] | null>(null);
    const [cargoCapacity, setCargoCapacity] = useState<ICompared[] | null>(null);
    const [consumables, setConsumables] = useState<ICompared[] | null>(null);
    const [hyperdriveRating, setHyperdriveRating] = useState<ICompared[] | null>(null);
    const [mglt, setMglt] = useState<ICompared[] | null>(null);

    useEffect(() => {
        const cost = items.map(item => {
            return isNaN(Number(item.cost_in_credits)) ? {name: item.name, result: item.cost_in_credits} : {name: item.name, result: Number(item.cost_in_credits)};
        }).sort((a, b) => {
            if (typeof a.result === "string") {
                return 1;
            }
            if (typeof b.result === "string") {
                return -1;
            }
            return b.result - a.result;
        });
        setCost(cost);
        const length = items.map(item => {
            return isNaN(Number(item.length))
                ? {name: item.name, result: Number(item.length.replace(/,/gi, ''))}
                : {name: item.name, result: Number(item.length)};
        }).sort((a, b) => b.result - a.result);
        setLength(length);
        const maxSpeed = items.map(item => {
            return isNaN(Number(item.max_atmosphering_speed))
                ? item.max_atmosphering_speed.match(/^\d+/)
                ? {name: item.name, result: Number(item.max_atmosphering_speed.match(/^\d+/)![0])}
                : {name: item.name, result: 'n/a'}
                : {name: item.name, result: Number(item.max_atmosphering_speed)};
        }).sort((a, b) => {
            if (typeof a.result === "string") {
                return 1;
            }
            if (typeof b.result === "string") {
                return -1;
            }
            return b.result - a.result;
        });
        setMaxSpeed(maxSpeed);
        const crew = items.map(item => {
            return isNaN(Number(item.crew))
                ? {name: item.name, result: Number(item.crew.replace(/,/gi, ''))}
                : {name: item.name, result: Number(item.crew)};
        }).sort((a, b) => b.result - a.result);
        setCrew(crew);
        const passengers = items.map(item => {
            return isNaN(Number(item.passengers))
                ? {name: item.name, result: item.passengers}
                : {name: item.name, result: Number(item.passengers)};
        }).sort((a, b) => {
            if (typeof a.result === "string") {
                return 1;
            }
            if (typeof b.result === "string") {
                return -1;
            }
            return b.result - a.result;
        });
        setPassengers(passengers);
        const cargoCapacity = items.map(item => ({name: item.name, result: Number(item.cargo_capacity)}))
            .sort((a, b) => b.result - a.result);
        setCargoCapacity(cargoCapacity);
        const consumables = items.map(item => ({name: item.name, result: item.consumables})).sort((a, b) => {
            let aStr: number = 0;
            let bStr: number = 0;
            switch (a.result.match(/months$|years$|week$|month$/)![0]) {
                case 'week':
                    aStr = 0;
                    break;
                case 'month':
                    aStr = 1;
                    break;
                case 'months':
                    aStr = 2;
                    break;
                case 'years':
                    aStr = 3;
                    break;
            }
            switch (b.result.match(/months$|years$|week$|month$/)![0]) {
                case 'week':
                    bStr = 0;
                    break;
                case 'month':
                    bStr = 1;
                    break;
                case 'months':
                    bStr = 2;
                    break;
                case 'years':
                    bStr = 3;
                    break;
            }
            const aNumb: number = Number(a.result.match(/^\d+/)![0]);
            const bNumb: number = Number(b.result.match(/^\d+/)![0]);
            if (aNumb > bNumb && bStr - aStr > 0) {
                return 1;
            } else if (aNumb > bNumb && bStr - aStr <= 0) {
                return -1;
            } else if (aNumb < bNumb && bStr - aStr > 0) {
                return 1;
            } else if (aNumb < bNumb && bStr - aStr <= 0) {
                return -1;
            } else if (aNumb === bNumb && bStr - aStr > 0) {
                return 1;
            } else if (aNumb === bNumb && bStr - aStr < 0) {
                return -1;
            } else if (aNumb === bNumb && bStr - aStr === 0) {
                return 0;
            }
            return 0;
        });
        setConsumables(consumables);
        const hyperdriveRating = items.map(item => ({name: item.name, result: Number(item.hyperdrive_rating)}))
            .sort((a, b) => a.result - b.result);
        setHyperdriveRating(hyperdriveRating);
        const mglt = items.map(item => ({name: item.name, result: Number(item.MGLT)}))
            .sort((a, b) => b.result - a.result);
        setMglt(mglt);
    }, [items])
    return {
        cost,
        length,
        maxSpeed,
        crew,
        passengers,
        cargoCapacity,
        consumables,
        hyperdriveRating,
        mglt
    }
};