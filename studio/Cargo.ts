import { Payload } from './Payload';

export class Cargo implements Payload {
    massKg: number;
    material: string;
    
    constructor(massKg, material) {
        this.material = material;
        this.massKg = massKg
    }
 }