import * as migration_20251009_174923_migracion_datos_supabase from './20251009_174923_migracion_datos_supabase';
import * as migration_20251009_175155_insertar_datos_supabase from './20251009_175155_insertar_datos_supabase';

export const migrations = [
  {
    up: migration_20251009_174923_migracion_datos_supabase.up,
    down: migration_20251009_174923_migracion_datos_supabase.down,
    name: '20251009_174923_migracion_datos_supabase',
  },
  {
    up: migration_20251009_175155_insertar_datos_supabase.up,
    down: migration_20251009_175155_insertar_datos_supabase.down,
    name: '20251009_175155_insertar_datos_supabase'
  },
];
