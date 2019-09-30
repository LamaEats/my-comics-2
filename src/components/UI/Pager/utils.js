export const range = (from, to) => {
    const array = [];
    let i = from;

    do {
        array.push(i);
        i++
    } while (i <= to);

    return array;
};
