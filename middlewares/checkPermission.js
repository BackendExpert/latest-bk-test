function checkPermission(permissionName) {
    return (req, res, next) => {
        if (!req.user || !req.user.role)
            return res.status(401).json({ error: "Unauthorized" });

        const hasPermission = req.user.role.permissions.some(
            (perm) => perm.name === permissionName
        );

        if (!hasPermission) return res.status(403).json({ error: "Forbidden" });

        next();
    };
}

module.exports = checkPermission;
