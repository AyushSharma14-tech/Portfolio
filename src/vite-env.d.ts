/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PATH?: string;
  readonly VITE_ENABLE_HERO_3D?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
