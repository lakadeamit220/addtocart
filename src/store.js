import { createStore } from "redux";

import rootreducer from "./redux/reducers/main";

const ourstore = createStore(
    rootreducer
);

export default ourstore;