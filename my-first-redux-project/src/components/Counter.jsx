import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementBy5 } from '../redux/features/counter/counterSlice';

const Counter = () => {
    const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    // console.log(count);
    return (
        <div>
            <button onClick={()=>dispatch(incrementBy5(5))}>Increment 5</button><br />
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <div>
                <h1>{ count}</h1>
            </div>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;