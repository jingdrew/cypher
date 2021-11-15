import { AES, enc } from 'crypto-js';
import { readFileSync, writeFileSync } from 'fs';

const args = process.argv.slice(2);
if (args.length > 2) {
    const method = args[0];
    const keyFile = args[1];
    const filename = args[2];
    const key = readFileSync(keyFile).toString();
    const data = readFileSync(filename).toString();
    if (method === 'enc') {
        writeFileSync('encrypted.txt', AES.encrypt(data, key).toString());
    } else if (method === 'dec') {
        writeFileSync('decrypted.txt', AES.decrypt(data, key).toString(enc.Utf8));
    } else {
        console.log('Invalid arguments');
    }
} else {
    console.log('Missing arguments. include method (enc, dec) keyfile filename');
}
