const axios = require("axios");

const baseURL = "https://connect.mailerlite.com/";

exports.getAllGroups = async () => {
    try {
        let allGroups;

        await axios.get(`${baseURL}api/groups`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.MAILERLITE_API}`,
                'Accept': 'application/json'
            }
        }).then(response => {
            allGroups = response.data.data;
        });

        return allGroups;
    } catch (error) {
        console.log("getAllSubscribers", error);
        return null;
    }
}

exports.getSubscribersBelongingToGroup = async (groupId) => {
    try {
        let allSubs;

        await axios.get(`${baseURL}api/groups/${groupId}/subscribers`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.MAILERLITE_API}`,
                'Accept': 'application/json'
            }
        }).then(response => {
            allSubs = response.data.data
        });

        return allSubs;
    } catch (error) {
        console.log("getSubscribersBelongingToGroup", error);
        return null;
    }
}

exports.addSubscriberToGroup = async (userId, groupId) => {
    try {
        let addedSub;

        await axios.post(`${baseURL}api/subscribers/${userId}/groups/${groupId}`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.MAILERLITE_API}`,
                'Accept': 'application/json'
            }
        }).then(response => {
            addedSub = response.data.data
        });

        return addedSub;
    } catch (error) {
        console.log("getSubscribersBelongingToGroup", error);
        return null;
    }
}

exports.getOneSubscriberByEmail = async (email) => {
    try {
        let subs;

        await axios.get(`${baseURL}api/subscribers/${email}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.MAILERLITE_API}`,
                'Accept': 'application/json'
            }
        }).then(response => {
            subs = response.data.data
        });

        return subs;
    } catch (error) {
        console.log("getOneSubscriberByEmail", error);
        return null;
    }
}

exports.getAllSubscribers = async () => {
    try {
        let allSubs;

        await axios.get(`${baseURL}api/subscribers`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.MAILERLITE_API}`,
                'Accept': 'application/json'
            }
        }).then(response => {
            allSubs = response.data.data
        });

        return allSubs;
    } catch (error) {
        console.log("getAllSubscribers", error);
        return null;
    }
}

exports.addNewSubscriber = async (user) => {
    try {
        let newSub;

        await axios.post(`${baseURL}api/subscribers`, user, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.MAILERLITE_API}`,
                'Accept': 'application/json'
            }
        }).then(response => {
            newSub = response.data.data
        });

        return newSub;
    } catch (error) {
        console.log("addNewSubscriber", error);
        return null;
    }
}