import {allNames} from './names';
import {allLastNames} from './lastnames';

export function makeName () {
    const names = [...allNames.replaceAll('\n', '').split(',')];
    const randomItem = names[Math.floor(Math.random() * names.length)];

    return randomItem;
}

export function makeLastName () {

    const lastNames = [...allLastNames.replaceAll('\n', '').split(',')];
    const randomItem = lastNames[Math.floor(Math.random() * lastNames.length)];

    return randomItem;
}