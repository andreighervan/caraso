
import { CARS } from './db-data';

import * as firebase from 'firebase';

var config = {
    apiKey: 'AIzaSyAqu7l_mU0SEI-Ft9AjTSusbK5XS8B7dew',
    authDomain: 'caraso.firebaseapp.com',
    databaseURL: 'https://caraso.firebaseio.com',
    projectId: 'caraso',
    storageBucket: 'caraso.appspot.com',
    messagingSenderId: '829660017987',
    appId: '1:829660017987:web:0c3fa76eff18644fe8abf6',
    measurementId: 'G-W9CDVN72FZ'
};

console.log("Uploading data to the database with the following config:\n");

console.log(JSON.stringify(config));

console.log("\n\n\n\nMake sure that this is your own database, so that you have write access to it.\n\n\n");

const app = firebase.initializeApp(config);
const db = firebase.firestore();

main().then(r => console.log('Done.'));

async function uploadData() {
    const cars = await db.collection('cars');
    for (let car of Object.values(CARS)) {
        const newcar = removeId(car);
        const carRef = await cars.add(newcar);
        console.log(`Uploading car ${car.carName}`);
    }
}

function removeId(data: any) {
    const newData: any = { ...data };
    delete newData.id;
    return newData;
}

async function main() {
    try {
        console.log('Start main...\n\n');
        await uploadData();
        console.log('\n\nClosing Application...');
        await app.delete();
    } catch (e) {
        console.log('Data upload failed, reason:', e, '\n\n');
    }
}

