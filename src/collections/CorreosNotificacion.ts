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
    {
      name: 'tipo_notificacion',
      type: 'select',
      required: true,
      label: 'Tipo de Notificación',
      options: [
        { label: 'Nuevo Proyecto', value: 'nuevo_proyecto' },
        { label: 'Consulta de Cliente', value: 'consulta_cliente' },
        { label: 'Actualización de Proyecto', value: 'actualizacion_proyecto' },
        { label: 'Solicitud de Servicio', value: 'solicitud_servicio' },
        { label: 'Comentario en Blog', value: 'comentario_blog' },
        { label: 'Todas las Notificaciones', value: 'todas' },
      ],
      admin: {
        description: 'Tipo específico de notificación que recibirá este correo',
      },
    },
    {
      name: 'prioridad',
      type: 'select',
      label: 'Prioridad',
      options: [
        { label: 'Alta', value: 'alta' },
        { label: 'Media', value: 'media' },
        { label: 'Baja', value: 'baja' },
      ],
      defaultValue: 'media',
      admin: {
        description: 'Nivel de prioridad para las notificaciones',
      },
    },
    {
      name: 'activo',
      type: 'checkbox',
      label: 'Correo Activo',
      defaultValue: true,
      admin: {
        description: 'Indica si este correo debe recibir notificaciones',
      },
    },
    {
      name: 'descripcion',
      type: 'textarea',
      label: 'Descripción',
      admin: {
        description: 'Notas adicionales sobre el propósito de este correo',
      },
    },
    {
      name: 'telefono',
      type: 'text',
      label: 'Teléfono de Contacto',
      admin: {
        description: 'Número de teléfono opcional para contacto adicional',
      },
    },
    {
      name: 'departamento',
      type: 'text',
      label: 'Departamento/Área',
      admin: {
        description: 'Área o departamento al que pertenece este contacto',
      },
    },
    {
      name: 'idioma_preferido',
      type: 'select',
      label: 'Idioma Preferido',
      options: [
        { label: 'Español', value: 'es' },
        { label: 'Inglés', value: 'en' },
        { label: 'Portugués', value: 'pt' },
      ],
      defaultValue: 'es',
      admin: {
        description: 'Idioma preferido para recibir notificaciones',
      },
    },
    {
      name: 'horario_notificacion',
      type: 'group',
      label: 'Horario de Notificación',
      admin: {
        description: 'Configuración de horarios para recibir notificaciones',
      },
      fields: [
        {
          name: 'enviar_24_7',
          type: 'checkbox',
          label: 'Enviar las 24 horas',
          defaultValue: true,
        },
        {
          name: 'hora_inicio',
          type: 'text',
          label: 'Hora de Inicio',
          admin: {
            description: 'Formato 24h (ej: 09:00)',
            condition: (data) => !data.horario_notificacion?.enviar_24_7,
          },
        },
        {
          name: 'hora_fin',
          type: 'text',
          label: 'Hora de Fin',
          admin: {
            description: 'Formato 24h (ej: 18:00)',
            condition: (data) => !data.horario_notificacion?.enviar_24_7,
          },
        },
      ],
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