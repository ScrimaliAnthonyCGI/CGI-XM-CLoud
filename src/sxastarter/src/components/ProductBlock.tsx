/* eslint-disable */
import React from 'react';
import { Field, Text, Image, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  ProductTitle: Field<string>;
  ProductImage: ImageField;
  ProductDescription: Field<string>;
}

export type ProductProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const ProductBlock = (props: ProductProps): JSX.Element => {
  return (
    <div>
      <h1>
        <Text field={props.fields.ProductTitle} />
      </h1>
      <div>
        <Image field={props.fields.ProductImage} alt={props.fields.ProductTitle.value} />
      </div>
      <div>
        <Text field={props.fields.ProductDescription} />
      </div>
    </div>
  );
};
