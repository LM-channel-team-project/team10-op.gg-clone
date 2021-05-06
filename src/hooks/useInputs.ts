import { useState, useCallback } from 'react';

export default function useInputs<T>(defaultValue: T) {
  const [input, setInput] = useState(defaultValue);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput((inputs) => {
      return {
        ...inputs,
        [e.target.name]: e.target.value,
      };
    });
  }, []);

  const onReset = useCallback(() => setInput(defaultValue), []);

  return [input, onChange, onReset] as [T, typeof onChange, typeof onReset];
}
