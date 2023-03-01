

export const setFormValue = (formValue) => {
    return (dispatch) => {
        dispatch({
            type: "setFormValue",
            payload: formValue
        })
    }
}
