import {
  CommonFieldTypes,
  SitecoreIcon,
  Manifest,
} from '@sitecore-jss/sitecore-jss-dev-tools'

export default function (manifest) {
  manifest.addComponent({
    name: 'TestAiComponent',
    displayName: 'TestAiComponent',
    icon: SitecoreIcon.DocumentTag,
    allowedPlaceholders: ['jss-main'],
    contentResolver: '',
    fields: [
      {
        name: 'text',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Share on Facebook',
      },
      {
        name: 'text1',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Share on Twitter',
      },
      {
        name: 'text2',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Blog Post Title',
      },
      {
        name: 'text3',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'by Author Name',
      },
      {
        name: 'text4',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Published on Date',
      },
      {
        name: 'text5',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading 1',
      },
      {
        name: 'text6',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'This is a paragraph of the blog content. It provides detailed information about the topic discussed in the blog post.',
      },
      {
        name: 'text7',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Heading 2',
      },
      {
        name: 'text8',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Another paragraph of the blog content. It continues to provide insights and valuable information to the readers.',
      },
      {
        name: 'text9',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'This is a blockquote. It highlights a significant point or a quote from the blog content.',
      },
      {
        name: 'text10',
        type: CommonFieldTypes.SingleLineText,
        standardValue:
          'Final paragraph of the blog content. It wraps up the discussion and provides a conclusion or a call to action.',
      },
      {
        name: 'text11',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Share on Facebook',
      },
      {
        name: 'text12',
        type: CommonFieldTypes.SingleLineText,
        standardValue: 'Share on Twitter',
      },
    ],
  })
}
