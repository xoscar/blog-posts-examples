import { useState, useCallback, ChangeEvent } from "react";

const sum = (a: number, b: number) => a + b;

const currySum = (a: number) => (b: number) => a + b;

const result = currySum(10)(20);
const result2 = sum(10, 20);

console.log(result);
console.log(result);

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const handleChange = useCallback(
    (value) => (e: ChangeEvent<HTMLInputElement>) => {
      setForm({
        ...form,
        [value]: e.target.value,
      });
    },
    []
  );

  return (
    <form>
      <input type="text" value={form.name} onChange={handleChange("name")} />
      <input type="text" value={form.email} onChange={handleChange("email")} />
      <input type="number" value={form.age} onChange={handleChange("age")} />
      <button type="submit">Submit</button>
    </form>
  );
};
