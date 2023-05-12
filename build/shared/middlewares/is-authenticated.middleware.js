"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticatedMiddleware = void 0;
const isAuthenticatedMiddleware = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    // redirect the user to the login route
    res.status(401).json({
        message: "Unauthorized!",
        success: false,
    });
};
exports.isAuthenticatedMiddleware = isAuthenticatedMiddleware;
