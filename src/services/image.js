const cloudinaryUsername = 'dg2zkyrrf';
const cloudinaryUrl = `http://res.cloudinary.com/${cloudinaryUsername}/image/fetch`;

export const getImageUrl = (url, options = []) => {
  return `${cloudinaryUrl}/${options.join(',')}/${url}`;
};
