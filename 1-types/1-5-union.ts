{
    // Union Types: OR
    type Direction = "left" | "rihgt" | "top" | "bottom";
    function move(direction: Direction) {
        console.log(direction);
    }

    move("left");

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 8;

    // login function
    type SuccessState = {
        response: {
            body: string;
        }
    }

    type FailState = {
        reason: string;
    }

    type LoginState = SuccessState | FailState;

    function login(): LoginState {
        return {
            response: {
                body: 'logged in!'
            }
        }
    };

    function printLoginState(state: LoginState) {
        if ('response' in state) {
            console.log(state.response.body);
        } else {
            console.log("crying")
        }
    };
}