import { Payload} from './Payload';
import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';

export class Rocket implements Payload {
    massKg: number;
    public name: string;
    private totalCapacityKg: number;
    private cargoItems: Cargo[] = [];
    private astronauts: Astronaut[] = [];

    public constructor(name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    private sumMass(items: Payload[]): number {
        let sum = 0;

        for (const item of items) {
            sum += item.massKg;
        }

        return sum;
    }

    public currentMassKg(): number {
        return this.sumMass(this.cargoItems) + this.sumMass(this.astronauts);
    }

    public canAdd(item: Payload): boolean {
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
    }

    public addCargo(cargo: Cargo): boolean {
        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);

            return true;
        } else {
            return false;
        }
    }

    public addAstronaut(astronaut: Astronaut): boolean {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);

            return true;
        } else {
            return false;
        }
    }
}
