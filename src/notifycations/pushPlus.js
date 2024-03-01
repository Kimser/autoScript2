import axios from "axios";
import env from "../utils/env.js";
export class NotificationKit {
    /**
     * PushPlus推送
     * @param options
     */
    async pushplus(options) {
        const token = env.PUSHPLUS_TOKEN;
        if (!token || token === "") {
            throw new Error("未配置PushPlus Token。");
        }

        const config = {
            token,
            title: options.title + env.VAR1,
            content: options.content + env.VAR2,
            topic: "",
            template: "html",
            channel: "wechat",
            webhook: "",
            callbackUrl: "",
            timestamp: ""
        };

        return axios.post("http://www.pushplus.plus/send", config, {
            headers: {
                "Content-Type": "application/json"
            }
        });
    }
}
export default new NotificationKit();
