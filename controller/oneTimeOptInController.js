const utils = require("../helpers/utils.js");

// EMAIL ONLY "webi_partenaires"
exports.oneTimeOptIn = async (req, res) => {
    try {
        let { email } = req.params;
        let oneUser;
        let allUsersInGroup;

        // Get all groups
        let allGroups = await utils.getAllGroups()
        let groupId = allGroups.length > 0 ? allGroups[0].id : null
    
        if (groupId) {
            // Find user via email
            oneUser = await utils.getOneSubscriberByEmail(email);
            
            // User already exists in DB
            if (oneUser) {
                // Find if user is already in group
                allUsersInGroup = await utils.getSubscribersBelongingToGroup(groupId);

                // Add user to group
                await utils.addSubscriberToGroup(oneUser.id, groupId);
                console.log("1")
                res.writeHead(307, {
                    Location: `https://crypto-bulot.com/confirmation-dinscription/`
                }).end();
            } 

            // User does not exist in the DB yet
            else {
                // Add new user to DB and assign to group
                let newUser = await utils.addNewSubscriber({
                    email,
                    groups: [groupId]
                })

                if (newUser) {
                    console.log("3")
                    res.writeHead(307, {
                        Location: `https://crypto-bulot.com/confirmation-dinscription/`
                    }).end();
                } else {
                    console.log("4")
                    res.status(400).send("ERROR DURING USER CREATION AND ADDITION TO GROUP");
                }
            }
        } else {
            res.status(404).send("GROUP NOT FOUND");
        }
    } catch (error) {
        res.status(400).send("Error in oneTimeOptIn", error);
    }
}

// EMAIL ONLY "webi_partenaires_mardi"
exports.oneTimeOptInMardi = async (req, res) => {
    try {
        let { email } = req.params;
        let oneUser;
        let allUsersInGroup;

        // Get all groups
        let allGroups = await utils.getAllGroupsMardi()
        let groupId = allGroups.length > 0 ? allGroups[0].id : null
    
        if (groupId) {
            // Find user via email
            oneUser = await utils.getOneSubscriberByEmail(email);
            
            // User already exists in DB
            if (oneUser) {
                // Find if user is already in group
                allUsersInGroup = await utils.getSubscribersBelongingToGroup(groupId);

                // Add user to group
                await utils.addSubscriberToGroup(oneUser.id, groupId);
                console.log("1")
                res.writeHead(307, {
                    Location: `https://crypto-bulot.com/confirmation-dinscription/`
                }).end();
            } 

            // User does not exist in the DB yet
            else {
                // Add new user to DB and assign to group
                let newUser = await utils.addNewSubscriber({
                    email,
                    groups: [groupId]
                })

                if (newUser) {
                    console.log("3")
                    res.writeHead(307, {
                        Location: `https://crypto-bulot.com/confirmation-dinscription/`
                    }).end();
                } else {
                    console.log("4")
                    res.status(400).send("ERROR DURING USER CREATION AND ADDITION TO GROUP");
                }
            }
        } else {
            res.status(404).send("GROUP NOT FOUND");
        }
    } catch (error) {
        res.status(400).send("Error in oneTimeOptIn", error);
    }
}

// EMAIL + FIRST NAME
exports.oneTimeOptInWithName = async (req, res) => {
    try {
        let { email, name } = req.params;
        let oneUser;
        let allUsersInGroup;

        // Get all groups
        let allGroups = await utils.getAllGroups()
        let groupId = allGroups.length > 0 ? allGroups[0].id : null
    
        if (groupId) {
            // Find user via email
            oneUser = await utils.getOneSubscriberByEmail(email);
            
            // User already exists in DB
            if (oneUser) {
                // Find if user is already in group
                allUsersInGroup = await utils.getSubscribersBelongingToGroup(groupId);

                // Add user to group
                await utils.addSubscriberToGroup(oneUser.id, groupId);
                console.log("1")
                res.writeHead(307, {
                    Location: `https://crypto-bulot.com/confirmation-dinscription/`
                }).end();
            } 

            // User does not exist in the DB yet
            else {
                // Add new user to DB and assign to group
                let newUser = await utils.addNewSubscriber({
                    email,
                    fields: {
                        name: name,
                    },
                    groups: [groupId]
                })

                if (newUser) {
                    console.log("3")
                    res.writeHead(307, {
                        Location: `https://crypto-bulot.com/confirmation-dinscription/`
                    }).end();
                } else {
                    console.log("4")
                    res.status(400).send("ERROR DURING USER CREATION AND ADDITION TO GROUP");
                }
            }
        } else {
            res.status(404).send("GROUP NOT FOUND");
        }
    } catch (error) {
        res.status(400).send("Error in oneTimeOptIn", error);
    }
}