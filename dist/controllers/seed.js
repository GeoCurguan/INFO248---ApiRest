"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadData = void 0;
const loadData = (req, res) => {
    try {
        res.json({
            msg: "cargado correctamente",
            ok: true
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.loadData = loadData;
//# sourceMappingURL=seed.js.map