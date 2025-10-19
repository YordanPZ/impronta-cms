import type { CollectionConfig } from 'payload'

export const PaginasConTabs: CollectionConfig = {
  slug: 'paginas-con-tabs',
  admin: {
    useAsTitle: 'titulo',
    description: 'Páginas usando Tabs - Secciones organizadas en pestañas',
    group: 'Contenido del Sitio',
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  labels: {
    singular: 'Página (Tabs)',
    plural: 'Páginas (Tabs)',
  },
  fields: [
    {
      name: 'titulo',
      type: 'text',
      required: true,
      label: 'Título de la Página',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      label: 'URL de la Página',
      admin: {
        description: 'Ej: home, about, services, contact',
      },
    },
    {
      type: 'tabs',
      tabs: [
        // Tab Hero Section
        {
          label: '🎯 Sección Hero',
          description: 'Banner principal de la página',
          fields: [
            {
              name: 'heroActivo',
              type: 'checkbox',
              label: 'Mostrar Sección Hero',
              defaultValue: true,
            },
            {
              name: 'heroTitulo',
              type: 'text',
              label: 'Título Principal',
              admin: {
                condition: (data) => data?.heroActivo,
              },
            },
            {
              name: 'heroSubtitulo',
              type: 'textarea',
              label: 'Subtítulo',
              admin: {
                condition: (data) => data?.heroActivo,
              },
            },
            {
              name: 'heroImagenFondo',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen de Fondo',
              admin: {
                condition: (data) => data?.heroActivo,
              },
            },
            {
              name: 'heroBotones',
              type: 'array',
              label: 'Botones de Acción',
              maxRows: 2,
              admin: {
                condition: (data) => data?.heroActivo,
              },
              fields: [
                {
                  name: 'texto',
                  type: 'text',
                  label: 'Texto del Botón',
                  required: true,
                },
                {
                  name: 'enlace',
                  type: 'text',
                  label: 'Enlace',
                  required: true,
                },
              ],
            },
          ],
        },
        // Tab About Section
        {
          label: '📖 Sección Acerca de',
          description: 'Información sobre la empresa/servicio',
          fields: [
            {
              name: 'aboutActivo',
              type: 'checkbox',
              label: 'Mostrar Sección Acerca de',
              defaultValue: false,
            },
            {
              name: 'aboutTitulo',
              type: 'text',
              label: 'Título de la Sección',
              admin: {
                condition: (data) => data?.aboutActivo,
              },
            },
            {
              name: 'aboutContenido',
              type: 'richText',
              label: 'Contenido',
              admin: {
                condition: (data) => data?.aboutActivo,
              },
            },
            {
              name: 'aboutImagenes',
              type: 'array',
              label: 'Imágenes',
              admin: {
                condition: (data) => data?.aboutActivo,
              },
              fields: [
                {
                  name: 'imagen',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'descripcion',
                  type: 'text',
                  label: 'Descripción',
                },
              ],
            },
            {
              name: 'aboutLayout',
              type: 'select',
              label: 'Layout de la Sección',
              options: [
                { label: 'Texto a la izquierda, imágenes a la derecha', value: 'text-left' },
                { label: 'Texto a la derecha, imágenes a la izquierda', value: 'text-right' },
                { label: 'Texto centrado, imágenes abajo', value: 'text-center' },
              ],
              defaultValue: 'text-left',
              admin: {
                condition: (data) => data?.aboutActivo,
              },
            },
          ],
        },
        // Tab Services Section
        {
          label: '🛠️ Sección Servicios',
          description: 'Lista de servicios ofrecidos',
          fields: [
            {
              name: 'serviciosActivo',
              type: 'checkbox',
              label: 'Mostrar Sección Servicios',
              defaultValue: false,
            },
            {
              name: 'serviciosTitulo',
              type: 'text',
              label: 'Título de la Sección',
              admin: {
                condition: (data) => data?.serviciosActivo,
              },
            },
            {
              name: 'serviciosDescripcion',
              type: 'textarea',
              label: 'Descripción',
              admin: {
                condition: (data) => data?.serviciosActivo,
              },
            },
            {
              name: 'serviciosLista',
              type: 'array',
              label: 'Lista de Servicios',
              admin: {
                condition: (data) => data?.serviciosActivo,
              },
              fields: [
                {
                  name: 'nombre',
                  type: 'text',
                  label: 'Nombre del Servicio',
                  required: true,
                },
                {
                  name: 'descripcion',
                  type: 'textarea',
                  label: 'Descripción',
                },
                {
                  name: 'icono',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Icono/Imagen',
                },
                {
                  name: 'precio',
                  type: 'text',
                  label: 'Precio (opcional)',
                },
                {
                  name: 'enlace',
                  type: 'text',
                  label: 'Enlace (opcional)',
                },
              ],
            },
          ],
        },
        // Tab Gallery Section
        {
          label: '🖼️ Sección Galería',
          description: 'Galería de imágenes/proyectos',
          fields: [
            {
              name: 'galeriaActivo',
              type: 'checkbox',
              label: 'Mostrar Sección Galería',
              defaultValue: false,
            },
            {
              name: 'galeriaTitulo',
              type: 'text',
              label: 'Título de la Galería',
              admin: {
                condition: (data) => data?.galeriaActivo,
              },
            },
            {
              name: 'galeriaDescripcion',
              type: 'textarea',
              label: 'Descripción',
              admin: {
                condition: (data) => data?.galeriaActivo,
              },
            },
            {
              name: 'galeriaImagenes',
              type: 'array',
              label: 'Imágenes de la Galería',
              admin: {
                condition: (data) => data?.galeriaActivo,
              },
              fields: [
                {
                  name: 'imagen',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
                {
                  name: 'titulo',
                  type: 'text',
                  label: 'Título',
                },
                {
                  name: 'descripcion',
                  type: 'text',
                  label: 'Descripción',
                },
                {
                  name: 'categoria',
                  type: 'text',
                  label: 'Categoría',
                },
              ],
            },
            {
              name: 'galeriaColumnas',
              type: 'select',
              label: 'Número de Columnas',
              options: [
                { label: '2 Columnas', value: '2' },
                { label: '3 Columnas', value: '3' },
                { label: '4 Columnas', value: '4' },
              ],
              defaultValue: '3',
              admin: {
                condition: (data) => data?.galeriaActivo,
              },
            },
          ],
        },
        // Tab Contact Section
        {
          label: '📞 Sección Contacto',
          description: 'Información de contacto y formulario',
          fields: [
            {
              name: 'contactoActivo',
              type: 'checkbox',
              label: 'Mostrar Sección Contacto',
              defaultValue: false,
            },
            {
              name: 'contactoTitulo',
              type: 'text',
              label: 'Título de la Sección',
              admin: {
                condition: (data) => data?.contactoActivo,
              },
            },
            {
              name: 'contactoDescripcion',
              type: 'textarea',
              label: 'Descripción',
              admin: {
                condition: (data) => data?.contactoActivo,
              },
            },
            {
              name: 'contactoInfo',
              type: 'group',
              label: 'Información de Contacto',
              admin: {
                condition: (data) => data?.contactoActivo,
              },
              fields: [
                {
                  name: 'telefono',
                  type: 'text',
                  label: 'Teléfono',
                },
                {
                  name: 'email',
                  type: 'email',
                  label: 'Email',
                },
                {
                  name: 'direccion',
                  type: 'textarea',
                  label: 'Dirección',
                },
                {
                  name: 'horarios',
                  type: 'textarea',
                  label: 'Horarios de Atención',
                },
              ],
            },
            {
              name: 'mostrarFormulario',
              type: 'checkbox',
              label: 'Mostrar Formulario de Contacto',
              defaultValue: true,
              admin: {
                condition: (data) => data?.contactoActivo,
              },
            },
          ],
        },
        // Tab SEO
        {
          label: '🔍 SEO',
          description: 'Configuración de SEO para esta página',
          fields: [
            {
              name: 'seoTitle',
              type: 'text',
              label: 'Meta Title',
              admin: {
                description: 'Título que aparece en Google (máx. 60 caracteres)',
              },
            },
            {
              name: 'seoDescription',
              type: 'textarea',
              label: 'Meta Description',
              admin: {
                description: 'Descripción que aparece en Google (máx. 160 caracteres)',
              },
            },
            {
              name: 'seoKeywords',
              type: 'text',
              label: 'Palabras Clave',
              admin: {
                description: 'Separadas por comas',
              },
            },
            {
              name: 'seoImage',
              type: 'upload',
              relationTo: 'media',
              label: 'Imagen para Redes Sociales',
              admin: {
                description: 'Imagen que aparece cuando se comparte en redes sociales',
              },
            },
          ],
        },
      ],
    },
  ],
}