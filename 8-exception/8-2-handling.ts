class NetworkClient {
    tryConnect():void {
        throw new Error("network Error");
    }
};

class UserService {
    constructor(private client: NetworkClient) {}

    login() {
        this.client.tryConnect();
    }
}

class App {
    constructor(private userService: UserService) {}
    run() {
        try {
            this.userService.login();
        } catch(error) {
            // 에러 처리해주는 곳
        } finally {

        }
    }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
service.login();
