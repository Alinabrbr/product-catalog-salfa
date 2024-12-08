export const validateTitle = (title: string): string |null => {
  let regexp = new RegExp(/^(?![\d+_@.-]+$)[а-яА-ЯёЁa-zA-Z0-9+_@.-]*$/);

  return regexp.test(title) ? null : "Invalid Title"
}

export const validateImageURL = (imageURL: string): string|null => {
  let regexp = new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi);

  return regexp.test(imageURL) ? null : "Invalid ImageURL"
}