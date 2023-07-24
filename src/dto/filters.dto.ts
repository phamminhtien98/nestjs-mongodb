export class AttributeValue {
  option_id?: number;
  option_name?: string;
  name?: string;
  value?: number;
  search_key?: string;
  gtprice?: string | number;
  ltprice?: string | number;
  gte_rating_percent?: string;
  lte_rating_percent?: string;
  color_id?: number;
  image?: string;
  color_hexRgb?: string;
  color_name?: string;

  constructor(data: AttributeValue) {
    this.option_id = data.option_id;
    this.option_name = data.option_name;
    this.name = data.name;
    this.value = data.value;
    this.search_key = data.search_key;
    this.gtprice = data.gtprice;
    this.ltprice = data.ltprice;
    this.gte_rating_percent = data.gte_rating_percent;
    this.lte_rating_percent = data.lte_rating_percent;
    this.color_id = data.color_id;
    this.image = data.image;
    this.color_hexRgb = data.color_hexRgb;
    this.color_name = data.color_name;
  }
}

export class FiltersDto {
  attribute_term?: string;
  attribute_name?: string;
  attribute_key?: string;
  attribute_value?: AttributeValue[];

  constructor(data: FiltersDto) {
    this.attribute_term = data.attribute_term;
    this.attribute_name = data.attribute_name;
    this.attribute_key = data.attribute_key;
    this.attribute_value = data.attribute_value
      ? data.attribute_value.map((option) => new AttributeValue(option))
      : [];
  }
}
