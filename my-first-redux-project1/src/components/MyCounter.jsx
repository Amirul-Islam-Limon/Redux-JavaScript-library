import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, decrementBy2 } from '../redux/freatures/counter/counterSlice';

const MyCounter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <p>{ count}</p>
            <button onClick={()=>dispatch(decrement())}>Decrement</button><br />
            <button onClick={()=>dispatch(decrementBy2(2))}>Decrement By 2</button>
        </div>
    );
};

export default MyCounter;