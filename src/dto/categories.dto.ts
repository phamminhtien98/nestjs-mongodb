export class CategoriesDto {
  id?: number;
  name?: string;
  ids?: number[];
  parentId?: number | null;
  constructor(data: CategoriesDto) {
    this.id = data.id;
    this.name = data.name;
    this.ids = data.ids;
    this.parentId = data.parentId;
  }
}
