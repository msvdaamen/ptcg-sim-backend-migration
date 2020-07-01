import * as fs from 'fs'

export function readDir(path: string): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        fs.readdir(path, (err, result) => {
            if (err) return reject();
            return resolve(result);
        })
    })
}

export function readFile(path: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, result) => {
            if (err) return reject();
            return resolve(result);
        });
    })
}
