import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Insertar categorías de servicios
  await db.execute(sql`
    INSERT INTO "categorias_servicios" ("nombre", "descripcion", "color_principal", "activa", "destacada") VALUES
    ('ILUMINACION', 'Servicios de iluminación arquitectónica y diseño de luces', '#FFD700', true, false),
    ('MOBILIARIO - EQUIPAMIENTO', 'Diseño y selección de mobiliario y equipamiento', '#8B4513', true, false),
    ('OPCIONES DE ENCUENTRO', 'Espacios de encuentro y áreas sociales', '#FF6B6B', true, false),
    ('SECTORIZACION DE AREAS PARA DISTINTAS', 'Diseño de sectores y zonificaciones', '#4ECDC4', true, false),
    ('Urbanizacion', 'Proyectos de urbanismo y espacios exteriores', '#2ECC71', true, false)
    ON CONFLICT DO NOTHING;
  `)

  // Insertar proyectos desde las tablas de Supabase
  await db.execute(sql`
    INSERT INTO "proyectos" ("titulo", "tipo", "descripcion", "ubicacion", "created_at", "updated_at") VALUES
    ('Casa 1', 'casa', '{"root": {"children": [{"type": "paragraph", "children": [{"text": "Proyecto de casa residencial"}]}]}}', 'Ubicación de casa 1', '2024-01-15 10:30:00+00', '2024-01-15 10:30:00+00'),
    ('Interiorismo 1', 'interiorismo', '{"root": {"children": [{"type": "paragraph", "children": [{"text": "Proyecto de interiorismo"}]}]}}', 'Ubicación de interiorismo 1', '2024-01-16 14:20:00+00', '2024-01-16 14:20:00+00'),
    ('Marcas 1', 'otro', '{"root": {"children": [{"type": "paragraph", "children": [{"text": "Proyecto de diseño de marcas"}]}]}}', 'Ubicación de marcas 1', '2024-01-17 09:15:00+00', '2024-01-17 09:15:00+00'),
    ('Paisajismo 1', 'paisajismo', '{"root": {"children": [{"type": "paragraph", "children": [{"text": "Proyecto de paisajismo"}]}]}}', 'Ubicación de paisajismo 1', '2024-01-18 16:45:00+00', '2024-01-18 16:45:00+00'),
    ('Trabajo 1', 'casa', '{"root": {"children": [{"type": "paragraph", "children": [{"text": "Descripción del trabajo 1"}]}]}}', 'Ubicación del trabajo 1', '2024-01-19 11:00:00+00', '2024-01-19 11:00:00+00'),
    ('Trabajo 2', 'interiorismo', '{"root": {"children": [{"type": "paragraph", "children": [{"text": "Descripción del trabajo 2"}]}]}}', 'Ubicación del trabajo 2', '2024-01-20 13:30:00+00', '2024-01-20 13:30:00+00'),
    ('Trabajo 3', 'paisajismo', '{"root": {"children": [{"type": "paragraph", "children": [{"text": "Descripción del trabajo 3"}]}]}}', 'Ubicación del trabajo 3', '2024-01-21 15:20:00+00', '2024-01-21 15:20:00+00'),
    ('Trabajo 4', 'marca', '{"root": {"children": [{"type": "paragraph", "children": [{"text": "Descripción del trabajo 4"}]}]}}', 'Ubicación del trabajo 4', '2024-01-22 08:45:00+00', '2024-01-22 08:45:00+00')
    ON CONFLICT DO NOTHING;
  `)

  // Insertar correo de notificación
  await db.execute(sql`
    INSERT INTO "correos_notificacion" ("nombre", "email", "tipo_notificacion", "activo") VALUES
    ('Notificaciones Impronta', 'improntaarquitectura@gmail.com', 'todas', true)
    ON CONFLICT DO NOTHING;
  `)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Eliminar los datos insertados
  await db.execute(sql`
    DELETE FROM "correos_notificacion" WHERE "email" = 'improntaarquitectura@gmail.com';
    DELETE FROM "proyectos" WHERE "titulo" IN ('Casa 1', 'Interiorismo 1', 'Marcas 1', 'Paisajismo 1', 'Trabajo 1', 'Trabajo 2', 'Trabajo 3', 'Trabajo 4');
    DELETE FROM "categorias_servicios" WHERE "nombre" IN ('ILUMINACION', 'MOBILIARIO - EQUIPAMIENTO', 'OPCIONES DE ENCUENTRO', 'SECTORIZACION DE AREAS PARA DISTINTAS', 'Urbanizacion');
  `)
}
