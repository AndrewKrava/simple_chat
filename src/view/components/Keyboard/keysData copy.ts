type NPD = Array<[string | null, string | null, string | null]>

const transformer = (arrayOfData: NPD) => arrayOfData.map(([ keyRuValue, keyEnValue, keyCode ]) => ({
    keyRuValue, keyEnValue, keyCode,
}));

const firstLine: NPD = [[ '1', '1', 'Digit1' ], [ '2', '2', 'Digit2' ], [ '3', '3', 'Digit3' ], [ '4', '4', 'Digit4' ], [ '5', '5', 'Digit5' ], [ '6', '6', 'Digit6' ], [ '7', '7', 'Digit7' ], [ '8', '8', 'Digit8' ], [ '9', '9', 'Digit9' ], [ '0', '0', 'Digit0' ]];
const secondLine: NPD = [[ 'й', 'q', 'keyQ' ], [ 'ц', 'w', 'keyW' ], [ 'у', 'e', 'keyE' ], [ 'к', 'r', 'keyR' ], [ 'е', 't', 'keyT' ], [ 'н', 'y', 'keyY' ], [ 'г', 'u', 'keyU' ], [ 'ш', 'i', 'keyI' ], [ 'щ', 'o', 'keyO' ], [ 'з', 'p', 'keyP' ], [ 'х', null, 'BracketLeft' ]];
const thirdLine: NPD = [[ 'ф', 'a', 'keyA' ], [ 'ы', 's', 'keyS' ], [ 'в', 'd', 'keyD' ], [ 'а', 'f', 'keyF' ], [ 'п', 'g', 'keyG' ], [ 'р', 'h', 'keyH' ], [ 'о', 'j', 'keyJ' ], [ 'л', 'k', 'keyK' ], [ 'д', 'l', 'keyL' ], [ 'ж', null, 'Semicolon' ], [ 'э', null, 'Quote' ]];
const forthLine: NPD = [[ 'Shift', 'Shift', '16' ], [ 'я', 'z', 'keyZ' ], [ 'ч', 'x', 'keyX' ], [ 'с', 'c', 'keyC' ], [ 'м', 'v', 'keyV' ], [ 'и', 'b', 'keyB' ], [ 'т', 'n', 'keyN' ], [ 'ь', 'm', 'keyM' ], [ 'б', null, '' ], [ 'ю', null, '' ], [ 'Backspace', 'Backspace', '8' ]];
const fifthLine: NPD = [[ ',', ',', 'Comma' ], [ 'Ру', 'En', 'changeLang' ], [ 'Space', 'Space', 'Space' ], [ '.', '.', 'Period' ], [ 'Enter', 'Enter', 'Enter' ]];

export const keysData = {
    firstLine:  transformer(firstLine),
    secondLine: transformer(secondLine),
    thirdLine:  transformer(thirdLine),
    forthLine:  transformer(forthLine),
    fifthLine:  transformer(fifthLine),
};

export type IParsedKeys = ReturnType<typeof transformer>
