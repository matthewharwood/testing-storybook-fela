/** @jsx h */
/* eslint-disable react/no-unknown-property, react/prop-types */

import { h, render } from 'preact';
import { useState } from 'preact/hooks';

function Counter() {
  const [count, setCount] = useState(0);
                            // ^ default state value
  return (
    <div class="counter">
      Current count: {count}
      <button onClick={() => setCount(count + 1)}> +1 </button>
      <button onClick={() => setCount(count - 1)}> -1 </button>
    </div>
  );
}
export default Counter;
