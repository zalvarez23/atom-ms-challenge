export class Task {
  constructor(
    public readonly id: string,
    public readonly title: string,
    public description: string,
    public userId: string,
    public readonly createdAt: Date = new Date(),
    public completed: boolean = false,
  ) {}

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
