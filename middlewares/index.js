// {
//     firstName: "xyz @",
//     lastName: "abc .",
//     email: "exaple@gmail.com",
//     size: 4
//   }
const validateBody = (req, res, next) => {
    const incomingData = req.body;

    if(!incomingData.name) {
        return res.send("First Name is required")
    }

    if(incomingData.name) {
        // do not include special characters
        // #, $, %, ^, &, *, (, )

        const specialCharacters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]

        for (const element of specialCharacters) {
            if (incomingData.name.includes(element)) {
                return res.send("First Name cannot include special characters")
            }
        }
    }


    if(!incomingData.email) {
        return res.send("Email is required")
    }

    if(!incomingData.password) {
        return res.send("Password is required")
    }

    if(!incomingData.mobileNumber) {
        return res.send("Mobile Number is required")
    }

    next()
}

const validateUpdateBody = (req, res, next) => {
    const incomingData = req.body;

    if (incomingData.email) {
        return res.send("Email cannot be updated")
    }

    next()
}

const validateLoginBody = (req, res, next) => {
    const incomingData = req.body;

    if(!incomingData.email) {
        return res.send("Email is required")
    }

    if(!incomingData.password) {
        return res.send("Password is required")
    }

    next()
}

module.exports = { validateBody, validateUpdateBody, validateLoginBody }