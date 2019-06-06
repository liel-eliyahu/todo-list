export class Todo {
    public name: string;
    // tslint:disable-next-line: no-inferrable-types
    public completeMode: boolean = false;
    // tslint:disable-next-line: no-inferrable-types
    public editMode: boolean = false;

    constructor(name: string) {
      this.name = name;
    }
  }
