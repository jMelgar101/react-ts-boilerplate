export const paths = {
  HOME: '/',
  CRUD: '/crud',
} as const;

export type Path = typeof paths[keyof typeof paths];

