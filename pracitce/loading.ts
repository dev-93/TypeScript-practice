{
  /**
     * Print Loading State
     */
    type LoadingState = {
        state: 'loading';
    };

    type SuccessState = {
        state: 'success';
        response: {
            body: string;
        };
    };

    type FailState = {
        state: 'fail';
        reason: string;
    };

    type ResourceLoadState = LoadingState | SuccessState | FailState;

    printLoginState({ state: 'loading' }); // đ loading...
    printLoginState({ state: 'success', response: { body: 'loaded' } }); // đ loaded
    printLoginState({ state: 'fail', reason: 'no network' }); // đą no network

    function printLoginState(state: ResourceLoadState) {
        switch(state.state) {
            case "loading": 
                console.log("đ loading...");
                break;
            case "success": 
                console.log(`đ ${state.response.body}`);
                break;
            case "fail": 
                console.log(`đą ${state.reason}`);
            default:
                console.log("state ę° ėëĒģ ėë Ĩ")
        }
    }
}
