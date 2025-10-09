import type { CollectionConfig } from 'payload'

export const ArticulosBlog: CollectionConfig = {
  slug: 'articulos-blog',
  admin: {
    useAsTitle: 'titulo',
    description: 'Gestión de artículos y publicaciones para el blog del estudio',
    group: 'Contenido del Sitio',
    defaultColumns: ['titulo', 'autor', 'fecha_publicacion', 'estado', 'categoria'],
  },
  labels: {
    singular: 'Artículo del Blog',
    plural: 'Artículos del Blog',
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      required: true,
      label: 'Título del Artículo',
      admin: {
        description: 'Título atractivo y descriptivo del artículo',
      },
    },
    {
      name: 'slug',
      type: 'text',
      label: 'URL Amigable',
      admin: {
        description: 'URL amigable para el artículo (se genera automáticamente)',
      },
      hooks: {
        beforeChange: [
          ({ data, operation }) => {
            if (operation === 'create' || operation === 'update') {
              if (data.titulo && !data.slug) {
                data.slug = data.titulo
                  .toLowerCase()
                  .replace(/[^a-z0-9áéíóúñü]+/g, '-')
                  .replace(/^-+|-+$/g, '')
              }
            }
            return data
          },
        ],
      },
    },
    {
      name: 'resumen',
      type: 'textarea',
      required: true,
      label: 'Resumen del Artículo',
      admin: {
        description: 'Breve resumen del contenido del artículo (máximo 250 caracteres)',
      },
    },
    {
      name: 'contenido',
      type: 'richText',
      required: true,
      label: 'Contenido del Artículo',
      admin: {
        description: 'Contenido completo y detallado del artículo',
      },
    },
    {
      name: 'imagen_destacada',
      type: 'upload',
      relationTo: 'media',
      label: 'Imagen Destacada',
      admin: {
        description: 'Imagen principal que representa el artículo',
      },
    },
    {
      name: 'autor',
      type: 'text',
      required: true,
      label: 'Autor del Artículo',
      admin: {
        description: 'Nombre del arquitecto o diseñador que escribió el artículo',
      },
    },
    {
      name: 'categoria',
      type: 'select',
      required: true,
      label: 'Categoría',
      options: [
        { label: 'Arquitectura Residencial', value: 'arquitectura-residencial' },
        { label: 'Interiorismo', value: 'interiorismo' },
        { label: 'Paisajismo', value: 'paisajismo' },
        { label: 'Diseño de Marcas', value: 'diseno-marcas' },
        { label: 'Tendencias', value: 'tendencias' },
        { label: 'Materiales', value: 'materiales' },
        { label: 'Sostenibilidad', value: 'sostenibilidad' },
        { label: 'Proyectos Destacados', value: 'proyectos-destacados' },
        { label: 'Consejos y Tips', value: 'consejos-tips' },
        { label: 'Eventos y Noticias', value: 'eventos-noticias' },
      ],
      admin: {
        description: 'Categoría temática del artículo',
      },
    },
    {
      name: 'etiquetas',
      type: 'array',
      label: 'Etiquetas',
      admin: {
        description: 'Etiquetas para ayudar a los lectores a encontrar contenido relacionado',
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
    {
      name: 'fecha_publicacion',
      type: 'date',
      required: true,
      label: 'Fecha de Publicación',
      admin: {
        description: 'Fecha en que se publicará el artículo',
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'estado',
      type: 'select',
      label: 'Estado del Artículo',
      options: [
        { label: 'Borrador', value: 'borrador' },
        { label: 'Revisión', value: 'revision' },
        { label: 'Publicado', value: 'publicado' },
        { label: 'Archivado', value: 'archivado' },
      ],
      defaultValue: 'borrador',
      admin: {
        description: 'Estado actual del artículo',
      },
    },
    {
      name: 'destacado',
      type: 'checkbox',
      label: 'Artículo Destacado',
      defaultValue: false,
      admin: {
        description: 'Marcar como artículo destacado en la página principal del blog',
      },
    },
    {
      name: 'lectura_estimada',
      type: 'number',
      label: 'Tiempo de Lectura Estimado',
      admin: {
        description: 'Tiempo estimado de lectura en minutos (se calcula automáticamente si se deja vacío)',
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            if (!data.lectura_estimada && data.contenido) {
              // Calcular tiempo de lectura basado en el contenido
              const palabrasPorMinuto = 200
              const texto = JSON.stringify(data.contenido)
              const palabras = texto.split(/\s+/).length
              data.lectura_estimada = Math.ceil(palabras / palabrasPorMinuto)
            }
            return data
          },
        ],
      },
    },
    {
      name: 'meta_descripcion',
      type: 'textarea',
      label: 'Meta Descripción',
      admin: {
        description: 'Descripción corta para SEO (máximo 160 caracteres)',
      },
    },
    {
      name: 'palabras_clave',
      type: 'array',
      label: 'Palabras Clave SEO',
      admin: {
        description: 'Palabras clave para optimización de motores de búsqueda',
      },
      fields: [
        {
          name: 'palabra_clave',
          type: 'text',
          required: true,
          label: 'Palabra Clave',
        },
      ],
    },
    {
      name: 'imagenes_galeria',
      type: 'array',
      label: 'Galería de Imágenes',
      admin: {
        description: 'Imágenes adicionales para ilustrar el contenido del artículo',
      },
      fields: [
        {
          name: 'imagen',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Imagen',
        },
        {
          name: 'pie_de_foto',
          type: 'text',
          label: 'Pie de Foto',
        },
      ],
    },
    {
      name: 'permitir_comentarios',
      type: 'checkbox',
      label: 'Permitir Comentarios',
      defaultValue: true,
      admin: {
        description: 'Permitir que los lectores dejen comentarios en este artículo',
      },
    },
    {
      name: 'visitas',
      type: 'number',
      label: 'Número de Visitas',
      defaultValue: 0,
      admin: {
        description: 'Contador de visitas al artículo',
        readOnly: true,
      },
    },
  ],
}