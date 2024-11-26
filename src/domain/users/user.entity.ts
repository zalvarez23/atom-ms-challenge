export class User {
  constructor(
    public readonly id: string,
    public readonly email: string,
    public createdAt: Date = new Date()
  ) {}

  // Métodos de dominio, si es necesario
}
