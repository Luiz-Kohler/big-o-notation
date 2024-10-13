class OperationsCounter {
    #counter = 0;
  
    increment() {
      this.#counter++;
    }
  
    reset() {
      this.#counter = 0;
    }

    get(){
        return this.#counter;
    }
  }
  
  export default new OperationsCounter();