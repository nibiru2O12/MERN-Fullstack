const env = process.env;

export default {
    PORT : env.PORT || 9090,
    host : env.host || '0.0.0.0',
    get serverUrl(){
        return `http://${this.host}:${this.PORT}`;
    }
};