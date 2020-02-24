import React, { useState } from "react";
import { Input, InputGroup, InputGroupAddon, Button } from "reactstrap";

export default function() {
  const [count, setCount] = useState(1);

  return (
    <InputGroup className="mt-2 mb-2">
      <InputGroupAddon addonType="prepend">
        <Button onClick={() => setCount(count - 1)}>-</Button>
      </InputGroupAddon>
      <Input
        value={count}
        onChange={event => setCount(parseInt(event.target.value, 10))}
        className=""
      />
      <InputGroupAddon addonType="append">
        <Button onClick={() => setCount(count + 1)}>+</Button>
      </InputGroupAddon>
    </InputGroup>
  );
}
