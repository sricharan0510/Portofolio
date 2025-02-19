/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly SERVICE_ID: string
    readonly TEMPLATE_ID: string
    readonly PUBLIC_KEY: string
    // more env variables...
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }