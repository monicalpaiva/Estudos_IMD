class Computador{
    constructor(
        public processador: string,
        public memoria: number,){}

}

class Laptop {
    constructor(
        public computador: Computador,
        public beteria_watts: number =0,){}
}

class Desktop {
    constructor(
        public computador: Computador,
        public cabinete: string = " ",){}
}