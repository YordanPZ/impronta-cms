import type { CollectionConfig } from 'payload'

export const Testimonios: CollectionConfig = {
  slug: 'testimonios',
  admin: {
    useAsTitle: 'nombre_cliente',
    description: 'Gestión de testimonios y reseñas de clientes satisfechos',
    group: 'Contenido del Sitio',
  },
  labels: {
    singular: 'Testimonio',
    plural: 'Testimonios',
  },
  fields: [
    {
      name: 'nombre_cliente',
      type: 'text',
      required: true,
      label: 'Nombre del Cliente',
      admin: {
        description: 'Nombre completo del cliente que brinda el testimonio',
      },
    },
    {
      name: 'empresa',
      type: 'text',
      label: 'Empresa o Cargo',
      admin: {
        description: 'Nombre de la empresa o cargo del cliente (opcional)',
      },
    },
    {
      name: 'testimonio',
      type: 'textarea',
      required: true,
      label: 'Testimonio',
      admin: {
        description: 'Texto completo del testimonio del cliente',
      },
    },
    {
      name: 'proyecto_relacionado',
      type: 'relationship',
      relationTo: 'proyectos',
      label: 'Proyecto Relacionado',
      admin: {
        description: 'Proyecto específico al que se refiere este testimonio',
      },
    },
    {
      name: 'tipo_servicio',
      type: 'select',
      label: 'Tipo de Servicio',
      options: [
        { label: 'Diseño de Casa', value: 'casa' },
        { label: 'Interiorismo', value: 'interiorismo' },
        { label: 'Paisajismo', value: 'paisajismo' },
        { label: 'Diseño de Marca', value: 'marca' },
        { label: 'Renovación', value: 'renovacion' },
        { label: 'Consultoría', value: 'consultoria' },
        { label: 'Otros', value: 'otros' },
      ],
      admin: {
        description: 'Tipo de servicio que recibió el cliente',
      },
    },
    {
      name: 'calificacion',
      type: 'select',
      label: 'Calificación',
      options: [
        { label: '5 Estrellas - Excelente', value: '5' },
        { label: '4 Estrellas - Muy Bueno', value: '4' },
        { label: '3 Estrellas - Bueno', value: '3' },
        { label: '2 Estrellas - Regular', value: '2' },
        { label: '1 Estrella - Malo', value: '1' },
      ],
      admin: {
        description: 'Calificación del servicio recibido',
      },
    },
    {
      name: 'foto_cliente',
      type: 'upload',
      relationTo: 'media',
      label: 'Foto del Cliente',
      admin: {
        description: 'Fotografía del cliente (opcional, para mostrar en el sitio)',
      },
    },
    {
      name: 'fecha_testimonio',
      type: 'date',
      label: 'Fecha del Testimonio',
      admin: {
        description: 'Fecha en que se recibió el testimonio',
      },
    },
    {
      name: 'publicado',
      type: 'checkbox',
      label: 'Publicado',
      defaultValue: false,
      admin: {
        description: 'Indica si este testimonio debe mostrarse públicamente',
      },
    },
    {
      name: 'destacado',
      type: 'checkbox',
      label: 'Testimonio Destacado',
      defaultValue: false,
      admin: {
        description: 'Marcar como testimonio destacado en la página principal',
      },
    },
    {
      name: 'correo_cliente',
      type: 'email',
      label: 'Correo del Cliente',
      admin: {
        description: 'Correo electrónico del cliente (no se mostrará públicamente)',
      },
    },
    {
      name: 'telefono_cliente',
      type: 'text',
      label: 'Teléfono del Cliente',
      admin: {
        description: 'Número de teléfono del cliente (no se mostrará públicamente)',
      },
    },
    {
      name: 'respuesta_estudio',
      type: 'textarea',
      label: 'Respuesta del Estudio',
      admin: {
        description: 'Respuesta oficial del estudio al testimonio (opcional)',
      },
    },
    {
      name: 'etiquetas',
      type: 'array',
      label: 'Etiquetas',
      admin: {
        description: 'Etiquetas para agrupar y filtrar testimonios',
      },
      fields: [
        {
          name: 'etiqueta',
          type: 'text',
          required: true,
          label: 'Etiqueta',
        },
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Validar que al menos un campo de contacto esté presente
        if (!data.correo_cliente && !data.telefono_cliente) {
          throw new Error('Debe proporcionar al menos un medio de contacto (correo o teléfono)')
        }
        return data
      },
    ],
  },
}