import type { CollectionConfig } from 'payload'

export const CategoriasServicios: CollectionConfig = {
  slug: 'categorias-servicios',
  admin: {
    useAsTitle: 'nombre',
    description: 'Categorías de servicios de arquitectura e interiorismo',
    group: 'Configuración de Servicios',
  },
  labels: {
    singular: 'Categoría de Servicio',
    plural: 'Categorías de Servicios',
  },
  fields: [
    {
      name: 'nombre',
      type: 'text',
      required: true,
      label: 'Nombre de la Categoría',
      admin: {
        description: 'Nombre descriptivo de la categoría de servicio',
      },
    },
    {
      name: 'descripcion',
      type: 'textarea',
      label: 'Descripción de la Categoría',
      admin: {
        description: 'Descripción detallada de los servicios incluidos en esta categoría',
      },
    },
    {
      name: 'icono',
      type: 'upload',
      relationTo: 'media',
      label: 'Icono de la Categoría',
      admin: {
        description: 'Icono representativo de la categoría de servicio',
      },
    },
    {
      name: 'color_principal',
      type: 'text',
      label: 'Color Principal',
      admin: {
        description: 'Código hexadecimal del color principal (ej: #FF6B6B)',
      },
    },
    {
      name: 'servicios',
      type: 'array',
      label: 'Servicios Específicos',
      admin: {
        description: 'Lista de servicios específicos dentro de esta categoría',
      },
      fields: [
        {
          name: 'servicio',
          type: 'text',
          required: true,
          label: 'Nombre del Servicio',
        },
        {
          name: 'descripcion_servicio',
          type: 'textarea',
          label: 'Descripción del Servicio',
        },
        {
          name: 'duracion_estimada',
          type: 'text',
          label: 'Duración Estimada',
          admin: {
            description: 'Tiempo estimado para completar este servicio',
          },
        },
        {
          name: 'precio_desde',
          type: 'number',
          label: 'Precio Desde',
          admin: {
            description: 'Precio inicial del servicio (en la moneda local)',
          },
        },
      ],
    },
    {
      name: 'proceso_trabajo',
      type: 'array',
      label: 'Proceso de Trabajo',
      admin: {
        description: 'Etapas del proceso de trabajo para esta categoría',
      },
      fields: [
        {
          name: 'etapa',
          type: 'text',
          required: true,
          label: 'Nombre de la Etapa',
        },
        {
          name: 'descripcion_etapa',
          type: 'textarea',
          label: 'Descripción de la Etapa',
        },
        {
          name: 'orden',
          type: 'number',
          label: 'Orden',
          admin: {
            description: 'Número de orden en el proceso',
          },
        },
      ],
    },
    {
      name: 'activa',
      type: 'checkbox',
      label: 'Categoría Activa',
      defaultValue: true,
      admin: {
        description: 'Indica si esta categoría de servicio está disponible',
      },
    },
    {
      name: 'destacada',
      type: 'checkbox',
      label: 'Categoría Destacada',
      defaultValue: false,
      admin: {
        description: 'Marcar como categoría destacada en la página principal',
      },
    },
  ],
}