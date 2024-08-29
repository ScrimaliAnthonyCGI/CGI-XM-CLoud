/* eslint-disable */
import React from 'react';
import { Text, Field, ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type InfoComponentProps = ComponentProps & {
  fields: {
    Title: Field<string>;
    Description: Field<string>;
    Image: ImageField;
  };
};

export const Default = (props: InfoComponentProps): JSX.Element => {
  return (
    <div>
      <Text field={props.fields.Title} />
      <br />
      <Text field={props.fields.Description} />
      <Image field={props.fields.Image} height="250" width="250" />
    </div>
  );
};