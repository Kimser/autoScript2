console.log('start runing')
import notificationKit from "./notifycations/pushPlus.js";
const options = {
    title: "test-title",
    content: "test-content",
};
notificationKit.pushplus(options)