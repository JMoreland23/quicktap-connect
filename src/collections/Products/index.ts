import { CollectionConfig } from 'payload'


export const Products: CollectionConfig = {
  slug: 'products',
  labels: {
    singular: 'Product',
    plural: 'Products',
  },
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true, // public can read products
    create: ({ req: { user } }) => Boolean(user), // only logged-in users can create
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'stock',
      type: 'number',
      required: true,
      min: 0,
      defaultValue: 0,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'Apparel', value: 'apparel' },
        { label: 'Accessories', value: 'accessories' },
        { label: 'Electronics', value: 'electronics' },
      ],
      required: false,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media', // links to a separate "media" collection
      required: true,
    },
  ],
}
