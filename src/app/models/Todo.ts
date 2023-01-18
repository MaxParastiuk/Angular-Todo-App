export class Todo {
  completed!: boolean;
  title!: string;
  profile?: { firstName: string; lastName: string; staticData: number[] };
  id?: number;
}
