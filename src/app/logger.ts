import { EventEmitter } from "@angular/core";

export class logger{

    evit :EventEmitter<string> = new EventEmitter<string>();
    log(message: string): void {
        console.log(message);
    }
    error(message: string): void {
        console.error(message);
    }
    warn(message: string): void {
        console.warn(message);
    }
    info(message: string): void {
        console.info(message);
    }
}