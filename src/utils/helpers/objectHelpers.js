export const updateObjectInArray = (items, itemProp, propName, newObj) => items.map((user) => {
        if (user[propName] === itemProp) {
            return { ...user, ...newObj }
        }
        return user
    })