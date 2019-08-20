export const range = (from, to) => {
    let array = [];
    let i = from;

    do {
        array.push(i);
        i++
    } while (i <= to);

    return array;
};
