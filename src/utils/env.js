const env = process.env || {};
export default {
    VAR1: env.COOKIE_2,
    VAR2: env.COOKIE_3,
    PUSHPLUS_TOKEN: env.PUSHPLUS_TOKEN || '29858576981f497ba0e31aea5690149f',
};
