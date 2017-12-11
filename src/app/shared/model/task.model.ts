export class Task {
  constructor(public id: string,
              public title: string,
              public description: string,
              public completed: number,
              public rev: string,
              public owner: boolean
  ) {}
}
