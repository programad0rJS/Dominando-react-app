import React, { useState, useEffect } from 'react';

const JosueHook = () => {
    const [count, setCount] = useState(0);

    // De forma similar a componentDidMount y componentDidUpdate
    useEffect(() => {
      // Actualiza el título del documento usando la API del navegador
      document.title = `You clicked ${count} times`;
    });
    return (
        <div>
            <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click me
                </button>
            </div>
        </div>
    )
}

export default JosueHook
