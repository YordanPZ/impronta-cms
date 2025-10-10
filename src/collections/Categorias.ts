import type { CollectionConfig } from 'payload'

export const Categorias: CollectionConfig = {
  slug: 'categorias',
  admin: {
    useAsTitle: 'nombre',
    description: 'Categorías general de los proyectos',
    group: 'Gestión de Proyectos',
  },
  labels: {
    singular: 'Categoría',
    plural: 'Categorías',
  },
  fields: [
    {
      name: 'nombre',
      type: 'text',
      required: true,
      label: 'Nombre de la Categoría',
      admin: {
        description: 'Nombre descriptivo de la categoría de proyecto',
      },
    },
    {
      name: 'descripcion',
      type: 'textarea',
      label: 'Descripción de la Categoría',
      admin: {
        description: 'Descripción detallada de los proyectos incluidos en esta categoría',
      },
    },
  ],
}
