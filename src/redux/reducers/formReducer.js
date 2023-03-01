const formReducer = (state = {firstName: "", lastName: "", email: "", phone: "", percentDone: 0}, action) => {
    let stateCopy;
    switch (action.type) {
        case "setFormValue":
            stateCopy = state;
            console.log(action.payload);
            console.log(Object.keys(action.payload));
            if (action.payload.type === "FirstName") {
                stateCopy.firstName = action.payload.value;
                if (action.payload.percentDone > stateCopy.percentDone) {
                    stateCopy.percentDone = action.payload.percentDone;
                }
            } else if (action.payload.type === "LastName") {
                stateCopy.lastName = action.payload.value;
                if (action.payload.percentDone > stateCopy.percentDone) {
                    stateCopy.percentDone = action.payload.percentDone;
                }
            } else if (action.payload.type === "Email") {
                stateCopy.email = action.payload.value;
                if (action.payload.percentDone > stateCopy.percentDone) {
                    stateCopy.percentDone = action.payload.percentDone;
                }
            } else if (action.payload.type === "Phone") {
                stateCopy.phone = action.payload.value;
                if (action.payload.percentDone > stateCopy.percentDone) {
                    stateCopy.percentDone = action.payload.percentDone;
                }
            } else if (action.payload.type === "Review") {
                if (action.payload.percentDone > stateCopy.percentDone) {
                    stateCopy.percentDone = action.payload.percentDone;
                }
            }
            return stateCopy;
        default:
            return state;
    }
}

export default formReducer;