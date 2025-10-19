import type { CollectionConfig } from 'payload'

export const Proyectos: CollectionConfig = {
  slug: 'proyectos',
  admin: {
    useAsTitle: 'titulo',
    description: 'Gestión completa de proyectos de arquitectura, interiorismo y paisajismo',
    group: 'Gestión de Proyectos',
  },
  access: {
    read: () => true, // Acceso público de lectura
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  labels: {
    singular: 'Proyecto',
    plural: 'Proyectos',
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      required: true,
      label: 'Título del Proyecto',
      admin: {
        description: 'Nombre descriptivo del proyecto',
      },
    },
    {
      name: 'tipo',
      type: 'relationship',
      relationTo: 'categorias',
      required: true,
      label: 'Tipo de Proyecto',
      admin: {
        description: 'Categoría principal del proyecto',
      },
    },
    {
      name: 'descripcion',
      type: 'richText',
      label: 'Descripción del Proyecto',
      admin: {
        description: 'Descripción detallada del proyecto, objetivos y características',
      },
    },
    {
      name: 'ubicacion',
      type: 'text',
      label: 'Ubicación',
      admin: {
        description: 'Dirección o ubicación del proyecto',
      },
    },
    {
      name: 'estado',
      type: 'select',
      label: 'Estado del Proyecto',
      options: [
        { label: 'En Desarrollo', value: 'desarrollo' },
        { label: 'Finalizado', value: 'finalizado' },
        { label: 'En Construcción', value: 'construccion' },
        { label: 'Diseño Aprobado', value: 'aprobado' },
      ],
      defaultValue: 'desarrollo',
      admin: {
        description: 'Estado actual del proyecto',
      },
    },
    {
      name: 'destacado',
      type: 'checkbox',
      label: 'Mostrar en Página de Proyectos',
      defaultValue: false,
      admin: {
        description: 'Marcar para exhibir este proyecto en la página de proyectos del sitio web',
        position: 'sidebar',
      },
    },
    {
      name: 'imagenes',
      type: 'array',
      label: 'Galería de Imágenes',
        labels: {
    singular: 'Imagen',
    plural: 'Imagenes',
  },
      admin: {
        description: 'Colección de imágenes del proyecto',
      },
      fields: [
        {
          name: 'imagen',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen',
        }
      ],
    },
    {
      name: 'caracteristicas',
      type: 'array',
      label: 'Características Principales',
      admin: {
        description: 'Lista de características destacadas del proyecto',
      },
      fields: [
        {
          name: 'caracteristica',
          type: 'text',
          required: true,
          label: 'Característica',
        },
      ],
    },
  ],
}