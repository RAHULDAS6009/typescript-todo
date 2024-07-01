"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = require("../db/user");
const router = (0, express_1.Router)();
router.get("/allusers", (req, res) => {
    res.json([
        {
            id: 1,
            name: "John Doe",
        },
        {
            id: 2,
            name: "Jane Smith",
        },
    ]);
});
router.post("/signup", (req, res) => {
    try {
        const { username, password, firstName, lastName } = req.body;
        const exsistingUser = (0, user_1.getUser)(username);
        if (exsistingUser) {
            res.json({
                msg: "user already exsisted",
            });
        }
        (0, user_1.createUser)(username, password, firstName, lastName);
    }
    catch (error) {
        console.log(error);
        res.json({ msg: "Internal Error" });
    }
});
router.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const exsistingUser = yield (0, user_1.getUser)(username);
        if (!exsistingUser) {
            res.json({
                msg: "User is not registered/does not exsist"
            });
        }
        console.log("hello world 1");
        console.log(exsistingUser);
        console.log(password);
        const macthPassword = exsistingUser.password === password;
        console.log(macthPassword);
        if (!macthPassword) {
            res.json({
                msg: "Given user inputs is wrong"
            });
        }
        res.json({ msg: "Welcome again" });
    }
    catch (error) {
        console.log(error);
        res.json({ msg: "Internal Error" });
    }
}));
router.get("/profile", (req, res) => { });
router.put("/profile", (req, res) => { });
exports.default = router;
