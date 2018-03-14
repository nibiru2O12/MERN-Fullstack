const env = process.env;

export default {
    PORT : env.PORT || 9090,
    host : env.host || 'localhost',
    get serverUrl(){
        return `http://${this.host}:${this.PORT}`;
    }
};