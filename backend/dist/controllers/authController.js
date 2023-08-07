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
exports.getAccessToken = void 0;
function getAccessToken(clientId, code) {
    return __awaiter(this, void 0, void 0, function* () {
        const verifier = window.localStorage.getItem("verifier");
        const params = new URLSearchParams();
        const port = process.env.PORT;
        params.append("client_id", clientId);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", `http://localhost:${port}/callback`);
        params.append("code_verifier", verifier);
        const result = yield fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: params
        });
        const { access_token } = yield result.json();
        console.log(access_token);
        return access_token;
    });
}
exports.getAccessToken = getAccessToken;
module.exports = {
    getAccessToken
};
