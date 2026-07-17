const isProd = process.env.NODE_ENV === 'production';
const repoName = 'portfolio';

export const getAssetPath = (path: string): string => {
    if (!path.startsWith('/')) return path;
    return isProd ? `/${repoName}${path}` : path;
};
