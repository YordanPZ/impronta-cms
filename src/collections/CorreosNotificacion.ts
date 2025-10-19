import type { CollectionConfig } from 'payload'

export const CorreosNotificacion: CollectionConfig = {
  slug: 'correos-notificacion',
  admin: {
    useAsTitle: 'nombre',
    description: 'Gestión de correos electrónicos para notificaciones del estudio',
    group: 'Configuración del Sistema',
  },
  labels: {
    singular: 'Correo de Notificación',
    plural: 'Correos de Notificación',
  },
    access: {
    read: () => true, // Acceso público de lectura
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => !!user,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: 'nombre',
      type: 'text',
      required: true,
      label: 'Nombre del Destinatario',
      admin: {
        description: 'Nombre completo o identificador del destinatario',
      },
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Correo Electrónico',
      admin: {
        description: 'Dirección de correo electrónico para recibir notificaciones',
      },
    },
  
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        // Validar formato de email
        if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
          throw new Error('El formato del correo electrónico no es válido')
        }
        return data
      },
    ],
  },
}