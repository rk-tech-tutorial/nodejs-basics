// {
//     firstName: "xyz @",
//     lastName: "abc .",
//     email: "exaple@gmail.com",
//     size: 4
//   }
const validateBody = (req, res, next) => {
    const incomingData = req.body;

    if(!incomingData.firstName) {
        return res.send("First Name is required")
    }

    if(incomingData.firstName) {
        // do not include special characters
        // #, $, %, ^, &, *, (, )

        const specialCharacters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]

        for (const element of specialCharacters) {
            if (incomingData.firstName.includes(element)) {
                return res.send("First Name cannot include special characters")
            }
        }
    }

    if(!incomingData.lastName) {
        return res.send("Last Name is required")
    }

    if(incomingData.lastName) {
        // do not include special characters
        // #, $, %, ^, &, *, (, )

        const specialCharacters = ["#", "$", "%", "^", "&", "*", "(", ")", "@"]

        for (const element of specialCharacters) {
            if (incomingData.lastName.includes(element)) {
                return res.send("Last Name cannot include special characters")
            }
        }
    }

    if(!incomingData.email) {
        return res.send("Email is required")
    }

    if(!incomingData.size) {
        return res.send("Size is required")
    }

    if(incomingData.size) {
        if (incomingData.size < 1 || incomingData.size > 5) {
            return res.send("Size must be between 1 and 5")
        }
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

module.exports = { validateBody, validateUpdateBody }