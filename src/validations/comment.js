import { isEmpty } from "../helpers/common";

const commentValidation = (payload) => {
    try {
        let errors = {};
        if (isEmpty(payload.comment)) {
            errors.comment = "Comment is required";
        }

        if (isEmpty(payload.display_name)) {
            errors.display_name = 'Name is required';
        }

        return { errors, isValid: isEmpty(errors) }
    } catch (e) {
        return { errors: e, isValid: false }
    }
}

export {
    commentValidation
}