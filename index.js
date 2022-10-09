module.exports.encipher = (p) => {
    let c = '';
    p.split('').forEach((l) => {
        for (let g of l.charCodeAt(0).toString(2).padStart(8, '0').match(/.{2}/g)) {
            switch (g) {
                case '00': c += 'A'; break;
                case '01': c += 'C'; break;
                case '11': c += 'G'; break;
                case '10': c += 'T'; break;
            }
        }
    });
    return c;
};

module.exports.decipher = (c) => {
    let p = '';
    c.match(/.{4}/g).forEach((g) => {
        let t = '';
        g.split('').forEach((l) => {
            switch (l) {
                case 'A': t += '00'; break;
                case 'C': t += '01'; break;
                case 'G': t += '11'; break;
                case 'T': t += '10'; break;
            }
        });
        p += String.fromCharCode(parseInt(t, 2));
    });
    return p;
};