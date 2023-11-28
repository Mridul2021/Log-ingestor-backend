const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema({
    level: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
        trim: true,
    },
    resourceId: {
        type: String,
        trim: true,
        index: true,
    },
    timestamp: {
        type: String,
        trim: true,
        index: true,
    },
    traceId: {
        type: String,
        trim: true,
        index: true,
    },
    spanId: {
        type: String,
        trim: true,
        index: true,
    },
    commit: {
        type: String,
        trim: true,
        index: true,
    },
    metadata: {
        parentResourceId: {
            type: String,
            trim: true,
            index: true,
        },
    },
});

const User = mongoose.model("user", usersSchema);
module.exports = User;
