export const required = value => value ? undefined : `field is required`

export const maxLengthCreator = (maxLength) => (value) => value && value.length > maxLength ? `max length is ${maxLength} symbols` : undefined 
