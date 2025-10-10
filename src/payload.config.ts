// storage-adapter-import-placeholder
import { s3Storage } from '@payloadcms/storage-s3'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Proyectos } from './collections/Proyectos'
import { CategoriasServicios } from './collections/CategoriasServicios'
import { CorreosNotificacion } from './collections/CorreosNotificacion'
import { Testimonios } from './collections/Testimonios'
import { ArticulosBlog } from './collections/ArticulosBlog'
import { es } from '@payloadcms/translations/languages/es'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      title: 'Impronta - Estudio de Arquitectura',
      description: 'Panel de administración del estudio de arquitectura e interiorismo',
    },
    dateFormat: 'dd/MM/yyyy HH:mm',
  },
  i18n: {
    fallbackLanguage: 'es',
    supportedLanguages: { es },
  },
  collections: [
    Users,
    Media,
    Proyectos,
    CategoriasServicios,
    CorreosNotificacion,
    Testimonios,
    ArticulosBlog,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    s3Storage({
      collections: {
        media: {
          prefix: 'media/',
        },
      },
      bucket: process.env.S3_BUCKET || '',
      config: {
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
        },
        region: process.env.S3_REGION || 'auto',
        endpoint: process.env.S3_ENDPOINT || '',
      },
      clientUploads: true,
    }),
    // storage-adapter-placeholder
  ],
})
